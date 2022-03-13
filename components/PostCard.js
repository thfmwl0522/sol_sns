import { Avatar, Card, Comment, List, Skeleton } from 'antd'
import React, { useState } from 'react'
import { CardContent, PostCardWrapper } from '../styles/components/PostCard';
import { CommentOutlined, EditOutlined, EllipsisOutlined, HeartOutlined, HeartTwoTone, RetweetOutlined, SettingOutlined } from '@ant-design/icons';
import CommentForm from './CommentForm';

const PostCard = () => {
	const [commentOpen, setCommentOpen] = useState(false);

	const data = [
		{
			User: {
				id: 1,
				nickname: 'SolZi'
			},
			content: '하하하하',
		}
	]

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
			</Card>
			{commentOpen && 
				<>
					<CommentForm />
					<List
            // header={`${post.Comments ? post.Comments.length : 0} 댓글`}
            itemLayout="horizontal"
            dataSource={data}
            // dataSource={post.Comments || []}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={(
										<Avatar>{item.User.nickname[0]}</Avatar>
                  )}
                  content={item.content}
                />
              </li>
            )}
          />
				</>
			}
		</PostCardWrapper>
	)
}

export default PostCard