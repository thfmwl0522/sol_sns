import { Form, Input } from "antd";
import styled from "styled-components";

export const FormWrap = styled(Form)`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 1rem 0;
`;

export const ContentWrap = styled.div`
	width: 45%;
	height:60vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: lightpink;
	margin-top: 10vh;
`;

export const FormContent = styled.div`
	width: 55%;
	height: 12%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	margin: 1rem 0;
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
	border-radius: .25rem;
`;