import React , {Component} from 'react';
// import './Person.css';
// import styled from 'styled-components';
import Aux from '../../../hoc/Auxillary'
import classes from  './Person.css';   //**********************If using css as Css Modules */
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext  from '../../../context/auth-context';

//*************************************IF You are using Styled-components.com      */
// const StyledDiv = styled.div`

//     width : 60%;
//     margin : 16px auto ;
//     border : 1px solid #eee;
//     box-shadow : 0 2px 3px #ccc;
//     padding : 16px;
//     text-align: center;            

// @media (min-width : 500px){
//     width : '450px'
//             }`;

    class Person extends Component {

      constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
      }

      static contextType = AuthContext;

      componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
      }

      // componentDidUpdate(){
      //   console.log(this.context.);
      // }
      render(){
      console.log('[Person.js] rendering....')
        //  <div className="Person" style={style}>
        // {/* // <StyledDiv> */}
      return(
          // <div className={classes.Person}>

        <Aux>
          {/* <AuthContext.Consumer>  while using contextType no need of consumer as if we want access to the props of context outside this , so we are usign contextType*/ }   
          {/* {this.props.isAuth } */}
          {this.context.authenticated ? 'Authenticated' : 'Please Log In'}
          {/* </AuthContext.Consumer> */}
        <p onClick={this.props.click}>I am a {this.props.name} I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" ref={this.inputElementRef} onChange={this.props.changed} value ={this.props.name}/>
        {/* </StyledDiv> */}
       
        </Aux>
        
      )

        
    }
  }

//  Person.propTypes ={
//    click : PropTypes.func,
//    name : PropTypes.string,
//    age : PropTypes.number,
//    changed : PropTypes.func
//  }


export default WithClass(Person,classes.Person);


//****************************if using Radium radium(person) */