import { Form, Input } from 'antd'
import React from 'react'

const NicknameEdit = () => {
	return (
		<Form style={{ margin: '4rem auto', border: '1px solid #eeeeee', padding: '20px', width: '80%', }}>
			<Input.Search size='large' addonBefore="닉네임" enterButton="수정" />
		</Form>
	)
}

export default NicknameEdit