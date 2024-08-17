import styles from "@styles/Asset/Global.module.css";
const {
  formInput,
  Lable,
  InputsCard,
  RegisterStyles,
  info,
  head,
  submit,
  ImgCard,
} = styles;
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterSchema, SignType } from "@Validations/RegisterationValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import {
  ActiveLogin,
  AddNewUser,
  ValidateEmailAddress,
} from "../Redux/user/LoginSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert } from "@mui/material";

const Register = () => {
  // dispatch
  const dispatch = useAppDispatch();

  //selector
  const { exsitEmail } = useAppSelector((state) => state.login);

  //states
  const [isRegisterError, setisRegisterError] = useState(false);

  //navigate
  const navigate = useNavigate();

  //react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignType>({
    mode: "onBlur",
    resolver: zodResolver(RegisterSchema),
  });

  //handleSubmit
  const SubmitForm: SubmitHandler<SignType> = (data) => {
    if (exsitEmail == false) {
      dispatch(AddNewUser(data));
      dispatch(ActiveLogin());
      navigate("/userprofile");
    } else {
      setisRegisterError(true);
    }
  };

  return (
    <div className={RegisterStyles}>
      <Container fluid>
        <Row>
          <Col md={12} lg={6} className={InputsCard}>
            <div className={head}>Join us now</div>
            <div className={info}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              eum animi doloremque necessitatibus
            </div>
            <Form onSubmit={handleSubmit(SubmitForm)}>
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className={Lable}>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      className={formInput}
                      {...register("FirstName")}
                      isInvalid={!!errors.FirstName?.message}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.FirstName?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className={Lable}>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      className={formInput}
                      {...register("LastName")}
                      isInvalid={!!errors.LastName?.message}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.LastName?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className={Lable}>Phone Number</Form.Label>
                    <Form.Control
                      type="number"
                      className={formInput}
                      {...register("Phone")}
                      isInvalid={!!errors.Phone?.message}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.Phone?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className={Lable}>Email address</Form.Label>
                    <Form.Control
                      type="text"
                      className={formInput}
                      {...register("Email")}
                      isInvalid={!!errors.Email?.message}
                      onBlur={(e) => {
                        dispatch(ValidateEmailAddress(e.target.value));
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.Email?.message}
                    </Form.Control.Feedback>

                    {exsitEmail ? (
                      <div style={{ color: "red" }}>
                        Sorry This email address is already used by Another User
                      </div>
                    ) : null}
                  </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className={Lable}>Password</Form.Label>
                    <Form.Control
                      type="password"
                      className={formInput}
                      {...register("Password")}
                      isInvalid={!!errors.Password?.message}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.Password?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className={Lable}>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      className={formInput}
                      {...register("confirmPassword")}
                      isInvalid={errors.confirmPassword?.message ? true : false}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Button variant="primary" type="submit" id={submit}>
                  Submit
                </Button>
              </Row>
            </Form>
          </Col>
          <Col md={12} lg={6} style={{ padding: "0" }} className={ImgCard}>
            <img src="/register.jpg" alt="register" className="img-fluid" />
          </Col>
        </Row>
        {isRegisterError && (
          <Alert
            style={{ position: "absolute", top: "43px", width: "30%" }}
            severity="error"
            variant="filled"
          >
            There is an error in some of your data. Please re-enter it.
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default Register;
