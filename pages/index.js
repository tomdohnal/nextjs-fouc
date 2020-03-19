import Head from 'next/head'
import css from '../styles/Index.module.css' // if I remove this import, the FOUC disappears

const Home = () => (
  <div>
    <button>Test Button</button>
  </div>
)

export default Home
