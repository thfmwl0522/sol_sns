import { Col, Input, Row } from 'antd'
import Link from 'next/link'
import React, { Children } from 'react'
import { Container, ContainerWrap, HeaderContiner, HeaderWrap, Logo, MenuItem, MenuItems, MenuWrap } from '../styles/components/AppLayout'
import LoginPage from './LoginPage'
import PostUploadForm from './PostUploadForm'
import UserProfile from './UserProfile'

const AppLayout = ({children}) => {
	return (
		<ContainerWrap>
			<HeaderWrap>
				<HeaderContiner>
					<Link href='/'><a><Logo>SolZi</Logo></a></Link>
					<MenuWrap>
						<MenuItem><Link href='/'><MenuItems>HOME</MenuItems></Link></MenuItem>
						<MenuItem><Link href='/signup'><MenuItems>SIGNUP</MenuItems></Link></MenuItem>
						{/* <MenuItem><MenuItems>LOGOUT</MenuItems></MenuItem> */}
						<Input.Search enterButton style={{ verticalAlign: 'middle' , width: '50%'}} />
					</MenuWrap>
				</HeaderContiner>
			</HeaderWrap>
			<Row gutter={8} style={{width: '80%', height: '92vh', margin: '0 auto'}}>
				<Col xs={24} md={17} style={{overflowY: 'scroll'}}>
					{children}
				</Col>
				<Col xs={24} md={7}>
					{/* <LoginPage /> */}
					<UserProfile />
					<PostUploadForm />
				</Col>
			</Row>
		</ContainerWrap>
	)
}

export default AppLayout