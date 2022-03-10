import styled from "styled-components";

export const HeaderWrap = styled.div`
	width: 100%;
	height: 8vh;
	background-color: skyblue;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
`;

export const Logo = styled.div`
	width: 6%;
	height: 80%;
	font-size: 2.5rem;
	font-weight: 600;
	font-style: italic;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const MenuWrap = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: cadetblue;
`;

export const MenuItem = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	border: 1px solid red;
`;