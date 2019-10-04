// src/js/components/List.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { removeArticle } from "../actions/index";
function mapDispatchToProps(dispatch) {
  return {
	removeArticle: article => dispatch(removeArticle(article))
  };
}
const mapStateToProps = state => {
  return { articles: state.articles };
};


class ConnectedList extends Component {
  constructor() {
  	super();
    this.removeHandle = this.removeHandle.bind(this);
  }
  removeHandle(event) {
    event.preventDefault();
    var title =  event.target.parentElement.children[0].innerText;
  	const id = uuidv1();
  	this.props.removeArticle({ title, id });
  }

  render() {
    var _this = this;
    return ( <ul className="list-group list-group-flush">
    	{this.props.articles.map(el => (
    	  <li className="list-group-item" key={el.id}>
    		<span>{el.title}</span>
        <button onClick={this.removeHandle}>X</button>
    	  </li>
    	))}
      </ul>
    );
  }
}
const List = connect(mapStateToProps,mapDispatchToProps)(ConnectedList);
export default List;
