import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

let baseURL = 'http://localhost:3005/students?class='

export default class ClassList extends Component {
  constructor() {
    super()
    
    this.state = {
      students: [],
    }
  }

  componentDidMount() {
    axios
		.get(`${baseURL}${this.props.match.params.class}`)
		.then(response => this.setState({ students: response.data }))
		.catch(err => console.log(err));
  }

  render() {
	  let { students } = this.state;
    return (
      <div className="box">
		<Link
			to='/'
		>
			<p>Back</p>
		</Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
		{
			students.map((x, y) => 
				<Link
					to={`/student/${x.id}`}
				>
				<h3 
					key={y}
					>{`${x.first_name} ${x.last_name}`}
				</h3>
				</Link>
			)
		}
      </div>
    )
  }
}