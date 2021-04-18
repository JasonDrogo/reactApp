import React, { Component, PureComponent } from 'react';
import Person from './Person/Person'
// import AuthContext from '../../context/auth-context';
class Persons extends PureComponent{
//     static getDerivedStateFromProps(props,state){
// console.log('[Persons.js] getDerivedStateFromProps',props);
// return state
//     }

//*************************LEGACY LIFECYCLE HOOKS********************************** */
// componentWillReceiveProps(props){
// console.log('[Persons.js] ComponentWillRecieveProps',props)
// }

//     shouldComponentUpdate(nextProps,nextState){
//         console.log('[Persons.js] shouldComponentUpdate');
//         // console.log(nextProps);
//         // console.log(this.props);
//         if(nextProps.persons !== this.props.persons){
//             return true;
//         }
// return false;

//     }
    getSnapshotBeforeUpdate(previousProps,previousState){
console.log('[Persons.js] getSnapshotBeforeUpdate',previousProps,previousState);
return {message : 'Snapshot'};
    }


    componentDidUpdate(previousProps,previousState,snapshot){
        console.log('[Persons.js] CompoentDidUpdate',snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }
    render(){
        
    console.log('[Persons.js] rendering....',this.props);
   return  this.props.persons.map((person,index) =>{

 return <Person key = {person.id}
 name = {person.name} 
 age = {person.age} 
 click={() => this.props.clicked(index)} 
 changed={(event) =>this.props.changed(event,person.id)}
 isAuth ={this.props.isAuthenticated}
 ></Person>
}
 );
}
}
 export default Persons;