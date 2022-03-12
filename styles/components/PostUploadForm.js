import { Button, Form, Input } from "antd";
import styled from "styled-components";

export const PostUploadWrap = styled(Form)`
	width: 100%;
	height: 20%;
	margin: 2rem 0;
	/* background-color: rosybrown; */
`;

export const UploadButtonWrap = styled.div`
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
`;

export const UploadButton = styled(Button)`
	border-radius: 0.525rem;
`;