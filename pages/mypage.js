import Head from 'next/head'
import React from 'react'
import AppLayout from '../components/AppLayout'
import FollowingList from '../components/FollowingList'
import FollowList from '../components/FollowList'
import NicknameEdit from '../components/NicknameEdit'
import { FollowWrap } from '../styles/components/AppLayout'

const profile = () => {
	return (
		<AppLayout>
			<Head>
				<title>MY PAGE</title>
			</Head>
			<NicknameEdit />
			<FollowWrap>
				<FollowList header='FOLLOWING' />
				<FollowList header='FOLLWER' />
			</FollowWrap>
		</AppLayout>
	)
}

export default profile