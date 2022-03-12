import { Button, Card } from "antd";
import styled from "styled-components";

export const UserProfileWrap = styled.div`
	width: 100%;
	height: 40%;
	display: flex;
	justify-content: center;
	border-left: 1px solid #eeeeee;
`;

export const UserProfileCard = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: white;
	border: 1px solid #eeeeee;
	border-top: none;
	border-left: none;
`;

export const ProfileImg = styled.img`
	width: 10rem;
	border: 1px solid #eeeeee;
	border-radius: 50%;
`;

export const ProfileContent = styled.div`
	border-bottom: 1px solid #eeeeee;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 70%;
	flex-direction: column;
	position: relative;
`;

export const ProfileTitle = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
`;

export const ProfileSubContent = styled.div`
	width: 100%;
	height: 30%;
	display: flex;
`;

export const ProfileSubWrap = styled.div`
	width: 33.3333%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const ProfileSubTitle = styled.div`
	font-size: 1.125rem;
	font-weight: bold;
`;

export const ProfileSub = styled.div`
	font-size: .925rem;
	font-weight: 500;
`;

export const Logout = styled(Button)`
	width: 20%;
	height: 15%;
	position: absolute;
	right: 5%;
	bottom: 8%;
	/* border: none; */
`;