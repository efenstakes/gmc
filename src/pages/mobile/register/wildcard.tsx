import React from "react";
import styled from "styled-components";
import axios from 'axios';

import Text from "../../../components/common/Text";
import Image from "../../../components/common/Image";
import TextField from "../../../components/common/TextField";
import Button from "../../../components/common/Button";
import Container from "../../../components/common/Container";
import Row from "../../../components/layout/Row";
import PhotoUploadField from "../../../components/common/PhotoUploadField";
import CvUploadField from "../../../components/common/CvUploadField";



import {
  Button as MUI_Button,
  CircularProgress, 
  Snackbar,
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';



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
  applicantCV?: any,
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
  applicantCVError?: any,
  applicantPhotoError?: any,
  expectationsError?: String,
  applicationError?: String,

  applicationSuccess?: boolean,
}




class  MobileWildcardApplication extends React.Component<IProps, IState> {
  
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
      applicantCV: null,
      applicantPhoto: null,
      expectations: '',
      
      companyNameError: '',
      companyEmailError: '',
      companyPhoneError: '',
      applicantFullNameError: '',
      applicantTitleError: '',
      applicantEmailError: '',
      applicantPhoneError: '',
      applicantCVError: '',
      applicantPhotoError: '',
      expectationsError: '',
      applicationError: '',
      applicantDobError: '',

      applicationSuccess: undefined,
      isLoading: false,
      hasError: false
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
    data.append('application_type', 'Wildcard')

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
      })

  }// submitApplication(event: any) { .. }


  pageForm() {
    // return 
  }
  
  render() {
    return (
      <PageWrapper>
        <ContentWrap>
          <Text isTitle>Wildcard application</Text>
          <br />
          <Image
            src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/wildcard_GKX0iuiwO.png"
            height="180px"
            width="70%"
          />
          <br />
          <Text isBody>
            The Great Minds Challenge is a two-months program which will culminate
            with a three-day high-powered challenge. The most innovative global
            thinkers, entrepreneurs and scholars will be brought together under
            one program to enable the formation of the new generation leaders.
          </Text>
          <br />
          <br />
          <TextField className="textfield" label="Company name"
                     name="companyName"
                     onChange={this.onInputChange} />
          <br />
          <TextField className="textfield" label="Job title"
                     name="applicantTitle"
                     onChange={this.onInputChange} />
          <br />
          <TextField className="textfield" label="Full name"
                     name="applicantFullName"
                     onChange={this.onInputChange} />
          <br />
          <TextField className="textfield" label="Date of birth"
                     name="applicantDob"
                     type="date"
                     onChange={this.onInputChange} />
          <br />
          <TextField className="textfield" label="E-mail address"
                     name="applicantEmail"
                     onChange={this.onInputChange} />
          <br />
          <TextField className="textfield" label="Phone number"
                     name="applicantPhone"
                     onChange={this.onInputChange} />
        </ContentWrap>
        <br />
        <br />
        <Container
          isDefault={false}
          padding="50px 120px;"
          flexDirection="column;"
          justifyContent="space-between;"
          backgroundColor="#fdfdfd;"
        >
          <Row isDefault={true}>
            <Image
              src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/picture_TDcyD9g7o.png"
              height="100px"
              width="50px"
            />
            {/* <Button text="Upload your picture" /> */}
            <PhotoUploadField 
                name="applicantPhoto"
                onChange={this.onFileChange}
                />
          </Row>
          <br />
        </Container>
  
        <ContentWrap>
          <TextFieldCol>
            <Text isTitle textAlign="center !important">
              Accountabiliy partner details (should be your current employer)
            </Text>
            <br />
            <br />
            <TextField className="textfield" label="E-mail address"
                     name="companyEmail"
                     onChange={this.onInputChange} />
            <br />
            <TextField className="textfield" label="Phone number"
                     name="companyPhone"
                     onChange={this.onInputChange} />
            <br />
            <TextField
              className="textfield"
              label="What do you expect of the Great Minds Challenge?"
              name="expectations"
              onChange={this.onInputChange}
            />
            <br />
            <br />
                        
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
                        
            <br />
            <Button
              route="/register"
              id="cancel"
              className="final-btns"
              text="Cancel"
            />
          </TextFieldCol>

          

          <Snackbar open={this.state.applicationSuccess} autoHideDuration={6000}>
            <Alert severity="success">
              Your application has been received by GMC.
            </Alert>
          </Snackbar>
          
          <Snackbar open={ this.state.applicationSuccess === false } autoHideDuration={6000}>
            <Alert severity="warning">
              Application send error. Resend after some time.
            </Alert>
          </Snackbar>

        </ContentWrap>
        <br />
        <br />
        <br />
        <br />
      </PageWrapper>
    );
  }
};

export default MobileWildcardApplication;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 0;
  .textfield {
    width: 80vw;
  }
  .final-btns {
    height: 50px;
    width: 60vw;
  }
  #apply,
  #cancel {
    font-size: 17px;
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

const ContentWrap = styled.div`
  padding: 50px 5%;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextFieldCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
