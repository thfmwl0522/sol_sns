import React from "react";
import { Avatar, Image } from "antd";
import {
	ProfileContent,
	ProfileImg,
	ProfileTitle,
	UserProfileCard,
	UserProfileWrap,
	ProfileSubContent,
	ProfileSubWrap,
	ProfileSubTitle,
	ProfileSub
} from "../styles/components/UserProfile";

const UserProfile = () => {
	return (
		<UserProfileWrap>
			<UserProfileCard>
				<ProfileContent>
					<ProfileImg src={`/sol.png`} />
					<ProfileTitle>SolZi</ProfileTitle>
				</ProfileContent>
				<ProfileSubContent>
					<ProfileSubWrap>
						<ProfileSubTitle>게시물</ProfileSubTitle>
						<ProfileSub>15</ProfileSub>
					</ProfileSubWrap>
					<ProfileSubWrap>
						<ProfileSubTitle>팔로워</ProfileSubTitle>
						<ProfileSub>15</ProfileSub>
					</ProfileSubWrap>
					<ProfileSubWrap>
						<ProfileSubTitle>팔로잉</ProfileSubTitle>
						<ProfileSub>15</ProfileSub>
					</ProfileSubWrap>
				</ProfileSubContent>
			</UserProfileCard>
		</UserProfileWrap>
	);
};

export default UserProfile;
