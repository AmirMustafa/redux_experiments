import React from "react";
import "./App.css";

import { connect } from "react-redux";
import { anotherName, addwish } from "./actions/myaction";

function App(props) {
  const myWish = props.mywishes.map((current, i) => {
    return <li key={i}>{current}</li>;
  });
  console.log(props);
  return (
    <div className="App">
      <h2>App Components</h2>
      <h2> My name is {props.myname}</h2>

      <p>My Wishes list</p>
      <ul>{myWish}</ul>
      <button
        onClick={() => {
          props.changeName("Suresh");
        }}
      >
        Change it
      </button>

      <button
        onClick={() => {
          props.addWish("Code");
        }}
      >
        Add wish
      </button>
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    // all data inside reducer is accessed by state
    myname: state.name, // Inside App component is used as props
    mywishes: state.wish
  };
};

// The dispatch method will takes the changing data which will trigger on button click
const mapDispatchToProps = dispatch => {
  return {
    changeName: name => {
      dispatch(anotherName(name)); // replacd by action creators
    },
    addWish: newwish => {
      dispatch(addwish(newwish));
    }
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(App);
