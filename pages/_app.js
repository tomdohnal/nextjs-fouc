import React from 'react'
import Cookie from 'js-cookie'
import StackTrace from 'stacktrace-js'
import _ from 'lodash'
import R from 'ramda'
import '../styles/App.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
