import Lottie from "lottie-react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import LoginLottie from "@assets/lottieFiles/LoginLottie.json";
import styles from "@styles/Asset/Global.module.css";
import { LoginSchema, LoginType } from "@Validations/LoginValidation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppSelector } from "@Redux/hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { ActiveLogin } from "@Redux/user/LoginSlice";
import UserProfile from "./UserProfile";
const {
  LoginStyles,
  head,
  subhead,
  info,
  formInput,
  Lable,
  TextCard,
  submit,
  ImgCard,
  LottieStyles,
} = styles;
const Login = () => {
  //selector
  const {
    DefaultUserEmail,
    DefaultUserPassword,
    isloggin,
    NewUser,
    isToCheckout,
  } = useAppSelector((state) => state.login);

  //navigate
  const navigate = useNavigate();

  //dispath
  const dispatch = useDispatch();

  //states
  const [isLoginError, setisLoginError] = useState(false);

  //react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
  });

  //handleSubmit
  const SubmitForm: SubmitHandler<LoginType> = (data) => {
    console.log(data);
    console.log(DefaultUserEmail, DefaultUserPassword);

    if (
      (data.email === DefaultUserEmail &&
        data.password === DefaultUserPassword) ||
      (data.email === NewUser.Email && data.password === NewUser.Password)
    ) {
      if (isToCheckout) {
        dispatch(ActiveLogin());
        navigate("/cart/checkout");
      } else {
        dispatch(ActiveLogin());
        navigate("/userprofile");
      }
    } else {
      setisLoginError(true);
    }
  };
  return (
    <div className={LoginStyles}>
      <Container>
        {isloggin ? (
          <UserProfile />
        ) : (
          <Row>
            <Col md={12} lg={6} className={TextCard}>
              <div className={head}>Subscribe to us</div>
              <div className={subhead}>To get the latest offers</div>
              <div className={info}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
                blanditiis incidunt voluptates quod corporis aliquid iure nihil
                ea enim magni.
              </div>
              <Form onSubmit={handleSubmit(SubmitForm)}>
                <Form.Group className="mb-3">
                  <Form.Label className={Lable}>Email address</Form.Label>
                  <Form.Control
                    type="text"
                    className={formInput}
                    {...register("email")}
                    isInvalid={!!errors.email?.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className={Lable}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    className={formInput}
                    {...register("password")}
                    isInvalid={!!errors.password?.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" id={submit}>
                  Submit
                </Button>
              </Form>
            </Col>
            <Col md={12} lg={6} className={ImgCard}>
              <Lottie animationData={LoginLottie} className={LottieStyles} />
            </Col>
          </Row>
        )}
        {isLoginError && (
          <Alert
            style={{ position: "absolute", top: "43px", width: "30%" }}
            severity="error"
            variant="filled"
          >
            You have entered an invalid username or password
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default Login;
