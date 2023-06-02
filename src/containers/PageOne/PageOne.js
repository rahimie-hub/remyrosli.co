import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom'
import { Card, Button, Container, ButtonToolbar, Row, Col, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';


let yupShema = Yup.object().shape({
    name: Yup.string().required("Required"),
    contactNumber: Yup.number().required("Required"),
    address: Yup.string().required("Required"),
});

export class PageOne extends PureComponent {

    state = {
        loading: true,
        dataForm:{
            emailReceiver:this.props.location.emailReceiver || '',
            name:this.props.location.name || '',
            contactNumber:this.props.location.contactNumber || '',
            address:this.props.location.address || '',

        },
        toDashBoard:false,
        toPageTwo:false,
        emailReceiver:this.props.location.emailReceiver || '',
    };

    componentDidUpdate() {
    }
    componentDidMount() {
    }


    toDashBoard = (event,reroute) => {
        event.preventDefault();
        this.setState({ toDashBoard: reroute});
    }


    toPageTwo = (reroute) => {
        this.setState({ toPageTwo: reroute});
    }
    

    saveButtonHandler = (values) => {
        this.updateFormToState(values);
    }

    updateFormToState = (values) => {
        this.setState(prevState => {
            return {
                ...prevState,
                dataForm: {
                    name:values.name,
                    contactNumber:values.contactNumber,
                    address:values.address,
                    emailReceiver:this.state.emailReceiver
                }
            }
        }, () => {
            console.log(this.state.dataForm);
            this.toPageTwo(true);
        });
    }

    render() {
        if (this.state.toDashBoard === true) {
            return <Redirect to={{
                pathname: '/',
                emailReceiver: this.state.emailReceiver,
            }} />
            }
        if (this.state.toPageTwo === true) {
                return <Redirect to={{
                    pathname: '/3',
                    emailReceiver: this.state.dataForm.emailReceiver,
                    name: this.state.dataForm.name,
                    contactNumber: this.state.dataForm.contactNumber,
                    address: this.state.dataForm.address,
                }} />
        }
        let { name} = this.state.dataForm
        let { contactNumber} = this.state.dataForm
        let { address} = this.state.dataForm

        return (  <Formik
            initialValues={{ name, contactNumber,address}}
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
                     <h3>Step 2</h3>
                </Card.Header>
                <Card.Body>
                    <div>
                        <Row className="ml-1 mr-1 mt-6">
                            <Col>
                                <Form.Group as={Col}>
                                <h6>Please Enter Your Name, Contact Number and  Address</h6>
                                </Form.Group>
                                <Form.Group as={Col}>
                                <Form.Label className="required">Name:</Form.Label>
                                <Form.Control
                                    id="name"
                                    placeholder="Enter your name"
                                    type="text"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={!!props.errors.name}
                                    className={
                                        errors.name && touched.name
                                        ? "text-input error"
                                        : "text-input"
                                    }
                                />
                                 <Form.Control.Feedback type="invalid">
                                    Required 
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                <Form.Label className="required">Contact Number:</Form.Label>
                                <Form.Control
                                    id="contactNumber"
                                    placeholder="Enter your contact number"
                                    type="text"
                                    value={values.contactNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={!!props.errors.contactNumber}
                                    className={
                                        errors.contactNumber && touched.contactNumber
                                        ? "text-input error"
                                        : "text-input"
                                    }
                                />
                                 <Form.Control.Feedback type="invalid">
                                    Invalid Contact Number
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                <Form.Label className="required">Address:</Form.Label>
                                <Form.Control
                                    id="address"
                                    placeholder="Enter your address"
                                    type="text"
                                    value={values.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={!!props.errors.address}
                                    className={
                                        errors.address && touched.address
                                        ? "text-input error"
                                        : "text-input"
                                    }
                                />
                                 <Form.Control.Feedback type="invalid">
                                    Invalid Address
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                <ButtonToolbar className="justify-content-end">
                                <Button
                                  variant="secondary" className="mr-3"onClick={(event) => this.toDashBoard(event,true)}>
                                  Back
                                </Button>
                                <Button
                                  variant="primary"  onClick={(event) => handleSubmit()}>
                                  Next
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

export default PageOne;