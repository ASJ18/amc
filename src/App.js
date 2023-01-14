import React from 'react'

import {articles, brand, cta, navbar} from './components';

import {blog, features, footer, header, possibility, whatGPT3} from './containers';

const app = () => {
  return (
    <div className='app'>
        <div className='gradient__bg'>
          <navbar />
          <header />
        </div>
        <brand />
        <whatGPT3 />
        <features />
        <possibility />
        <cta />
        <blog />
        <footer />
    </div>
  )
}

export default app