/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
}

const Title = (props: Props): React.Element<*> => (
  <h1 className={classnames(styles.title, props.className)}>{props.children}</h1>
)

Title.defaultProps = {
  className: '',
  children: '',
}

export default Title
