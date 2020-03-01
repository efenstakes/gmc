import React from "react";
import styled from "styled-components";
import axios from 'axios';

import Text from "../../components/common/Text";
import Row from "../../components/layout/Row";
import Column from "../../components/layout/Column";
import Image from "../../components/common/Image";
import TextField from "../../components/common/TextField";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import TextArea from "../../components/common/TextArea";
import MobileWildcardApplication from "../mobile/register/wildcard";
import CvUploadField from "../../components/common/CvUploadField";
import PhotoUploadField from "../../components/common/PhotoUploadField";


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

  applicationSuccess?: Boolean,
}




export default class WildcardApplication extends React.Component<IProps, IState> {
  
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

      applicationSuccess: false,
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
     
    this.setState({ applicantEmail: 'ememem' })
    console.log('submit data ', this.state);

    let {
      applicantFullName, applicantEmail, applicantPhone,
      applicantTitle, applicantPhoto, applicantCV,
      applicantDob, expectations, 
      companyName, companyEmail, companyPhone
    } = this.state

    // validate data
    if( applicantCV == null ) {
      console.log('applicantCVError error')
      this.setState({ ...this.state, applicantCVError: 'Please select your CV' })
    } 
    if( applicantPhoto == null ) {
      this.setState({ applicantPhotoError: 'Please select your CV', ...this.state })
    }  
    if( !applicantFullName || applicantFullName.length < 5 ) {
      this.setState({ applicantPhotoError: 'Please enter your name', ...this.state })
    }  
    if( !applicantEmail || applicantEmail.length < 5 ) {
      this.setState({ applicantPhotoError: 'Please enter your email', ...this.state })
    }  
    if( !applicantTitle || applicantTitle.length < 5 ) {
      this.setState({ applicantPhotoError: 'Please enter your title', ...this.state })
    }  
    if( !applicantPhone || applicantPhone.length < 5 ) {
      this.setState({ applicantPhotoError: 'Please enter your phone', ...this.state })
    }  
    if( expectations == null ) {
      this.setState({ applicantPhotoError: 'Please enter your expectations', ...this.state })
    }  
    if( !companyName || companyName.length < 5 ) {
      this.setState({ applicantPhotoError: 'Please enter your company name', ...this.state })
    }  
    if( !companyEmail || companyEmail.length < 5 ) {
      this.setState({ applicantPhotoError: 'Please enter your company email', ...this.state })
    }  
    if( !companyPhone || companyPhone.length < 5 ) {
      this.setState({ applicantPhotoError: 'Please enter your company phone', ...this.state })
    }  
    
    console.log('after checks ', this.state);

    
    const data = new FormData() 
    data.append('applicant_cv', applicantCV)
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

    console.log('b4 axios')
    let url = 'https://secret-scrubland-69885.herokuapp.com'
    // "http://localhost:8000/mail"
    axios.post(`${url}/mail`, data, {})
      .then((res: any) => { 
        console.log('after axios')
        console.log('res ', res)
      })
      .catch((error: any)=> {
        console.log('after axios')
        console.log('error ', error)
      })

  }// submitApplication(event: any) { .. }


  pageForm() {
    // return 
  }
  
  render() {
    return window.screen.width < 740 ? (
      <MobileWildcardApplication />
    ) : (
      <PageWrapper>
        <Wrapper>
          <Row isDefault={true}>
            <Column maxWidth="48%" minWidth="48%">
              <Text isTitle>Wildcard application</Text>
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
                src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/wildcard_GKX0iuiwO.png"
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
                     name="companyName"
                     onChange={this.onInputChange} />
            <TextField className="textfield" label="Job title"
                     name="applicantTitle"
                     onChange={this.onInputChange} />
          </TextFieldRow>
          <br />
          <TextFieldRow>
            <TextField className="textfield" label="Full name"
                     name="applicantFullName"
                     onChange={this.onInputChange} />
            <TextField className="textfield" label="Date of birth"
                     name="applicantDob"
                     type="date"
                     onChange={this.onInputChange} />
          </TextFieldRow>
          <br />
          <TextFieldRow>
            <TextField className="textfield" label="E-mail address"
                     name="applicantEmail"
                     onChange={this.onInputChange} />
            <TextField className="textfield" label="Phone number"
                     name="applicantPhone"
                     onChange={this.onInputChange} />
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
                onChange={this.onFileChange}
                />
            </Column>

            <Column>
              <Image
                src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/cv_o_IH3BSf9.png"
                height="230px"
                width="150px"
              />
              <br />
              <br />
              {/* <Button text="Upload your CV" /> */}
              <CvUploadField 
                name="applicantCV"
                onChange={this.onFileChange}
                />
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
              label="E-mail address"
              name="companyEmail"
              onChange={this.onInputChange} 
            />
            <TextField
              className="accountability-partner"
              label="Phone number"
              name="companyPhone"
              onChange={this.onInputChange}
            />
          </TextFieldRow>
          <br />
          <br />
          <br />
          <br />
          <TextArea 
              label="What are your experctations of the Great Minds Challenge?"
              name="expectations"
              onChange={this.onInputChange}
            />
          <br />
          <br />
          <br />
          <br />
          <Row isDefault={true}>
            <Button id="apply" className="final-btns" 
                    text="Apply"
                    onClick={this.submitApplication}  />
            <Button
              route="/register"
              id="cancel"
              className="final-btns"
              text="Cancel"
            />
          </Row>
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
