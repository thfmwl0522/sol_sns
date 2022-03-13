import { Button, Checkbox, Form, Input } from 'antd'
import App from 'next/app'
import Head from 'next/head'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppLayout from '../components/AppLayout'
import useInput from '../hooks/useInput'
import { SIGN_UP } from '../reducer/User'
import { ContentWrap, FormContent, FormInput, FormTitle, FormWrap, SignupTitle } from '../styles/components/pages/singup'

const signup = () => {
	const dispatch = useDispatch();
	const [id, onChangeId] = useInput('');
	const [nickname, onChangeNickname] = useInput('');
	const [password, onChangePassword] = useInput('');

	const [passwordCheck, setPasswordCheck] = useState('');
	const [term, setTerm] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [termError, setTermError] = useState(false);
	const { me,  } = useSelector((state) => state.user);

	useEffect(() =>{
		if (me) {
			alert('로그인에 성공하였습니다. 메인페이지로 이동합니다.')
			Router.push('/');
		}
	}, [me && me.id]);

	const onChangePasswordCheck = useCallback((e) => {
		setPasswordCheck(e.target.value !== password);
		setPasswordCheck(e.target.value);
	}, [password]);

	const onChangeTerm = useCallback((e) => {
		setTermError(false);
		setTerm(e.target.checked);
	}, []);

	const onSubmit = useCallback(() => {
		if (password !== passwordCheck) {
			return setPasswordError(true);
		}
		if (!term) {
			return setTermError(true);
		}
		return dispatch({
			type: SIGN_UP,
			data: {
				email,
				password,
				nick
			}
		});
	},[email, password, passwordCheck, term]);

	return (
		<AppLayout type="signup">
			<Head>
				<title>회원가입</title>
			</Head>
			<FormWrap onFinish={onSubmit}>
				<ContentWrap>
					<SignupTitle>SIGNUP</SignupTitle>
					<FormContent>
						<FormTitle>아이디</FormTitle>
						<FormInput name='user-id' value={id} onChange={onChangeId} required />
					</FormContent>
					<FormContent>
						<FormTitle>닉네임</FormTitle>
						<FormInput name='nickname' value={nickname} onChange={onChangeNickname} required />
					</FormContent>
					<FormContent>
						<FormTitle>비밀번호</FormTitle>
						<FormInput name='password' value={password} onChange={onChangePassword} type="password" required />
					</FormContent>
					<FormContent>
						<FormTitle>비밀번호 체크</FormTitle>
						<FormInput name='passwordCheck' value={passwordCheck} type="password" required onChange={onChangePasswordCheck} />
						{passwordError && <div style={{ color: 'red'}}>비밀번호가 일치하지 않습니다.</div>}
					</FormContent>
					<FormContent $type="check">
						<Checkbox name="user-term" checked={term} onChange={onChangeTerm}>회원가입에 동의합니다.</Checkbox>
						{termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
					</FormContent>
					<Button type='primary' htmlType='submit' style={{width: '55%', height: '7%', marginTop: '1rem'}}>가입하기</Button>
				</ContentWrap>
			</FormWrap>
		</AppLayout>
	)
}

export default signup