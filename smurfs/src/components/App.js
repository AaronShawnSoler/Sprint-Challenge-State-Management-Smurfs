import React from "react";
import "./App.css";

import { connect } from 'react-redux';
import { getSmurfs, postSmurfs, deleteSmurf } from '../middleware/middleware';

import Smurf from './Smurf';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      age: '',
      height: ''
    };
  }

  handleName = event => {
    this.setState({ name: event.target.value });
  }

  handleAge = event => {
    this.setState({ age: parseInt(event.target.value) });
  }

  handleHeight = event => {
    this.setState({ height: event.target.value });
  }

  handleDelete = id => {
    this.props.deleteSmurf(id);
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    console.log('Props', this.props);
    console.log('Form', this.state);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <form onSubmit={event => {
          event.preventDefault();
          this.props.postSmurfs(this.state);
          this.props.getSmurfs();
          this.setState({
            name: '',
            age: '',
            height: ''
          })
        }}>
          <label>
              Name: <input type='text' value={this.state.name} onChange={this.handleName} />
          </label>
          <label>
              Age: <input type='number' value={this.state.age} onChange={this.handleAge} />
          </label>
          <label>
              Height: <input type='text' value={this.state.height} onChange={this.handleHeight} />
          </label>
          <button type='submit' >Add</button>
        </form>
        {this.props.smurfs.map((element, index) => <Smurf delete={this.handleDelete} smurf={element} key={index}/>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    sending: state.sending,
    error: state.error
  }
}

export default connect(mapStateToProps, {getSmurfs, postSmurfs, deleteSmurf})(App);
