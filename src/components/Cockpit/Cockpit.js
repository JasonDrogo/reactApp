import React, { useContext, useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context'
const cockpit = (props)=>{
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);   // using context in functional component usign userContext hook , so we can access context where earlier we were not able to do
 
  console.log(authContext);
useEffect(()=>{
  console.log('[Cockpit.js] useEffect');


  const timer =  setTimeout(()=>{
alert('saved data in cloud');
  },1000)
// console.log(toggleBtnRef);
// toggleBtnRef.current.click();
  
  return () => {
    clearTimeout(timer);
console.log('[Cockpit.js] cleanUp Work in  useEffect');
}
},[])


useEffect(()=>{
  
  console.log('[Cockpit.js] 2nd useEffect');

  
  return () =>{
    console.log('[Cockpit.js] 2nd cleanUp Work in  useEffect');
    }
  
})

    const assignedclasses =[];
    let btnClass ='';
    if(props.showPersons){
    btnClass = classes.Red; 
    }
    if(props.personsLength <= 2){
      assignedclasses.push(classes.red);
    }
    if(props.personsLength <= 1){
      assignedclasses.push(classes.bold);
    }
 return   <div className ={classes.Cockpit}>
    <h1>Hi, I'm a React App</h1>
    <p className={assignedclasses.join(' ')}>This is really working!</p>

    <button  className={btnClass} title="SwitchNames" onClick={()=>props.clicked()}>Toggle Persons</button>
    {/* <AuthContext.Consumer>  USE consumer when not using the useContext hook*/}
    <button onClick={authContext.login}>Log In</button>
    {/* </AuthContext.Consumer> */}

  </div>
 

}
export default React.memo(cockpit);