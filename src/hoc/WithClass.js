import React from 'react';

// const withClass = props =>(
// <div className={props.classes} >
// {props.children}
// </div>
// );

const withClass =(WrappedComponent , className) =>{
    return props  =>{
       return <div className={className}>
           
            <WrappedComponent {...props}/>
        </div>
    }
}
export default withClass;