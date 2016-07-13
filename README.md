[![Build Status](https://travis-ci.org/MicheleBertoli/react-render-with-params.svg?branch=master)](https://travis-ci.org/MicheleBertoli/react-render-with-params)

# react-render-with-params

I've been using [Preact](https://preactjs.com/) recently and I loved the way props, state and context are passed to the render method. It feels like writing stateless components and it's great for destructuring.

That's what the `renderWithParams` higher order component is about.

## Installation

```bash
npm i react-render-with-params --save
```

## Usage

```javascript
import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import renderWithParams from 'react-render-with-params'

const Yo = React.createClass({
  contextTypes: {
    myContext: PropTypes.string,
  },
  getInitialState() {
    return {
      myState: 'myState',
    }
  },
  render({ myProps }, { myState }, { myContext }) {
    return <div>{myProps} {myState} {myContext}</div>
  },
})

const SuperYo = renderWithParams(Yo)

render(<SuperYo myProps="myProps" />, document.getElementById('app'))
```

## Test

```bash
npm test
```
