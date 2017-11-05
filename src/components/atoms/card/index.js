/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
}

const Card = (props: Props): React.Element<*> => (
  <div className={classnames(styles.card, props.className)}>{props.children}</div>
)

Card.defaultProps = {
  className: '',
  children: '',
}

export default Card
