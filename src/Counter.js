
import React from "react";
import {connect} from "react-redux";
import {addAction,subtractAction} from "./actions/actions"
 

const Counter = (props) => {
   return(
    <div>
    <h2>Counter: {props.number}</h2>
    <input type='button' value='add' onClick={props.add} />
    <input type='button' value='subtract' onClick={props.subtract} />
</div>
   )   };


   const mapStateToProps = (state) => {
    return {
        number: state.number,
    };
};
  
const mapDispatchToProps = dispatch => ({
    add: () => dispatch(addAction()),
    subtract: () => dispatch(subtractAction()),
});

  export default connect(mapStateToProps,mapDispatchToProps)(Counter);