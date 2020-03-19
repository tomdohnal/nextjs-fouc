import React from 'react'

// if I don't import these libraries (these could be any JS libraries),
// the FOUC disappears or at least becomes less "severe"
import Cookie from 'js-cookie'
import StackTrace from 'stacktrace-js'
import _ from 'lodash'
import R from 'ramda'


import '../styles/App.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
