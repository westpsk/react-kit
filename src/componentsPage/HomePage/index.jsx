import React from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import Header from '../../components/HeaderHome/'
import SimpleForm from '../../components/SimpleForm/'

import styles from './style.css'

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

class CreateApp extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className={styles['form-wrap']}>
          <SimpleForm onSubmit={showResults}/>
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