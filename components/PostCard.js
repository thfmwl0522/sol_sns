import { Avatar, Button, Card, Comment, List, Popover, Skeleton } from 'antd'
import React, { useCallback, useState } from 'react'
import { CardContent, PostCardWrapper } from '../styles/components/PostCard';
import { CommentOutlined, EditOutlined, EllipsisOutlined, HeartOutlined, HeartTwoTone, RetweetOutlined, SettingOutlined } from '@ant-design/icons';
import CommentForm from './CommentForm';
import { useDispatch, useSelector } from 'react-redux';

import { REMOVE_POST } from '../reducer/post';

const PostCard = ({ post }) => {
	const dispatch = useDispatch();
	const { removePostLoading } = useSelector((state) => state.post);
	const [commentOpen, setCommentOpen] = useState(false);
	const [like, setLike] = useState(false);
	const { me } = useSelector((state) => state.user);
	const id = me && me.id;
	const { Meta } = Card; 

	const data = [
		{
			User: {
				id: 1,
				nickname: 'SolZi'
			},
			content: '하하하하',
		}
	]

	const onToggleLike = useCallback(()=> {
		setLike((prev) => !prev);
	},[]);

	const onToggleComment = useCallback(() => {
		setCommentOpen((prev) => !prev);
	},[]);

	const onRemovePost = useCallback(() => {
		dispatch({
			type: REMOVE_POST,
			data: post,id,
		})
	},[]);

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
					// <RetweetOutlined key="retweet" />,
					like 
					? <HeartTwoTone key="heart" twoToneColor='#eb2f96' onClick={onToggleLike} /> 
					: <HeartOutlined key="heart" onClick={onToggleLike} />,
					<CommentOutlined key="comment" onClick={onToggleComment} />,
					<Popover
					key="ellipsis"
					content={(
						<Button.Group>
							{/* {id && post.UserId === id
								? ( */}
									<>
										<Button>수정</Button>
										<Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
									</>
								)
								{/* // : <Button>신고</Button>} */}
						</Button.Group>
					)}
				>
					<EllipsisOutlined />
				</Popover>,
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