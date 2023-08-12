import styled from "styled-components";

export const ProfileContainer = styled.div`
  padding: 15px;
`;

export const ProfileWrapperBox = styled(ProfileContainer)`
  padding: 10px 0px;
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: 20px;
  border-bottom: 4px solid black;

  .profileBox {
    &__1 {
      width: 65%;
      
      .details {
        padding: 10px;
        display: flex;
        align-items: center;
        border: 1px solid #f1f1f1;
        border-radius: 9px;
        width: 100%;

        .detail__img {
          height: auto;

          img {
            width: 250px;
            height: 250px;
            border-radius: 3px;
          }
        }

        .detail__info {
          padding: 5px;
          margin-left: 10px;

          &__top {
            margin-bottom: 10px;

            h3 {
              font-size: 30px;
              padding: 1px 2px;
              color: #0009;
            }
  
            p {
              font-size: 14px;
              font-weight: 600;
              padding: 0px 2px;
              color: #0009;
            }
          }

          &__bottom {
            p {
              font-size: 16px;
              font-weight: 800;
              padding: 5px 2px;
              color: #0009;

              .span__left {
                font-weight: 800 !important;
              }

              .span__right {
                margin-left: 25px;
                text-align: right;
                float: right;
                font-weight: 600 !important;
              }
            }
          }

        }
      }

      .openEditProfileModal {
        margin-top: 15px;
      }

      .profile__address {
        border: 1px solid #f1f1f1;
        width: 470px;
        height: auto;
        padding: 10px;
        margin-top: 15px;
        margin-bottom: 15px;
        line-height: 1.4rem;
        font-size: 14px;
        font-weight: 700;
        color: #0009;

        div {
          h3 {
            font-size: 28px;
            padding: 8px 0px;
            color: #0009; 
          }
        }
      }
    }

    &__2 {
      width: 35%;

      .bio {
        border: 1px solid #f1f1f1;
        border-radius: 9px;
        padding: 10px;

        div {
          padding: 10px 2px;
          margin-bottom: 12px;

          p {
            font-weight: 800;
            font-size: 18px;
          }
        }

        p {
          line-height: 1.5rem;
          color: 0009;
          font-size: 14px;
        }
      } 
    }
  }
`;

export const ProfileError = styled.p`
  color: lightcoral;
  font-size: 14px;
`;