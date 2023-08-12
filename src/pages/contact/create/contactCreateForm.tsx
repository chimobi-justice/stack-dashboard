import { FunctionComponent } from 'react';

// import PhoneInput from 'react-phone-number-input';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { 
	CreateContactContainer, 
	CreateContactForm, 
	CreateContactFormWrapper, 
	CreateContactError 
} from './styled.createContact';

import Input from '../../../component/Input';
import Button from '../../../component/Button';

import { notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';

type NotificationType = 'success' | 'warning' | 'error' | 'info';

enum NotificationMessage {
	success = "Contact created successfully",
	warning = "Something went wrong",
	error = "error while creating your contact",
	info = "Please try reload your page"
} 

const ContactCreateForm: FunctionComponent = () => {
  const [api, contextholder] = notification.useNotification();

	const promptNotificationBox = (type: NotificationType) => {
		api[type]({
			message: NotificationMessage[type],
			description: "stack help you save your contact for future used"
		});
	}

	const _handleCreateContact = () => {
		promptNotificationBox('success');
	}

	const validateSchema = Yup.object({
		name: Yup.string().required("Required"),
		email: Yup.string().email("Invalid Email address"),
		phone: Yup.number().required("Required"),
		city: Yup.string()
	});

	const formik = useFormik({
		initialValues: {
			name: "",
			company: "",
			email: "",
			phone: "",
			address: "",
			city: ""
		},
		onSubmit: _handleCreateContact,
		validationSchema: validateSchema
	});

	const { handleSubmit, handleBlur, handleChange, errors, values } = formik;
  
  return (
    <>
      {/* contextholder shows the notification box */}
      {contextholder}

      <CreateContactContainer>
        <CreateContactForm onSubmit={handleSubmit}>
          <h1>Create Contact</h1>
          
          <CreateContactFormWrapper>
            <div>
              <Input 
                type="text"
                placeholder="Enter name"
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                prefix={<UserOutlined />}
                style={{ padding: "10px" }}
              />
              {errors.name && (
                <CreateContactError>{errors.name}</CreateContactError>
              )}
            </div>

            <div>
              <Input 
                type="text"
                placeholder="Phone"
                name="phone"
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
                prefix={<UserOutlined />}
                style={{ padding: "10px" }}
              />

              {/* <PhoneInput 
                placeholder="Enter Phone number"
                onChange={() => null }
              /> */}
              {errors.phone && (
                <CreateContactError>{errors.phone}</CreateContactError>
              )}
            </div>

            <div>
              <Input 
                type="text"
                placeholder="Email (optional)"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                prefix={<UserOutlined />}
                style={{ padding: "10px" }}
              />
              {errors.email && ( 
                <CreateContactError>{errors.email}</CreateContactError>
              )}
            </div>  

            <div>
              <Input 
                type="text"
                placeholder="Company (optional)"
                name="company"
                value={values.company}
                onBlur={handleBlur}
                onChange={handleChange}
                prefix={<UserOutlined />}
                style={{ padding: "10px" }}
              />
            </div>

            <div>
              <Input 
                type="text"
                placeholder="Address (optional)"
                name="address"
                value={values.address}
                onBlur={handleBlur}
                onChange={handleChange}
                prefix={<UserOutlined />}
                style={{ padding: "10px" }}
              />
            </div>

            <div>
              <Input 
                type="text"
                placeholder="City (optional)"
                name="city"
                value={values.city}
                onBlur={handleBlur}
                onChange={handleChange}
                prefix={<UserOutlined />}
                style={{ padding: "10px" }}
              />
            </div>
          </CreateContactFormWrapper>

          <div>
            <Button 
              type="primary" 
              htmlType="submit" 
              size="large" 
            >
              Create Contact
            </Button>
          </div>
        </CreateContactForm>
      </CreateContactContainer>
    </>
  );
}

export default ContactCreateForm;