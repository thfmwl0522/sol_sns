import { Button, Form, Input } from "antd";
import styled from "styled-components";

export const LoginForm = styled(Form)`
	width: 100%;
	height: 80vh;
	/* border-left: 1px solid #ededed; */
`;

export const FormWrap = styled(Form)`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 92vh;
	border-right: 1px solid #eeeeee;
`;

export const LgonFormWrap = styled.div`
	width: 100%;
	height: 55%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	/* border-bottom: 1px solid #ededed; */
`;

export const ContentWrap = styled.div`
	width: 50%;
	height: 60vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: #dde3ed;
	/* margin-top: 10vh; */
`;

export const FormContent = styled.div`
	width: 55%;
	height: 12%;
	display: flex;
	height: ${props => props.$type == 'check' ? '5%' : '12%'} ;
	flex-direction: column;
	justify-content: space-between;
	margin: .5rem 0;
`;

export const LoginFormContent = styled.div`
	width: 80%;
	height: 20%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

export const SignupTitle = styled.div`
	width:55%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.925rem;
	font-weight: bold;
	margin-top: -1rem;
	/* border: 1px solid red; */
`;

export const FormTitle = styled.div`
	width:100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-size: 1rem;
	font-weight: 500;
`;

export const FormInput = styled(Input)`
	width: 100%;
	height: 55%;
	margin-top: .25rem;
	border-radius: .25rem;
`;

export const ButtonWrap = styled.div`
	width: 80%;
	height: 20%;
	margin-top: 1.2rem;
	display: flex;
	flex-direction: column;
`;

export const LoginButton = styled(Button)`
	width: 100%;
	height: 55%;
	font-size: 1rem;
	font-weight: 600;
`;

export const LinkTitle = styled.div`
	width: 100%;
	text-decoration: none;
	color: #7d91b0;
	font-weight: 600;
	font-size: .9rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-top: .5rem;
`;