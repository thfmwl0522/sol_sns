import { Avatar, Card, Skeleton } from 'antd'
import React from 'react'
import { CardContent, PostCardWrapper } from '../styles/components/PostCard';
import { CommentOutlined, EditOutlined, EllipsisOutlined, HeartOutlined, HeartTwoTone, RetweetOutlined, SettingOutlined } from '@ant-design/icons';

const PostCard = () => {
	const { Meta } = Card; 
	return (
		<PostCardWrapper>
			<Card
				style={{ width: '100%' }}
				cover={
					<img
						alt="profile"
						src={`/sample01.png`}
					/>
				}
				actions={[
					<RetweetOutlined key="retweet" />,
					<HeartOutlined key="heart" />,
					<CommentOutlined key="comment" />,
				]}
			>
				<Meta
					avatar={<Avatar size={64} src={`/sol.png`} />}
					title="SolZi"
					description="난 자신감을 잃어가던 중이었어. 하지만 오늘 여기 오길 잘했어. 바다를 보니까 힘이 나. 너만 좋다면 언제든 데려다줄게."
				/>
			</Card>,
		</PostCardWrapper>
	)
}

export default PostCard