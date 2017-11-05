/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
}

const Subtitle = (props: Props): React.Element<*> => (
  <h2 className={classnames(styles.subtitle, props.className)}>{props.children}</h2>
)

Subtitle.defaultProps = {
  className: '',
  children: '',
}

export default Subtitle
