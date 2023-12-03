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
  RegisterContainer,
  RegisterWrapper,
  RegisterForm,
  RegisterError,
} from "./styled.register";

import { auth, db } from "../../../firebase";
import { addDoc, collection } from 'firebase/firestore';

import { createUserWithEmailAndPassword } from "firebase/auth";
 

const CreateRegisterForm: FunctionComponent = () => {
  const [ emailErr, setEmailErr] = useState<string>('');
  const [ isLoading, setIsloading] = useState<boolean>(false);

  const navigate = useNavigate();

  const _handleSignup = async (values: any) => {
    const payload = {
      email: values.email,
      password: values.password,
      fullname: values.fullname,
    }
    
  try {
      setIsloading(true)
      const userCredential = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
      const user = userCredential?.user;
  
      if (user) {
        const userData = {
          uid: user.uid,
          email: user.email,
          displayName: payload.fullname,
        };
  
        await addDoc(collection(db, "users"), {
          userData
        });

        navigate('/dashboard');
      }

      setIsloading(false);

    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setEmailErr('Email Address already exit')
        setIsloading(false)
      }
    }
  
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

            {emailErr && <RegisterError>{emailErr}</RegisterError>}
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
            <Button type="primary" htmlType="submit" disabled={isLoading} size="large">
              {isLoading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /> : 'Register'}
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
