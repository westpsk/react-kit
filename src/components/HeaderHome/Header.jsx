import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, IndexLink } from 'react-router'

import CSSModules from 'react-css-modules'

import * as UserActions from 'UserAction'
import { goToLoginPage } from 'UtilsHelper'

import styles from './style.css'

class Header extends Component {
  constructor(props, context) {
    super(props, context)
  }

  handleLogin(e){
    e.preventDefault()
    goToLoginPage('/')
  }

  handleLogOut(e){
    e.preventDefault()
    const { actions } = this.props
    actions.logout()
  }

  render() {
    const { user } = this.props

    return (
      <div className={styles.header}>
        <a className={styles.logo}>docker</a>
        <div className={styles['nav-list']}>
            {/*<IndexLink to="/" activeClassName={styles.curr}>主页</IndexLink>
            <Link to="/detail/test" activeClassName={styles.curr}>&nbsp;&nbsp;DETAIL LINK</Link>*/}
        </div>
        
        <div className={styles.loginWrap}>
            { user.isLogin 
                ? (<div>
                      <span className={styles.username}>
                      { user.info && user.info.get('display') }
                      </span>
                      <span className={styles.line}>|</span>
                      <a href="##" onClick={(e)=>this.handleLogOut(e)}>退出</a>
                    </div>)

                : (<a href="##" className={styles.login} onClick={(e)=>this.handleLogin(e)}>登录</a>)
            }
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.get('user')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(Object.assign({}, UserActions), dispatch)
    }
}

// react router bug,will fixed 3.0.0-alpha.1 and newer.
export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {pure: false}
)(CSSModules(Header, styles))
