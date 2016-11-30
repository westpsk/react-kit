import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getCookie } from 'UtilsHelper'
import { APPIDCOOKIE } from 'CommonVal'

import Header from '../components/Header/Header'
import * as AppActions from 'AppAction'
import * as UserActions from 'UserAction'

const styles = {
  cont : {
    paddingLeft: 20,
    paddingRight: 20,
  }
}

class DetailContainer extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  
  componentWillReceiveProps(nextProps){
    // 
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
          <Header />
          {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailContainer)
