import { Col, Input, Row } from 'antd'
import Link from 'next/link'
import React, { Children } from 'react'
import { Container, ContainerWrap, HeaderContiner, HeaderWrap, Logo, MenuItem, MenuItems, MenuWrap } from '../styles/components/AppLayout'
import LoginPage from './LoginPage'
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
						<Input.Search enterButton style={{ verticalAlign: 'middle' , width: '50%'}} />
					</MenuWrap>
				</HeaderContiner>
			</HeaderWrap>
			<Row gutter={8} style={{width: '90%', height: '92vh', margin: '0 auto'}}>
				<Col xs={24} md={18}>
					{children}
				</Col>
				<Col xs={24} md={6}>
					<LoginPage />
					{/* <UserProfile /> */}
				</Col>
			</Row>
		</ContainerWrap>
	)
}

export default AppLayout