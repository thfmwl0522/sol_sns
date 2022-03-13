import produce from "immer";

export const initialState = {
	followLoading: false,
	followDone: false,
	followError: null,
	unfollowLoading: false,
	unfollowDone: false,
	unfollowError: null,
	logInLoading: false,
	logInDone: false,
	logInError: null,
	logOutLoading: false,
	logOutDone: false,
	logOutError: null,
	signupLoading: false,
	signupDone: false,
	signupError: null,
	changeNicknameLoading: false,
	changeNicknameDone: false,
	changeNicknameError: null,
	me: null,
	signupData: {},
	loginData: {},
};

export const SIGN_UP = 'SIGN_UP'; 
export const SIGN_UP_SUCCESS = 'SIGN_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_FAILURE';

export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT = 'LOG_OUT';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const CHANGE_NICKNAME = 'CHANGE_NICKNAME';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const FOLLOW = 'FOLLOW';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW = 'UNFOLLOW';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

const dummyUser = (data) => ({
	...data,
	nickname: 'SolZi',
	id: 1,
	Posts: [{id:1}],
	Followings: [{ nickname: '희도'}, { nickname: '유림'}, {nickname: '이진'}],
	Followers: [{ nickname: '희도'}, { nickname: '이진'}]
});

export const loginAction = (data) => ({
	type: LOG_IN,
	data,
});

export const logoutAction = () => ({
	type: LOG_OUT,
});

const reducer = (state = initialState, action) => produce(state, (draft) =>{
	switch (action.type) {
		case SIGN_UP:
			draft.signupLoading = true;
			draft.signupError = null;
			draft.signupDone = false;
			break;
		case SIGN_UP_SUCCESS:
			draft.signupLoading = false;
			draft.signupDone = true;
			break;
		case SIGN_UP_FAILURE:
			draft.signupLoading = false;
			draft.signupError = action.error;
			break;
		case LOG_IN:
			draft.logInLoading = true;
			draft.logInError = null;
			draft.logInDone = false;
			break;
		case LOG_IN_SUCCESS:
			draft.logInLoading = false;
			draft.logInDone = true;
			draft.me = dummyUser(action.data);
			break;
		case LOG_IN_FAILURE:
			draft.logInLoading = false;
			draft.logInError = action.error;
			break;
		case LOG_OUT:
			draft.logOutLoading = true;
			draft.logOutError = null;
			draft.logOutDone = false;
			break;
		case LOG_OUT_SUCCESS:
			draft.logOutLoading = false;
			draft.logOutDone = true;
			draft.me = null;
			break;
		case LOG_OUT_FAILURE:
			draft.logOutLoading = false;
			draft.logOutError = action.error;
			break;
		case FOLLOW:
			draft.followLoading = true;
			draft.followError = null;
			draft.followDone = false;
			break;
		case FOLLOW_SUCCESS:
			draft.followLoading = false;
			draft.followDone = true;
			draft.me.Followings.push({ id: action.data});
			break;
		case FOLLOW_FAILURE:
			draft.followLoading = false;
			draft.followError = action.error;
			break;
		case UNFOLLOW:
			draft.unfollowLoading = true;
			draft.unfollowError = null;
			draft.unfollowDone = false;
			break;
		case UNFOLLOW_SUCCESS:
			draft.unfollowLoading = false;
			draft.unfollowDone = true;
			draft.me.Followings = draft.me.Followings.filter((v) => v.id !== action.data);
			break;
		case UNFOLLOW_FAILURE:
			draft.unfollowLoading = false;
			draft.unfollowError = action.error;
			break;
		case CHANGE_NICKNAME:
			draft.changeNicknameLoading = true;
			draft.changeNicknameError = null;
			draft.changeNicknameDone = false;
			break;
		case CHANGE_NICKNAME_SUCCESS:
			draft.changeNicknameLoading = false;
			draft.changeNicknameDone = true;
			break;
		case CHANGE_NICKNAME_FAILURE:
			draft.changeNicknameLoading = false;
			draft.changeNicknameError = action.error;
			break;
		default:
			break;
	}
});

export default reducer;