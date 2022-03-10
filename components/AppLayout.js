import { Input } from 'antd'
import Link from 'next/link'
import React from 'react'
import { HeaderWrap, Logo, MenuItem, MenuWrap } from '../styles/components/AppLayout'

const AppLayout = () => {
	return (
		<>
			<HeaderWrap>
				<Logo>SolZi</Logo>
				<MenuWrap>
					<MenuItem><Link href='/'><a>HOME</a></Link></MenuItem>
					<MenuItem><Link href='/signup'><a>회원가입</a></Link></MenuItem>
					<Input.Search enterButton style={{ verticalAlign: 'middle' , width: '35%'}} />
				</MenuWrap>
			</HeaderWrap>
		</>
	)
}

export default AppLayout