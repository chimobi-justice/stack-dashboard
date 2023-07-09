import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../../../component/Input"; 
import Button from "../../../component/Button";

import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";

import {
  LoginContainer,
  LoginWrapper,
  LoginForm,
  LoginError,
} from "./styled.login";

const CreateLoginForm: FunctionComponent = () => {
  const _handleSignup = () => {
    console.log("logging in...");
  };

  const validateSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: _handleSignup,
    validationSchema: validateSchema,
  });

  const { handleBlur, handleChange, handleSubmit, errors, values } = formik;

  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginForm onSubmit={handleSubmit}>
          <h3>Stack</h3>
          <h1>Welcome back</h1>

          <div>
            <label>
              Email Address
              <Input
                type="email"
                placeholder="Email Address"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                prefix={<UserOutlined />}
                style={{ padding: "10px" }}
              />
            </label>
            {errors.email && <LoginError>{errors.email}</LoginError>}
          </div>

          <div>
            <label>
              Password
              <Input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                prefix={<UserOutlined />}
                iconRender={(visible: any) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                style={{ padding: "10px" }}
              />
            </label>
            {errors.password && <LoginError>{errors.password}</LoginError>}
          </div>

          <div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
            <p>
              Don't have an account <Link to="/register">Sign up</Link>
            </p>
          </div>
        </LoginForm>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default CreateLoginForm;
