import React, { Component, PropTypes } from 'react'

import banner from 'images/banner.png'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    background: '#27b8e8',
  },
  gridList: {
    margin: '0 auto',
  },
  imgItem: {
    marginTop: 95,
  }
}

const tilesData = {
    img: banner,
    title: 'docker',
  }

const HomeGuide = () => (
  <div style={styles.root}>
    <div style={styles.gridList}>
        <div style={styles.imgItem}>
          <img src={tilesData.img} />
        </div>
    </div>
  </div>
)

export default HomeGuide