import produce from "immer";

import shortId from 'shortid';
// import faker from 'faker';

export const initialState = {
	mainPosts: [],
	imagePaths: [],
	morePosts: true,
	loadPostsLoading: false,
	loadPostsDone: false,
	loadPostsError: null,
	addPostLoading: false,
	addPostDone: false,
	addPostError: null,
	removePostLoading: false,
	removePostDone: false,
	removePostError: null,
	addCommentLoading: false,
	addCommentDone: false,
	addCommentError: null,
};

// export const generateDummyPost = (number) => Array(number).fill().map(() => ({
//   id: shortId.generate(),
//   User: {
//     id: shortId.generate(),
//     nickname: faker.name.findName(),
//   },
//   content: faker.lorem.paragraph(),
//   Images: [{
//     src: faker.image.image(),
//   }],
//   Comments: [{
//     User: {
//       id: shortId.generate(),
//       nickname: faker.name.findName(),
//     },
//     content: faker.lorem.sentence(),
//   }],
// }));

export const LOAD_POST = 'LOAD_POST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const ADD_POST = 'ADD_POST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST = 'REMOVE_POST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
	type: ADD_POST,
	data,
});

export const addComment = (data) => ({
	type: ADD_COMMENT,
	data
});

const dummyPost = (data) => ({
	id: data.id,
	content: data.content,
	User: {
		id: 1,
		nickname: 'SolzZi',
	},
	Images: [],
	Comments: [],
});

const dummyComment = (data) => ({
	id: shortId.generate(),
	content: data,
	User: {
		id: 1,
		nickname : 'solzi'
	}
});

const reducer = (state = initialState, action) => produce(state, (draft) => {
	switch (action.type) {
		case LOAD_POST:
			draft.loadPostsLoading = true;
			draft.loadPostsError = null;
			draft.loadPostsDone = false;
			break;
		case LOAD_POST_SUCCESS:
			draft.loadPostsLoading = false;
			draft.loadPostsDone = true;
			draft.mainPosts = action.data.concat(draft.mainPosts);
			draft.hasMorePosts = draft.mainPosts.length < 50;
			break;
		case LOAD_POST_FAILURE:
			draft.loadPostsLoading = false;
			draft.loadPostsError = action.error;
			break;
		case ADD_POST:
			draft.addPostLoading = true;
			draft.addPostError = null;
			draft.addPostDone = false;
			break;
		case ADD_POST_SUCCESS:
			draft.addPostLoading = false;
			draft.addPostDone = true;
			draft.mainPosts.unshift(dummyPost(action.data));
			break;
		case ADD_POST_FAILURE:
			draft.addPostLoading = false;
			draft.addPostError = action.error;
			break;
		case REMOVE_POST:
			draft.removePostLoading = true;
			draft.removePostError = null;
			draft.removePostDone = false;
			break;
		case REMOVE_POST_SUCCESS:
			draft.removePostLoading = false;
			draft.removePostDone = true;
			draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
			break;
		case REMOVE_POST_FAILURE:
			draft.removePostLoading = false;
			draft.removePostError = action.error;
			break;
		case ADD_COMMENT:
			draft.addCommentLoading = true;
			draft.addCommentError = null;
			draft.addCommentDone = false;
			break;
		case ADD_COMMENT_SUCCESS:
			const post = draft.mainPosts.find((v) => v.id == action.data.postId);
			post.Comments.unshift(dummyComment(action.data.content));
			draft.addCommentLoading = false;
			draft.addCommentDone = true;
			break;
		case ADD_COMMENT_FAILURE:
			draft.addCommentLoading = false;
			draft.addCommentError = action.error;
			break;
		default:
			break;
	}
});

export default reducer;