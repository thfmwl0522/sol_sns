import { Col, Input, Row } from 'antd'
import Link from 'next/link'
import React, { Children } from 'react'
import { HeaderWrap, Logo, MenuItem, MenuItems, MenuWrap } from '../styles/components/AppLayout'
import LoginPage from './LoginPage'

const AppLayout = ({children}) => {
	return (
		<>
			<HeaderWrap>
				<Logo>SolZi</Logo>
				<MenuWrap>
					<MenuItem><Link href='/'><MenuItems>HOME</MenuItems></Link></MenuItem>
					<MenuItem><Link href='/signup'><MenuItems>SIGNUP</MenuItems></Link></MenuItem>
					<Input.Search enterButton style={{ verticalAlign: 'middle' , width: '50%'}} />
				</MenuWrap>
			</HeaderWrap>
			<Row gutter={8}>
				<Col xs={24} md={16}>
					{children}
				</Col>
				<Col xs={24} md={8}>
					<LoginPage />
				</Col>
			</Row>
		</>
	)
}

export default AppLayout