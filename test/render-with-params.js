import assert from 'assert'
import React, { PropTypes } from 'react'
import { shallow } from 'enzyme'

import renderWithParams from '../src'

describe('renderWithParams', () => {
  it('works', () => {
    const Dummy = renderWithParams(React.createClass({
      contextTypes: {
        myContext: PropTypes.string,
      },
      render({ myProps }, { myState }, { myContext }) {
        return <div>{myProps} {myState} {myContext}</div>
      },
    }))

    const context = { myContext: 'baz' }
    const wrapper = shallow(<Dummy />, { context })
    wrapper.setProps({ myProps: 'foo' })
    wrapper.setState({ myState: 'bar' })

    assert.equal(wrapper.text(), 'foo bar baz')
  })
})
