import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'
import useInput from '../hooks/useInput'
import { ButtonWrap, LinkTitle, FormInput, FormTitle, LgonFormWrap, LoginForm, LoginFormContent, SignupTitle, LoginButton } from '../styles/components/pages/singup'

const LoginPage = () => {
	const [id, onChangeId] =useInput('');
	const [password, onChangePassword] = useInput('');
	
	return (
		<LoginForm>
			<LgonFormWrap>
				<SignupTitle>LOGIN</SignupTitle>
				<LoginFormContent>
					<FormTitle>아이디</FormTitle>
					<FormInput name='user-id' value={id} onChange={onChangeId} required />
				</LoginFormContent>
				<LoginFormContent>
					<FormTitle>비밀번호</FormTitle>
					<FormInput name='user-password' value={password} onChange={onChangePassword} type="password" required />
				</LoginFormContent>
				<ButtonWrap>
					<LoginButton>로그인</LoginButton>
					<Link href="/signup"><a><LinkTitle>회원가입</LinkTitle></a></Link>
				</ButtonWrap>
			</LgonFormWrap>
		</LoginForm>
	)
}

export default LoginPage