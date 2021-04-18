import React, { Component } from 'react';
import classes from  './App.css';
// import Radium , { StyleRoot} from 'radium';
import WithClass  from '../hoc/WithClass';
import Persons from  '../components/Persons/Persons';
import styled from 'styled-components';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxillary';
import AuthContext from '../context/auth-context';

// const app = props => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: 'Max', age: 30 },
//       { name: 'Manu', age: 26 },
//       { name: 'Manjhi', age: 28 }
//     ],
//     otherState : "Name is this this"

//   })
const StyledButton = styled.button`
  background-color : ${props => props.alt ? 'red' : 'green'} ;
  font : inherit;
  border : 1px solid blue;
  padding : 8px;
  cursor : pointer;
  &:hover  {
    background-color : lightgreen;
    color : black;
  }
`;
class App extends Component {
constructor(props){
super(props);
console.log('[App.js] Constructor')
}

  state = {
    persons: [
      {id:0,  name: 'Max', age: 28 },
      {id:1,  name: 'Manu', age: 29 },
      {id:2,  name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons : false,
    showCockpit : true,
    changeCounter : 0,
    authenticated : false
  }

 static getDerivedStateFromProps(props,state){
console.log('[App.js] getStateFromProps', props);
return state;
 }


//  componentWillMount(){
//   console.log('[App.js] componentWillMount');
//  }

 componentDidMount(){
   console.log('[App.js] componentDidMount');
 }

 shouldComponentUpdate(nextProps,nextState){
  console.log('[App.js] shouldComponentUpdate');
  return true;
 }

 componentDidUpdate(){
  console.log('[App.js] componentDidUpdate');
 }
  // const [izhaar] = useState('Paras  Priya');

  // state =

  //   switchNameHandler = (name) => {


  //   // setPersonState({
  //   //   persons: [{ name: 'Paras', age: 30 },
  //   //   { name: 'Priya', age: 26 },
  //   //   { name: 'Manjhi', age: 28 }
  //   //   ]
  //   // });
  //   this.setState({persons :[

  //     { name: name, age: 30 },
  //     { name: 'Manu', age: 26 },
  //     { name: 'Manjhi', age: 28 }
  //   ]}
  //   )

  // }

  deletePersonHandler =(index) =>{
const persons = this.state.persons.slice();
persons.splice(index,1);
this.setState({persons : persons})
  }

  nameChangeHandler =(event,id) =>{
    const person = this.state.persons.findIndex((per) => per.id === id);
    const personArr = this.state.persons.slice();
personArr[person].name = event.target.value;

    this.setState((prevState,props)=>{  
    return {persons : personArr ,changeCounter : prevState.changeCounter+1} 
  })
}
  togglePersonHandler =()=>{
    this.setState({showPersons : !this.state.showPersons})

  }

  loginHandler= () => {
    console.log("inside");
    this.setState({authenticated : true});
  }
  render(){
console.log('[App.js] Rendered');
    // const style ={
    //   backgroundColor : 'green',
    //   font : 'inherit',
    //   border : '1px solid blue',
    //   padding : '8px',
    //   cursor : 'pointer',
    //   // ':hover' : {
    //   //   backgroundColor : 'lightgreen',
    //   //   color : 'black'
    //   // }
    // }
  let btnClass =[classes.Button];
    let person = null;

    if(this.state.showPersons){
      person = (
     
      <div>

<Persons  persons={this.state.persons} clicked={this.deletePersonHandler} changed ={this.nameChangeHandler} isAuthenticated={this.state.authenticated}/>



        {/* {this.state.persons.map((person,index)=>
        {
         return <Person 
         key = {person.id}
          name = {person.name} 
          age = {person.age} 
          click={() => this.deletePersonHandler(index)} 
          changed={(event) => this.nameChangeHandler(event,person.id)}
          ></Person>
        })} */}
        </div>
      );
      // style.backgroundColor = 'red';
      btnClass.push(classes.Red);
    //  style[':hover'] = {
    //     backgroundColor : 'salmon',
    //     color : 'black'
    //   }
    }
   
  return (
    // <StyleRoot>
     <Aux>
    {/* <WithClass classes={classes.App}> */}
      {/* <h1>Hi, I'm a React App</h1>
      <p className={assignedclasses.join(' ')}>This is really working!</p>
      {/* <p>&#9829;{izhaar}</p> */}
      {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>Toggle Persons</StyledButton> */}
      {/* <button className={btnClass.join(' ')} title="SwitchNames" onClick={this.togglePersonHandler}>Toggle Persons</button> */} 
      <button onClick={() =>{
        this.setState({showCockpit : !this.state.showCockpit})
      }}>Remove/ADD Cockpit</button>

      <AuthContext.Provider value={{authenticated: this.state.authenticated , login : this.loginHandler}}>
      {this.state.showCockpit ?
      <Cockpit showPersons={this.state.showPersons} personsLength={this.state.persons.length} clicked={this.togglePersonHandler} /> : null
      }


      {person}
      </AuthContext.Provider>
    {/* </WithClass> */}
    </Aux>
   
  );
  }
}

export default WithClass(App,classes.App);
