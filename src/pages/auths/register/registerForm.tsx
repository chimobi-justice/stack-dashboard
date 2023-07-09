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
  RegisterContainer,
  RegisterWrapper,
  RegisterForm,
  RegisterError,
} from "./styled.register";

const CreateRegisterForm: FunctionComponent = () => {
  const _handleSignup = () => {
    alert("click");
  };

  const validateSchema = Yup.object({
    fullname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "password must be more than 8")
      .max(15, "password should be atleast 15 chars"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirm_password: ""
    },
    onSubmit: _handleSignup,
    validationSchema: validateSchema,
  });

  const { handleBlur, handleChange, handleSubmit, errors, values } = formik;

  return (
    <RegisterContainer>
      <RegisterWrapper>
        <RegisterForm onSubmit={handleSubmit}>
          <h3>Stack</h3>
          <h1>Register an account</h1>
          <div>
            <label>
              Fullname
              <Input
                type="text"
                placeholder="FullName"
                name="fullname"
                value={values.fullname}
                onBlur={handleBlur}
                onChange={handleChange}
                prefix={<UserOutlined />}
                style={{ padding: "10px" }}
              />
            </label>
            {errors.fullname && (
              <RegisterError>{errors.fullname}</RegisterError>
            )}
          </div>

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
            {errors.email && <RegisterError>{errors.email}</RegisterError>}
          </div>

          <div>
            <label>
              Password
              <Input
                type="password"
                placeholder="Choose a password"
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
            {errors.password && (
              <RegisterError>{errors.password}</RegisterError>
            )}
          </div>

          <div>
            <label>
              Confirm password
              <Input
                type="password"
                placeholder="Repeat your password"
                name="confirm_password"
                value={values.confirm_password}
                prefix={<UserOutlined />}
                iconRender={(visible: any) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                style={{ padding: "10px" }}
              />
            </label>
          </div>

          <div>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
            <p>
              Already have an account <Link to="/">Sign in</Link>
            </p>
          </div>
        </RegisterForm>
      </RegisterWrapper>
    </RegisterContainer>
  );
};

export default CreateRegisterForm;
