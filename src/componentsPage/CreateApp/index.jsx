import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import { browserHistory } from 'react-router'

import styles from './style.css'

class CreateApp extends React.Component {

  componentWillReceiveProps(nextProps) {
  }
  
  componentWillMount() {
    const { actions } = this.props
    actions.getAllClusters()
  }


  render() {
    const { clusters } = this.props
   
    return (
      <div className="wrapper">
        <div className="wrapper-inner">
          <div className={styles.iconWarp} 
              onClick={e => this.handleListBackClick(e)}>
              <span className={styles.iconText}>项目列表</span>
          </div>

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CSSModules(CreateApp, styles))