import React from "react";
import styled from "styled-components";
import axios from 'axios';
// import emailjs from 'emailjs-com';


import Text from "../../components/common/Text";
import Row from "../../components/layout/Row";
import Column from "../../components/layout/Column";
import Image from "../../components/common/Image";
import TextField from "../../components/common/TextField";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import TextArea from "../../components/common/TextArea";
import MobileCompanyApplication from "../mobile/register/company";
import CvUploadField from "../../components/common/CvUploadField";
import PhotoUploadField from "../../components/common/PhotoUploadField";

import {
  Button as MUI_Button,
  CircularProgress, 
  Snackbar,
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';


// import MyForm from "../../components/form"

interface IProps {
}

interface IState {
  companyName?: any,
  companyEmail?: any,
  companyPhone?: any,
  applicantFullName?: any,
  applicantTitle?: any,
  applicantEmail?: any,
  applicantPhone?: any,
  applicantDob?: any,
  applicantPhoto?: any,
  expectations?: any,

  isLoading?: boolean,
  hasError?: boolean,
  
  companyNameError?: String,
  companyEmailError?: String,
  companyPhoneError?: any,
  applicantFullNameError?: String,
  applicantTitleError?: String,
  applicantEmailError?: String,
  applicantDobError?: any,
  applicantPhoneError?: any,
  applicantPhotoError?: any,
  expectationsError?: String,
  applicationError?: String,

  applicationSuccess?: boolean,
}



export default class CompanyApplication extends React.Component<IProps, IState> {
  
  constructor(props: any) {
    super(props);

    this.state = {
      companyName: '',
      companyEmail: '',
      companyPhone: '',
      applicantFullName: '',
      applicantTitle: '',
      applicantEmail: '',
      applicantPhone: '',
      applicantDob: null,
      applicantPhoto: null,
      expectations: '',
      
      isLoading: false,
      hasError: false,

      companyNameError: '',
      companyEmailError: '',
      companyPhoneError: '',
      applicantFullNameError: '',
      applicantTitleError: '',
      applicantEmailError: '',
      applicantPhoneError: '',
      applicantPhotoError: '',
      expectationsError: '',
      applicationError: '',
      applicantDobError: '',

      applicationSuccess: undefined,
    }
    
    this.pageForm = this.pageForm.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onFileChange = this.onFileChange.bind(this)
    this.submitApplication = this.submitApplication.bind(this)
  }

    
  onInputChange(event: any) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log(' onInputChange name ', name, ' value ', value)

    this.setState({ [name]: value });
  }// onInputChange(event) { .. }

  onFileChange(event: any) {
    const target = event.target;
    const name = target.name;
    const file = target.files[0]

    this.setState({ [name]: file });
  }// onFileChangeCV(event) { .. }


  // triggered to submit application
  // check if required data is entered and valid
  // submit
  submitApplication(event: any) {
    event.preventDefault();
     
    // reset errors and loading states
    let hasError = false;
    this.setState({ 
      isLoading: true, hasError: false, 
    })
    console.log('submit data ', this.state.isLoading);

    let {
      applicantFullName, applicantEmail, applicantPhone,
      applicantTitle, applicantPhoto,
      applicantDob, expectations, isLoading,
      companyName, companyEmail, companyPhone
    } = this.state

    // validate data
    console.log('state now ', this.state)
    
    if( applicantPhoto == null ) {
      console.log('Please select your Photo ')
      this.setState({ applicantPhotoError: 'Please select your Photo' })
      hasError = true
    }  
    if( !applicantFullName || applicantFullName.length < 5 ) {
      console.log('Please select your applicantFullName ')
      this.setState({ applicantPhotoError: 'Please enter your name' })
      hasError = true
    }  
    if( !applicantEmail || applicantEmail.length < 5 ) {
      console.log('Please select your applicantEmail ')
      this.setState({ applicantPhotoError: 'Please enter your email' })
      hasError = true
    }  
    if( !applicantTitle || applicantTitle.length < 5 ) {
      console.log('Please select your applicantTitle ')
      this.setState({ applicantPhotoError: 'Please enter your title' })
      hasError = true
    }  
    if( !applicantPhone || applicantPhone.length < 5 ) {
      console.log('Please select your applicantPhone ')
      this.setState({ applicantPhotoError: 'Please enter your phone' })
      hasError = true
    }  
    if( expectations == null ) {
      console.log('Please select your expectations ')
      this.setState({ applicantPhotoError: 'Please enter your expectations' })
      hasError = true
    }  
    if( !companyName || companyName.length < 5 ) {
      console.log('Please select your companyName ')
      this.setState({ applicantPhotoError: 'Please enter your company name' })
      hasError = true
    }  
    if( !companyEmail || companyEmail.length < 5 ) {
      console.log('Please select your companyEmail ')
      this.setState({ applicantPhotoError: 'Please enter your company email' })
      hasError = true
    }  
    if( !companyPhone || companyPhone.length < 5 ) {
      console.log('Please select your companyPhone ')
      this.setState({ applicantPhotoError: 'Please enter your company phone' })
      hasError = true
    }  
    
    console.log('state after checks >>> ', this.state);

    // check if we have errors
    if( hasError ) {
      console.log('we have error')
      this.setState({ hasError: true, isLoading: false })
      return
    } else {
      console.log('no errors, we good')
    }

    const data = new FormData() 
    data.append('applicant_photo', applicantPhoto)
    data.append('applicant_fullname', applicantFullName)
    data.append('applicant_email', applicantEmail)
    data.append('applicant_phone', applicantPhone)
    data.append('applicant_title', applicantTitle)
    data.append('expectations', expectations)
    data.append('applicant_dob', applicantDob)
    data.append('company_name', companyName)
    data.append('company_email', companyEmail)
    data.append('company_phone', companyPhone)
    data.append('application_type', 'Company')

    console.log('b4 axios')
    let url = 'https://enigmatic-coast-88833.herokuapp.com'
    // let url = "http://localhost:3333"
    axios.post(`${url}/mail`, data, {})
      .then((res: any) => { 
        console.log('after axios')
        console.log('res ', res)
        
        if( res['data']['send'] ) { console.log('all ok')
          this.setState({ isLoading: false, hasError: false, applicationSuccess: true })
          return
        } else { console.log('not all ok')
          this.setState({ isLoading: false, hasError: true, applicationSuccess: false })
          return
        }

      })
      .catch((error: any)=> {
        console.log('after axios')
        console.log('error ', error)
        this.setState({ isLoading: false, hasError: true, applicationSuccess: false })
        return
      })

  }// submitApplication(event: any) { .. }


  pageForm() {
    // return 
  }
  
  render() {
    return window.screen.width < 740 ? (
      <MobileCompanyApplication />
    ) : (
      <PageWrapper>
        <Wrapper>
          <Row isDefault={true}>
            <Column maxWidth="48%" minWidth="48%">
              <Text isTitle>Company application</Text>
              <br />
              <Text isBody>
                The Great Minds Challenge is a two-months program which will
                culminate with a three-day high-powered challenge. The most
                innovative global thinkers, entrepreneurs and scholars will be
                brought together under one program to enable the formation of
                the new generation leaders.
              </Text>
            </Column>
            <Column maxWidth="48%" minWidth="48%">
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/company_HVk3lf4WdG.png"
                height="350px"
                width="80%"
              />
            </Column>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

        
          <TextFieldRow>
            <TextField className="textfield" label="Company name" 
                       onChange={this.onInputChange}
                       name="companyName"/>
            <TextField className="textfield" label="Job title"
                       onChange={this.onInputChange}
                       name="applicantTitle" />
          </TextFieldRow>
          <br />
          <TextFieldRow>
            <TextField className="textfield" label="Full name"
                       onChange={this.onInputChange}
                       name="applicantFullName" />
            <TextField className="textfield" label="Date of birth"
                       onChange={this.onInputChange}
                       type="date" name="applicantDob" />
          </TextFieldRow>
          <br />
          <TextFieldRow>
            <TextField className="textfield" label="E-mail address"
                       onChange={this.onInputChange}
                       type="email"
                       name="applicantEmail" />
            <TextField className="textfield" label="Phone number"
                       onChange={this.onInputChange}
                       type="phone"
                       name="applicantPhone" />
          </TextFieldRow>
        </Wrapper>
        <br />
        <br />
        <br />
        <Container
          isDefault={false}
          padding="50px 120px;"
          flexDirection="column;"
          justifyContent="space-between;"
          backgroundColor="#fdfdfd;"
        >
          
          <UploadRow>

            <Column>
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/picture_TDcyD9g7o.png"
                height="230px"
                width="120px"
              />
              <br />
              <br />
              {/* <Button text="Upload your picture" /> */}
              <PhotoUploadField 
                  name="applicantPhoto"
                  onChange={this.onFileChange} />
            </Column>

          </UploadRow>

        </Container>
        <br />
        <br />
        <Wrapper>
          <Text isTitle textAlign="center !important">
            Accountabiliy partner details (should be your current employer)
          </Text>
          <br />
          <br />
          <br />
          <TextFieldRow>
            <TextField
              className="accountability-partner"
              name="companyEmail"
              onChange={this.onInputChange}
              label="E-mail address"
            />
            <TextField
              className="accountability-partner"
              name="companyPhone"
              onChange={this.onInputChange}
              label="Phone number"
            />
          </TextFieldRow>
          <br />
          <br />
          <br />
          <br />
          <TextArea 
              label="What are your expectations of the Great Minds Challenge?"
              name="expectations"
              onChange={this.onInputChange} />
          <br />
          <br />
          <br />
          <br />
          <Row isDefault={true}>

            {
              this.state.isLoading 
                ? <Row isDefault={true}>
                    <CircularProgress />
                    <p 
                      style={{ 
                        marginLeft: '12px',
                        fontSize: '1.4em',
                        fontWeight: 600,
                        color: '#4f7cbd' 
                      }}>
                      Submitting Application...
                    </p>
                </Row>
                : <Button id="apply" className="final-btns" 
                      text="Apply"
                      onClick={this.submitApplication} 
                    />
            }
            
                        
            <Button
              route="/register" id="cancel"
              className="final-btns" text="Cancel"
            />
          </Row>   


          <Snackbar open={this.state.applicationSuccess === true} autoHideDuration={6000}>
            <Alert severity="success">
              Your application has been received by GMC.
            </Alert>
          </Snackbar> 
          
          <Snackbar open={ this.state.applicationSuccess === false } autoHideDuration={6000}>
            <Alert severity="warning">
              Application send error. Resend after some time.
            </Alert>
          </Snackbar>
          

          {/* <MyForm /> */}
        </Wrapper>
        <br />
        <br />
        <br />
        <br />
      </PageWrapper>
    );
  }
}

const PageWrapper = styled.div`
  padding-top: 100px;
  .final-btns {
    height: 85px;
    width: 35vw;
  }
  #apply,
  #cancel {
    font-size: 28px;
  }
  #apply {
    border: 2px solid green;
    color: green;
    :hover {
      background: green;
      color: white;
    }
    }
    #cancel {
        border: 2px solid red;
    color: red;
    :hover {
      background: red;
      color: white;
  }
`;

const Wrapper = styled.div`
  max-width: 80%;
  margin: auto auto;
`;

const TextFieldRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .textfield,
  .accountability-partner {
    width: 38vw;
  }
`;

const UploadRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  * {
    align-items: center;
  }
`;
