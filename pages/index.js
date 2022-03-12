import React from 'react'
import AppLayout from '../components/AppLayout'
import PostCard from '../components/PostCard';
import PostUploadForm from '../components/PostUploadForm';

const Home = () => {
	return (
		<AppLayout>
			<PostCard />
		</AppLayout>
	)
}

export default Home;