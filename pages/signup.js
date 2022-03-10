import { Button, Form, Input } from 'antd'
import App from 'next/app'
import Head from 'next/head'
import React, { useState } from 'react'
import AppLayout from '../components/AppLayout'
import { ContentWrap, FormContent, FormInput, FormTitle, FormWrap } from '../styles/components/pages/singup'

const signup = () => {
	const [id, setId] = useState('');
	const [nickname, setNickname] = useState('');
	const [password, setPassword] = useState('');
	const [passwordCheck, setPasswordCheck] = useState('');

	return (
		<AppLayout>
			<Head>
				<title>회원가입</title>
			</Head>
			<FormWrap>
				<ContentWrap>
					<FormContent>
						<FormTitle>아이디</FormTitle>
						<FormInput name='user-id' value={id} required />
					</FormContent>
					<FormContent>
						<FormTitle>닉네임</FormTitle>
						<FormInput name='nickname' value={nickname} required />
					</FormContent>
					<FormContent>
						<FormTitle>비밀번호</FormTitle>
						<FormInput name='password' value={password} required />
					</FormContent>
					<FormContent>
						<FormTitle>비밀번호 체크</FormTitle>
						<FormInput name='passwordCheck' value={passwordCheck} required />
					</FormContent>
					{/* <Button style={{width: '55%'}}>가입하기</Button> */}
				</ContentWrap>
			</FormWrap>
		</AppLayout>
	)
}

export default signup