import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom'
import { Card, Button, Container, ButtonToolbar, Row, Col, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ResumeService from '../../services/ResumeService';
import { Alert } from 'bootstrap';
import FileUploadService from '../../services/FileUploadService';
import MailService from '../../services/MailService';

let yupShema = Yup.object().shape({
    position: Yup.string().required("Required"),
    education: Yup.string().required("Required"),
    company: Yup.string().required("Required"),
});

export class PageTwo extends PureComponent {

    state = {
        loading: true,
        dataForm:{
            emailReceiver:'',
            name:'',
            contactNumber:'',
            address:'',
            position:'',
            education:'',
            company:'',
            cv:''
        },
        toDashBoard:false,
        toPageOne:false,
        emailReceiver:this.props.location.emailReceiver || 'rahimie',
        name:this.props.location.name || 'rahimie',
        contactNumber:this.props.location.contactNumber || 'rahimie',
        address:this.props.location.address || 'rahimie',
        cv:'rahimie',
        uploadFile:0,

    };

    componentDidUpdate() {

    }

    componentDidMount() {
        this.getList()
    }

    getList = () => {
        this.setState({ loading: true });
    }

    toDashBoard = (event,reroute) => {
        event.preventDefault();
        this.setState({ toDashBoard: reroute});
    }


    toPageOne = (event,reroute) => {
        event.preventDefault();
        this.setState({ toPageOne: reroute});
    }

    backButtonHandler = () => {
        this.props.history.push(
          "/"
        );
      };

    saveButtonHandler = (values) => {
        console.log(values);
        this.updateFormToState(values);
    }

    updateFormToState = async(values) => {
        await this.uploadFile(values);
    
    }

    uploadFile = async (values) => {
        if (this.state.uploadFile === 0) {
            alert('Please upload your cv /resume');
        }
        else {
            const formData = new FormData()
            formData.append('resume', this.state.uploadFile)
            FileUploadService.upload(formData).then(response => {
                this.setState(prevState => {
                    return {
                        ...prevState,
                        dataForm: {
                            position:values.position,
                            education:values.education,
                            company:values.company,
                            emailReceiver:this.state.emailReceiver,
                            name:this.state.name,
                            contactNumber:this.state.contactNumber,
                            address:this.state.address,
                            cv: response.data.filepath,
                        }
                    }
                }, () => {
                    this.pushToService();
                });
            }).catch(error => {
                console.log("Error:", error);
                alert(error);
            });
        }
    }
    
    pushToService = () => {
        console.log(this.state.dataForm);
        ResumeService.create(this.state.dataForm).then(response => {
            this.sendEmailService(response.data._id);
        }).catch(error => {
            console.log("Error:", error);
            alert(error);
        });
    };

    sendEmailService = (id) =>{
        MailService.postEmail(id).then(response => {
            alert('Your Application Has Been Sent');
            this.backButtonHandler();
        }).catch(error => {
            console.log("Error:", error);
            alert(error);
        });
    }
    
    onFileChange =(e) => {
        console.log(e.target.files[0]);
        this.setState({ uploadFile: e.target.files[0] })
    }

    render() {
        if (this.state.toDashBoard === true) {
            return <Redirect to={{
                pathname: '/',
                emailReceiver: this.state.emailReceiver,
            }} />
            }
        if (this.state.toPageOne === true) {
                return <Redirect to={{
                    pathname: '/2',
                    emailReceiver: this.state.emailReceiver,
                    name: this.state.name,
                    contactNumber: this.state.contactNumber,
                    address: this.state.address,
                }} />
        }
        let { position} = this.state.dataForm.position
        let { education} = this.state.dataForm.education
        let { company} = this.state.dataForm.company
        return (  <Formik
            initialValues={{ position, education,company}}
            validationSchema={yupShema}
            enableReinitialize= {true}
            onSubmit={(values) => {
              this.saveButtonHandler(values);
            }}
          >
        {(props) => { const { 
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
              return ( <Container>
                <Card className="card-content" style={{margin:10+'%'}}>
                <Card.Header className="pb-0">
                     <h3>Step 3</h3>
                </Card.Header>
                <Card.Body>
                    <div>
                        <Row className="ml-1 mr-1 mt-6">
                            <Col>
                                <Form.Group as={Col}>
                                <h6>Please Enter Your Applied Position, Education Details, Last Employment Details and CV</h6>
                                </Form.Group>
                                <Form.Group as={Col}>
                                <Form.Label className="required">Position Applying:</Form.Label>
                                <Form.Control
                                    id="position"
                                    placeholder="Enter your position apply"
                                    type="text"
                                    value={values.position}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={!!props.errors.position}
                                    className={
                                        errors.position && touched.position
                                        ? "text-input error"
                                        : "text-input"
                                    }
                                />
                                 <Form.Control.Feedback type="invalid">
                                    Required 
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                <Form.Label className="required">Education:</Form.Label>
                                <Form.Control
                                    id="education"
                                    placeholder="Enter your highest education institute"
                                    type="text"
                                    value={values.education}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={!!props.errors.education}
                                    className={
                                        errors.education && touched.education
                                        ? "text-input error"
                                        : "text-input"
                                    }
                                />
                                 <Form.Control.Feedback type="invalid">
                                    Required
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                <Form.Label className="required">Last Company:</Form.Label>
                                <Form.Control
                                    id="company"
                                    placeholder="Enter your last company name"
                                    type="text"
                                    value={values.company}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={!!props.errors.company}
                                    className={
                                        errors.company && touched.company
                                        ? "text-input error"
                                        : "text-input"
                                    }
                                />
                                 <Form.Control.Feedback type="invalid">
                                    Required
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Row>
                                        <Col> 
                                        <Form.Label className="required">Please Upload Your Resume Below:</Form.Label>
                                        </Col>
                                    </Row>
                                    <form action="/profile" method="post" enctype="multipart/form-data">
                                        <input type="file" name="resume"  onChange={this.onFileChange} />
                                    </form>
                                </Form.Group>
                                <Form.Group as={Col}>
                                <ButtonToolbar className="justify-content-end">
                                <Button
                                  variant="secondary" className="mr-3"onClick={(event) => this.toPageOne(event,true)}>
                                  Back
                                </Button>
                                <Button
                                  variant="primary"  onClick={(event) => handleSubmit()}>
                                  Submit
                                </Button>
                              </ButtonToolbar>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                </Card.Body>
            </Card>
          </Container>)
            }}
          </Formik>);
    }
}

export default PageTwo;