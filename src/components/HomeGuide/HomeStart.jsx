import React from 'react';
import { browserHistory } from 'react-router'

const styles = {
  btnWrap: {
    margin: '0 auto',
    width: 200,
    marginTop: 50,
  },
  startBtn: {
    width: 180,
    height: 60,
    background: 'rgb(255, 64, 129)',
  },
  label: {
    fontSize: '16px'
  }
};

class StartBtn extends React.Component {
  handleBtnClick(e){
     browserHistory.push('/detail/apps')
  }

  render() {
    return (
      <div style={styles.btnWrap}>
        begin
      </div>
    )
  }
}

export default StartBtn;