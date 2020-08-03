import React, { Component } from 'react';
// import PersonList from "./component/index";
import SimpleTable from "./component/Table";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <SimpleTable />
        {/* <PersonList /> */}
      </div>
    )
  }
}
