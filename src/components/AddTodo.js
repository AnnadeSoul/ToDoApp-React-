import React, { Component } from 'react';
import '../App.css';

export class AddTodo extends Component {
  state = {
    title: ''
  }



  render() {
    return (
      <form style={{ display: 'flex' }}>
        <input 
        type="text" 
        name="title" 
        style={{ flex: '10', padding: '5' }}
        placeholder="Add Todo..." 
        />
        <input 
        type="submit" 
        value="Submit"
        className="btn"
        style={{ flex: '1' }}
        />
      </form>
    )
  }
}

export default AddTodo
