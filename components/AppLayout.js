import { Col, Input, Row } from 'antd'
import Link from 'next/link'
import React, { Children } from 'react'
import { Container, ContainerWrap, ContentWrap, HeaderContiner, HeaderWrap, Logo, MenuItem, MenuItems, MenuWrap, Menu_Item, ProfileWrap, SectionWrap } from '../styles/components/AppLayout'
import LoginPage from './LoginPage'
import PostUploadForm from './PostUploadForm'
import UserProfile from './UserProfile'

const AppLayout = ({children, type}) => {
	return (
		<ContainerWrap>
			<HeaderWrap>
				<HeaderContiner>
					<Link href='/'><a><Logo>SolZi</Logo></a></Link>
					<MenuWrap>
						<MenuItem><Link href='/'><MenuItems>HOME</MenuItems></Link></MenuItem>
						<Menu_Item><Link href='/profile'><MenuItems>SOlZi'S PROFILE</MenuItems></Link></Menu_Item>
						{/* <MenuItem><Link href='/mypage'><MenuItems>MYPAGE</MenuItems></Link></MenuItem> */}
						<MenuItem><Link href='/signup'><MenuItems>SIGNUP</MenuItems></Link></MenuItem>
						{/* <Input.Search enterButton style={{ verticalAlign: 'middle' , width: '50%'}} /> */}
					</MenuWrap>
				</HeaderContiner>
			</HeaderWrap>
			<SectionWrap $type={type}>
				<ContentWrap>
					{children}
				</ContentWrap>
				<ProfileWrap>
					<LoginPage />
					{/* <UserProfile />
					<PostUploadForm /> */}
				</ProfileWrap>
			</SectionWrap>
			{/* <Row gutter={8} style={{width: '80%', height: '92vh', margin: '0 auto'}}>
				<Col xs={24} md={17} style={{border: '1px solid red', marginTop: '8vh'}}>
					{children}
				</Col>
				<Col xs={24} md={7}>
					<UserProfile />
					<PostUploadForm />
				</Col>
			</Row> */}
		</ContainerWrap>
	)
}

export default AppLayout