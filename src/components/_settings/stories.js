/* @flow */
import React from 'react'
import { storiesOf } from '@storybook/react'
import classnames from 'classnames'

import variables from './stories.css'

const Vars = Object.keys(variables).map(v => (
  <p className={classnames(variables.colors, variables[v])}>{v}</p>
))

storiesOf('— Variables', module).add('', () => <div>{Vars}</div>)
