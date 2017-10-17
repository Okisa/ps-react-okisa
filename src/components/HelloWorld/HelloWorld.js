import React from 'react';
import propTypes from 'prop-types';

/** A super component that do something that i'am really trying to understand */
function HelloWorld ({message}){
  return <div>Hello{message}</div>
}

HelloWorld.propTypes = {
  /** Message to be displayed */  
  message:propTypes.string
};

HelloWorld.defaultProps = { 
  message:'World'
};

export default HelloWorld;