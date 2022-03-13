import { SendOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React, { useCallback, useEffect } from 'react';

const CommentForm = () => {
	return (
		<Form>
			<Form.Item style={{ position: 'relative', margin: 0 }}>
				<Input.TextArea rows={2}/>
				<Button
					style={{ position: 'absolute', right: 0, bottom: -40 }}
					type="primary"
					htmlType="submit"
					// loading={addCommentLoading}
				><SendOutlined />
				</Button>
			</Form.Item>
		</Form>
	)
}

export default CommentForm