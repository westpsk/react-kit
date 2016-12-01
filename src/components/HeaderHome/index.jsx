import React, { Component } from 'react'
import { connect } from 'react-redux'

import CSSModules from 'react-css-modules'

import styles from './style.css'

class Header extends Component {
  constructor(props, context) {
    super(props, context)
  }

  handleLogin(e){
    e.preventDefault()
    alert('login')
  }

  render() {
    const { user } = this.props

    return (
      <div className={styles.header}>
        <a className={styles.logo}>Home</a>
        <div className={styles.loginWrap}>
            <a href="##" className={styles.login} onClick={(e)=>this.handleLogin(e)}>登录</a>
        </div>
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

// react router bug,will fixed 3.0.0-alpha.1 and newer.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CSSModules(Header, styles))
