import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getCookie } from 'UtilsHelper'
import { APPIDCOOKIE } from 'CommonVal'
import { getVisibleApps } from 'AppReducer'
import * as AppActions from 'AppAction'

import Header from '../components/Header/Header'
import LeftNav from '../components/SideBar/LeftNav'

class AppContainer extends React.Component {
  constructor(props, context) {
      super(props, context)
  }

  render() {
    return (
      <div style={{height: '100%', minWidth: '1000px', position: 'relative'}} className="g-clearfix">
          <div className="detail-cont-wrap">
            {this.props.children}
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    apps: state.get('app'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, AppActions), dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer)
