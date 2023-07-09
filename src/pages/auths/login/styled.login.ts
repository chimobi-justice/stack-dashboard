import styled from 'styled-components';

export const LoginContainer = styled.div`
	background: #020215;
	height: 100vh;
`;

export const LoginWrapper = styled.div`
	display: flex;
	justify-content: center;
	height: auto;
`;

export const LoginForm = styled.form`
	padding: 20px;
	width: 35%;
	height: auto;
	margin: 4rem auto;
	background: #f1f1f1;
	border-radius: 9px;

	h1 {
		color: red;
		text-align: center;
		font-size: 30px;
		font-style: italic;
	}

	h3 {
		text-align: center;
		font-size: 30px;
		font-style: italic;
	}

	div {
		margin-top: 15px;
		margin-bottom: 15px;
	}

	div:last-child {
		margin-top: 0px;
		margin-bottom: 0px;
		text-align: right;

		& button {
			margin-bottom: 6px;
		}

		& p {
			color: #0009;

			a {
				color: #0009;

				&:hover {
					color: #000;
				}
			}
		}
	}
`;

export const LoginError = styled.p`
	color: lightcoral;
	font-size: 14px;
`;