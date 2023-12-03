import { FunctionComponent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../../../component/Input"; 
import Button from "../../../component/Button";

import { Spin } from 'antd';
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LoadingOutlined
} from "@ant-design/icons";

import {
  LoginContainer,
  LoginWrapper,
  LoginForm,
  LoginError,
} from "./styled.login";


import { auth } from "../../../firebase";

import { signInWithEmailAndPassword } from "firebase/auth";

const CreateLoginForm: FunctionComponent = () => {
  const [ emailErr, setEmailErr] = useState<string>('');
  const [ isLoading, setIsloading] = useState<boolean>(false);

  const navigate = useNavigate();

  const _handleSignup = async (values: any) => {
    const payload = {
      email: values.email,
      password: values.password,
    }
    
  try {
      setIsloading(true)
      const userCredential = await signInWithEmailAndPassword(auth, payload.email, payload.password);
      const user = userCredential.user;
  
      if (user) {
        navigate('/dashboard');
      }

      setIsloading(false);
      
    } catch (error: any) {
      if (error.code === 'auth/invalid-credential') {
        setEmailErr(' Invalid Email Address or Password');
        setIsloading(false)
      }
      if (error.code === 'auth/too-many-requests') {
        setEmailErr("Too many attempts you can try again later");
        setIsloading(false)
      }
    }
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

            {emailErr && <LoginError>{emailErr}</LoginError>}
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
            <Button type="primary" htmlType="submit" disabled={isLoading} size="large">
              {isLoading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /> : 'Login'}
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
