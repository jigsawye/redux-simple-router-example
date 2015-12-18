import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
             <a className="navbar-brand" href="/">Redux Simple Router</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to={`/counter`}>Counter</Link></li>
                <li><a target="_blank" href="https://github.com/neighborhood999">My GitHub</a></li>
                <li><a target="_blank" href="http://webpack.github.io/">redux 中文文件</a></li>
                <li><a target="_blank" href="http://facebook.github.io/react/">Reactjs</a></li>
              </ul>
            </div>
           </div>
        </nav>
        <div className="jumbotron text-center">
            <div className="container">
                <h2>We ♥ redux</h2>
                <i>redux simple router</i>
                <p>redux ↔ redux-simple-router ↔ history ↔ react-router</p>
            </div>
       </div>
      </div>
    );
  }
}