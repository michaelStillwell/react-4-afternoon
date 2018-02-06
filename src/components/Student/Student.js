import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

let baseURL = 'http://localhost:3005/students/'

export default class Student extends Component {
  constructor() {
    super()

    this.state = {
      studentInfo: {},
    }
  }

  componentDidMount() {
    axios 
      .get(`${baseURL}${this.props.match.params.id}`)
      .then(response => this.setState({ studentInfo: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    let { studentInfo } = this.state;
    return (
      <div className="box">
        <Link
          to={`/classList/${studentInfo.class}`}
        >
          <p>Back</p>
        </Link>
        <h1>Student</h1>
        <h1>
          {`${studentInfo.first_name} ${studentInfo.last_name}`}
        </h1>
        <h3>
          Grade: {studentInfo.grade}
        </h3>
        <h3>
          Email: {studentInfo.email}
        </h3>
      </div>
    )
  }
}