import  React from 'react';

const createContext = React.createContext({authenticated : false, login : () => {}});

export default createContext;