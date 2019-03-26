import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent'
import CharComponent from './components/CharComponent'

class App extends Component {

  constructor(props){
    super(props);
    this.lengthHandler = this.lengthHandler.bind(this);
    this.state = {
      data : ''
    }
  }

  lengthHandler = (event) => {
    this.setState({
      input : event.target.value.length,
      data : event.target.value
    })
  }

  removeChar = (charIndex) => {
    const chardata = this.state.data;
    const charArr = chardata.split('');
    charArr.splice(charIndex,1);
    this.setState({data : charArr.join('')})
  }

  render() {
    let characters ;
    if(this.state.data!=''){
      let str = this.state.data;
      characters = str.split('').map((i,index) => <CharComponent character={i}
                                           click={this.removeChar.bind(this,index)} />)
    }

    return (
      <div className="App">
        <input type="text" onChange={this.lengthHandler} value={this.state.data}/>
        <p>Length is {this.state.data.length}</p>
        <ValidationComponent length={this.state.input}/>
        {characters}
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
