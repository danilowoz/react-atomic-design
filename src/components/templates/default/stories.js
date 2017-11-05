/* @flow */
import React from 'react'
import { storiesOf } from '@storybook/react'

import styles from './styles.css'

const defaultStyle = {
  outline: '1px solid #eee',
  backgroundColor: 'rgba(220, 220, 220, .6)',
  minHeight: '200px',
}

storiesOf('default', module).add('default', () => (
  <div className={styles.default} style={defaultStyle}>
    <div className={styles.hero} style={defaultStyle} />
    <div className={styles.col1} style={defaultStyle} />
    <div className={styles.col2} style={defaultStyle} />
  </div>
))
