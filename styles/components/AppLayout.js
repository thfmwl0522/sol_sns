import styled from "styled-components";

export const ContainerWrap = styled.div`
	width: 100%;
`;

export const Container = styled.div`
	width: 90%;
	height: 100%;
	margin: 0 auto;
`;

export const HeaderWrap = styled.div`
	width: 100%;
	height: 8vh;
	border-bottom: 1px solid #eeeeee;
	position: fixed;
  top: 0;
  left: 0;
  right: 0;
	background-color: white;
	z-index: 99;
`;

export const HeaderContiner = styled.div`
	width: 75%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	margin: 0 auto;
`;

export const Logo = styled.div`
	width: 8%;
	height: 80%;
	font-size: 2.5rem;
	font-weight: 600;
	font-style: italic;
	display: flex;
	text-decoration: none;
	color: black;
	justify-content: center;
	align-items: center;
`;

export const MenuWrap = styled.div`
	width: 24%;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const MenuItem = styled.div`
	width: 22%;
	height: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 1rem;
	color: #ededed;
`;

export const MenuItems = styled.a`
	font-size: 1rem;
	color: #333;
	font-weight: 500;
`;

export const SectionWrap = styled.div`
	width: 80%;
	height: 92vh;
	overflow-y: ${props =>
		props.$type == 'signup' ? 'hidden' : 'auto'};
	margin: 8vh auto 0;
	display: flex;
	flex-direction: row;
	::-webkit-scrollbar {
		width: 5px;
	}
	::-webkit-scrollbar-thumb {
		background-color: #d4d4d4;
		border: 4px solid transparent;
		border-radius: 50px;
	}
	::-webkit-scrollbar-track {
		background-color: #eeeeee;
	}
`;

export const ContentWrap = styled.div`
	width: 68%;
`;

export const ProfileWrap = styled.div`
	width: 24%;
	position: fixed;
	top: 8vh;
	right: 12%;
`;
