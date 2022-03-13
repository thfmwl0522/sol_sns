import { Avatar, Button, Card, List, Skeleton } from 'antd';
import { StopOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react'
import { ListBox, ListContent, ListHeader } from '../styles/components/FollowList';

const FollowList = ({ header }) => {

	const data = [
		{nickname: 'solzi', email: 'thfmwl0522@naver.com'},
		{nickname: 'solzi', email: 'thfmwl0522@naver.com'},
		{nickname: 'solzi', email: 'thfmwl0522@naver.com'},
		{nickname: 'solzi', email: 'thfmwl0522@naver.com'},
		{nickname: 'solzi', email: 'thfmwl0522@naver.com'},
		{nickname: 'solzi', email: 'thfmwl0522@naver.com'},
		{nickname: 'solzi', email: 'thfmwl0522@naver.com'},
	]
	return (
		<>
		<ListContent>
			<ListHeader>{header}</ListHeader>
			<ListBox
			size="small"
			bordered
			itemLayout="horizontal"
			dataSource={data}
			renderItem={(item) => (
				<List.Item>
					<List.Item.Meta
						avatar={<Avatar size='large' icon={<UserOutlined />} />}
						title={item.nickname}
						description={item.email}
					/>
				</List.Item>
			)}
			/>
		</ListContent>
		</>
	)
}

export default FollowList