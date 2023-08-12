import { FunctionComponent, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../../../component/Button";
import Input from "../../../component/Input";
import InputArea from "../../../component/Textarea";

import { Modal } from 'antd';

import { UserOutlined } from "@ant-design/icons";

import { ProfileContainer, ProfileWrapperBox, ProfileError } from "./styled.profile";

import userProfileImg from "../../../assets/justice.png";

import Truncate from "../../../helpers/truncate";

const ProfileForm: FunctionComponent = () => {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);

  const _submitEditForm = () => {
    console.log("click");
  }

  const closeForm = () => {
    setOpenEditModal(false);
  }

  const validateSchema = Yup.object({
    fullname: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    occupation: Yup.string().required("Required"),
    bio: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      phone: "",
      occupation: "",
      bio: "",
      address: ""
    },
    onSubmit: _submitEditForm,
    validationSchema: validateSchema,
  });

  const { handleBlur, handleChange, handleSubmit, errors, values } = formik;

  return (
    <ProfileContainer>
      <ProfileWrapperBox>
        <div className="profileBox__1">
          <div className="details">
            <div className="detail__img">
              <img src={userProfileImg} alt="profile" />
            </div>
            <div className="detail__info">
              <div className="detail__info__top">
                <h3>Gift Moore</h3>
                <p>Software Engineer</p>
              </div>
              <div className="detail__info__bottom">
                <p><span className="span__left">Email address:</span> <span className="span__right">moore.gift@mail.com</span></p>
                <p><span className="span__left">Phone number:</span> <span className="span__right">555-666-3333</span></p>
                <p><span className="span__left">Current time:</span> <span className="span__right">7:10 am (Europe/london)</span></p>
              </div>
            </div>
          </div>

          <div className="openEditProfileModal">
            <Button type="default" htmlType="button" onClick={() => setOpenEditModal(true)}>Edit Profile</Button>
          </div>

          <div className="profile__address">
            <div>
              <h3>Address</h3>
              <p>{Truncate('Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis impedit laborum eos maiores consequatur reprehenderit assumenda nulla eius magni!', 200)}</p>
            </div>
          </div>
        </div>
        <div className="profileBox__2">
          <div className="bio">
            <div>
              <p>Bio</p>
            </div>

            <p>{Truncate('Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem similique suscipit nemo nobis minus cupiditate optio dolore eaque et cumque.', 240)}</p>
          </div>
        </div>

        <Modal 
          title="Edit Profile" 
          centered 
          open={openEditModal} 
          onCancel={closeForm}
          closable={true}
          width={700}
          footer={(
            <Button type="primary" htmlType="submit" onClick={_submitEditForm}>Save</Button>
          )}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '50%' }}>
                <Input 
                  type="text" 
                  name="fullname" 
                  placeholder="Fullname"  
                  value={values.fullname}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  prefix={<UserOutlined />}
                  style={{ padding: "10px" }}
                />

                {errors.fullname && (
                  <ProfileError>{errors.fullname}</ProfileError>
                )}
              </div>
              <div style={{ width: '50%' }}>
                <Input 
                  type="text" 
                  name="email" 
                  placeholder="Email addres"
                  value="moore.gift@mail.com"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  prefix={<UserOutlined />}
                  style={{ padding: "10px", outline: 'none' }}
                />

              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '50%' }}>
                <Input 
                  type="text" 
                  name="phone" 
                  placeholder="Phone number" 
                  value={values.phone}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  prefix={<UserOutlined />}
                  style={{ padding: "10px" }}
                />

                {errors.phone && (
                  <ProfileError>{errors.phone}</ProfileError>
                )}
              </div>
              <div style={{ width: '50%' }}>
                <Input 
                  type="text" 
                  name="occupation"
                  placeholder="Occupation"
                  value={values.occupation}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  prefix={<UserOutlined />}
                  style={{ padding: "10px" }}
                />

                
                {errors.occupation && (
                  <ProfileError>{errors.occupation}</ProfileError>
                )}
              </div>
            </div>

            <div style={{ width: '100%', marginBottom: '12px' }}>
              <InputArea 
                name="bio" 
                placeholder="Enter bio" 
                value={values.bio}
                onBlur={handleBlur}
                style={{resize: 'none'}}
              />

              
              {errors.bio && (
                <ProfileError>{errors.bio}</ProfileError>
              )}
            </div>

            <div style={{ width: '100%', marginBottom: '12px' }}>
              <InputArea 
                name="address" 
                placeholder="Address" 
                value={values.address}
                onBlur={handleBlur}
                style={{resize: 'none'}}
              />

              {errors.address && (
                <ProfileError>{errors.address}</ProfileError>
              )}
            </div>
          </form>
        </Modal>
      </ProfileWrapperBox>
    </ProfileContainer>
  );
}

export default ProfileForm;