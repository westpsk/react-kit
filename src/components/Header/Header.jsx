import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import CSSModules from 'react-css-modules'

import * as UserActions from 'UserAction'

import styles from './style.css'

class Header extends Component {
  constructor(props, context) {
    super(props, context)
  }

  handleLogOut(e){
    e.preventDefault()
    const { actions } = this.props
    actions.logout()
  }
  handleTouchTap() {
    browserHistory.push('/detail/apps')
  }

  render() {
    const { user } = this.props

    return (
         <AppBar
            title='DOCKER平台'
            titleStyle={{fontSize: 16, fontWeight: 'bold', cursor: 'pointer'}}
            style={{backgroundColor: '#222'}}
            showMenuIconButton={false}
            onTitleTouchTap={this.handleTouchTap}
            iconElementRight={
              <IconMenu
                iconButtonElement={
                  <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              >
                { user.isLogin ? <MenuItem primaryText={ user.info && user.info.get('display') } /> : '' }
                <MenuItem primaryText="退出" onClick={(e)=>this.handleLogOut(e)}/>
              </IconMenu>
            }
          />
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
