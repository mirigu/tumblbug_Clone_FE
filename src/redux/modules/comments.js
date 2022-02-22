// 액션 만들어주는 것들
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// actions
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

// action creators
const setComment = createAction(SET_COMMENT, (articleId, comments) => ({ articleId, comments }));
const addComment = createAction(ADD_COMMENT, (articleId, comment) => ({ articleId, comment }));
const deleteComment = createAction(DELETE_COMMENT, (commentId, articleId) => ({ commentId, articleId }));

// initialState
const initialState = {
  comment_list: []
};


// 미들웨어
const getCommentDB = (articleId) => {
  return function (dispatch, getState, { history }) {
    axios
      .get(`http://3.35.176.155:8080/api/comments/${articleId}`)
      .then(function (res) {
        console.log('코멘트전체확인',res.data.comments);

        let comments = [];
        const commentDB = res.data.comments;
        commentDB.forEach((doc)=>{
          comments.push({nickname:doc.nickname,comment:doc.comment})
        })

        dispatch(setComment(articleId, comments));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const addCommentDB = (articleId, comment) => {
  return function (dispatch, getState, { history }) {

    const nickname = getState().user.user.nickname; 
    console.log('addComment', articleId, comment);
    axios
    .post(`http://3.35.176.155:8080/api/comments/${articleId}`,
      {
        comment,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('login-token')}`,
        },
      },
    )
    .then(function (res) {
      console.log(res);
      let one_comment = {
        nickname:nickname,
        comment:comment,
      }

      dispatch(addComment(articleId, one_comment));
      window.alert('댓글 작성 완료!')
    })
    .catch(function (error) {
      console.log(error);
    });

  };
};

const deleteCommentDB = (commentId, articleId) => {
  return function (dispatch, getState, { history }) {
    axios
      .delete(`http://3.35.176.155:8080/api/comments/delete/${commentId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('login-token')}`,
        },
      },
      )
      .then(function (res) {
        dispatch(deleteComment(commentId, articleId));
        window.alert('댓글 삭제 완료!')
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}


// 리듀서
export default handleActions(
  {
    [SET_COMMENT]: (state, action) => produce(state, (draft) => {
      draft.comment_list[action.payload.articleId] = action.payload.comments;
    }),

    [ADD_COMMENT]: (state, action) => produce(state, (draft) => {
      console.log(action.payload)
      draft.comment_list[action.payload.articleId].unshift(action.payload.comment);
    }),

    [DELETE_COMMENT]: (state, action) => produce(state, (draft) => {
      draft.comment_list[action.payload.articleId] = draft.comment_list[action.payload.articleId].filter(e =>
        e.commentId !== action.payload.commentId);
    }),
  },
  initialState
);

// action creator export
const actionCreators = {
  setComment,
  getCommentDB,
  addComment,
  addCommentDB,
  deleteComment,
  deleteCommentDB,
};

export { actionCreators };
