import React, { Component } from 'react';
import Validation from '../Components/Validation';
import CharComponent from '../Components/CharComponent';

class App extends Component {
  state = {
    inputValue: '',
  }

  onChangeHandler = (event) => {
    this.setState({inputValue: event.target.value});
  }

  deleteHandler = (i) => {
    let inputValArray = this.state.inputValue.split('');
    inputValArray.splice(i, 1);
    inputValArray = inputValArray.join('');
    this.setState({ inputValue: inputValArray });
  }
  render() {
   const inputArray = this.state.inputValue.split('');
   const charContent = (inputArray.map((letter, i) => <CharComponent letter={letter} key={i} deleteHandler={() => this.deleteHandler(i)} />))
   return (
      <div className="App">
        <input type="text" onChange={this.onChangeHandler} value={this.state.inputValue} />
        <p>The Length of the {this.state.inputValue} is {this.state.inputValue.length}</p>
        <Validation inputLength={this.state.inputValue.length}/>
        {charContent}
      </div>
    );
  }
}

export default App;
