import { Button } from 'antd'
import Link from 'next/link'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useInput from '../hooks/useInput'
import { LOG_IN } from '../reducer/User'
import { ButtonWrap, LinkTitle, FormInput, FormTitle, LgonFormWrap, LoginForm, LoginFormContent, SignupTitle, LoginButton } from '../styles/components/pages/singup'

const LoginPage = () => {
	const dispatch = useDispatch();
	const { logInLoading } = useSelector((state) => state.user);
	const [email, onChangeEmail] =useInput('');
	const [password, onChangePassword] = useInput('');
		
	const onSubmitForm = useCallback(() => {
		console.log(email, password);
		dispatch({
			type: LOG_IN,
			data: {email, password}
		});
	},[email, password])

	return (
		<LoginForm onFinish={onSubmitForm}>
			<LgonFormWrap>
				<SignupTitle>LOGIN</SignupTitle>
				<LoginFormContent>
					<FormTitle>이메일</FormTitle>
					<FormInput name='user-id' value={email} onChange={onChangeEmail} required />
				</LoginFormContent>
				<LoginFormContent>
					<FormTitle>비밀번호</FormTitle>
					<FormInput name='user-password' value={password} onChange={onChangePassword} type="password" required />
				</LoginFormContent>
				<ButtonWrap>
					<LoginButton type='primary' htmlType='submit' loading={logInLoading}>로그인</LoginButton>
					<Link href="/signup"><a><LinkTitle>회원가입</LinkTitle></a></Link>
				</ButtonWrap>
			</LgonFormWrap>
		</LoginForm>
	)
}

export default LoginPage