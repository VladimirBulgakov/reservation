import React, { Component } from 'react';


function mapStateToProps(state) {
  return {
    inputValue: state.input,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleImportChange: e => dispatch(inputChange(e)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
