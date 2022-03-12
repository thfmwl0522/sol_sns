import produce from "immer";

export const initialState = {
	mainPost: [],
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
			break;
		case LOAD_POST_FAILURE:
			
			break;
		case ADD_POST:
			
			break;
		case ADD_POST_SUCCESS:
			
			break;
		case ADD_POST_FAILURE:
			
			break;
		case REMOVE_POST:
			
			break;
		case REMOVE_POST_SUCCESS:
			
			break;
		case REMOVE_POST_FAILURE:
			
			break;
		case ADD_COMMENT:
			
			break;
		case ADD_COMMENT_SUCCESS:
			
			break;
		case ADD_COMMENT_FAILURE:
			
			break;
		default:
			break;
	}
});

export default reducer;