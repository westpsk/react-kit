import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HomePage from '../componentsPage/HomePage'

import * as UserActions from 'UserAction'

class HomeContainer extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  
  render() {
    return (
      <HomePage />
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, UserActions), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
