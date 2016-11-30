import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import MaterialUiForm from '../componentsPage/AppList/AppList'

import Header from '../components/HeaderHome/Header'
import HomeGuide from '../components/HomeGuide/HomeGuide'
import HomeStartBtn from '../components/HomeGuide/HomeStart'

import * as UserActions from 'UserAction'

const styles = {
	home : {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		background:"#27b8e8",
	}
}

class HomeContainer extends React.Component {
	constructor(props, context) {
		super(props, context)
	}
	
	componentWillMount() {
		const { user, actions } = this.props
		!user.isLogin && actions.getUser()
	}

  render() {
	  return (
			<div style={styles.home}>
				<Header />
				<HomeGuide />
				<HomeStartBtn />
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeContainer)
