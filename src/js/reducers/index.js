import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants/action-types";
const initialState = {
  articles: [{title:"one",id:"1"}]
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
	return Object.assign({}, state, {
	  articles: state.articles.concat(action.payload)
	});
} else if (action.type === REMOVE_ARTICLE) {
  return Object.assign({}, state, {
    articles: state.articles.filter(function( article ) {return article.title !== action.payload.title;})
  });
}
  return state;
}
export default rootReducer;
