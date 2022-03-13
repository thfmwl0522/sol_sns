import { List } from "antd";
import styled from "styled-components";

export const ListContent = styled.div`
	width: 48%;
	height: 100%;
	border: 1px solid #eeeeee;
`;

export const ListHeader = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 15%;
	font-size: 1.2rem;
	font-weight: 500;
	border-bottom: 1px solid #eeeeee;
`;

export const ListBox = styled(List)`
	overflow-y: scroll;
	width: 100%;
	height: 85%;
	border: none;
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