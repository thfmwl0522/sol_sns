import { Avatar, Card, Skeleton } from 'antd'
import React from 'react'
import { CardContent, PostCardWrapper } from '../styles/components/PostCard';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const PostCard = () => {
	const { Meta } = Card; 
	return (
		<PostCardWrapper>
			<Card
				style={{ width: '100%',  marginTop: 16 }}
				actions={[
					<SettingOutlined key="setting" />,
					<EditOutlined key="edit" />,
					<EllipsisOutlined key="ellipsis" />,
				]}
			>
				<Meta
					avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
					title="Card title"
					description="This is the description"
				/>
			</Card>
		</PostCardWrapper>
	)
}

export default PostCard