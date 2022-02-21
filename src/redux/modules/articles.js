// 액션 만들어주는 것들
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// import { api } from "../../shared/api";

// actions
const GET_MAIN_ARTICLES = "GET_MAIN_ARTICLES";
const GET_POULAR_ARTICLES = "GET_POULAR_ARTICLES";

// action creators
// const logIn = createAction(LOG_IN, (user)=> ({user}));
const getMainArticles = createAction(GET_MAIN_ARTICLES, (articles) => ({
  articles,
}));
const getPoularArticles = createAction(GET_POULAR_ARTICLES, (articles) => ({
  articles,
}));

// initialState
// defaultProps 같은 역할
const initialState = {
  list: [],
};

const initialArticles = {
  category: "향수·뷰티",
  nickname: "유저로프트하우스 케미스트",
  title: "발트해의 태양과 바람, 신비로운 5월의 여왕 <미드솜마르>",
  image:
    "https://tumblbug-pci.imgix.net/65ad363adfe9e6e9f8f7479e8bf05c9db58fe5da/7d5e7d09142907e8f7e23da40ce8bc2e3cf13daf/7a6660ad741ebdc45e2a06a662b33ef910a46f0e/9bed4237-201a-4806-898c-19bec6afa9ca.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=c83e15c1546fdd3d4ff9675e28196574",
  targetAmount: 500000,
  totalAmount: 23748000,
  deadline: "2022-03-07",
  contents:
    "화관을 쓰고 첫 수확한 여름 딸기를 먹으며 백야의 축제를 즐길 거예요. 마법과 함께.",
};

//주목할 만한 프로젝트
const getMainArticlesDB = () => {
  return function (dispatch, getState, { history }) {
    // api.then(function (res) {
    //   dispatch(getMainArticles(res.data.articles));
    // });
  };
};

const getPoularArticlesDB = () => {
  return function (dispatch, getState, { history }) {};
};

const getOneArticlesDB = (articleId) => {
  return function (dispatch, getState, { history }) {
    // instance
    //   .get(`주소/api/article/${articleId}`)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
};

// 리듀서
export default handleActions(
  {
    [GET_MAIN_ARTICLES]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.articles;
        console.log(draft.list);
      }),

    [GET_POULAR_ARTICLES]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.articles;
        console.log(draft.list);
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  getMainArticles,
  getPoularArticles,

  getMainArticlesDB,
  getPoularArticlesDB,
  getOneArticlesDB,
};

export { actionCreators };
