import { Input } from 'antd';
import React from 'react'
import { PostUploadWrap, UploadButton, UploadButtonWrap } from '../styles/components/PostUploadForm';
import { UploadOutlined } from '@ant-design/icons';
import useInput from '../hooks/useInput';

const PostUploadForm = () => {
	const [text, onChangeText] = useInput('');

	return (
		<PostUploadWrap>
			<Input.TextArea 
				rows={4}
				value={text}
				onChange={onChangeText}
				maxLength={140}
				placeholder='무슨 일이 있었나요?' />
			<UploadButtonWrap>
				{/* <input type='file' multiple hidden /> */}
				<UploadButton icon={<UploadOutlined />}>Upload</UploadButton>
				<UploadButton type='primary' htmlType="submit">게시글 업로드</UploadButton>
			</UploadButtonWrap>
		</PostUploadWrap>
	)
}

export default PostUploadForm;