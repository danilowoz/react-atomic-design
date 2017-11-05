/* @flow */

import React from 'react'
import { storiesOf } from '@storybook/react'

import Block from '_components/molecules/block'

import Feature from './'

storiesOf('Feature', module).add('default', () => (
  <Feature image="https://i.pinimg.com/originals/7e/d6/1a/7ed61a337b0cccb1598fe5fd1b9724bf.jpg">
    <Block title="Atom" button="Learn more">
      <p>
        An atom is the smallest constituent unit of ordinary matter that has the properties of a
        chemical element. Every solid, liquid, gas, and plasma is composed of neutral or ionized
        atoms. Atoms are very small; typical sizes are around 100 picometers (a ten-billionth of a
        meter, in the short scale).
      </p>
    </Block>
  </Feature>
))
