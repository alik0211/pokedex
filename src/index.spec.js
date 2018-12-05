import React from 'react'
import pokemon from './components/pokemon'

it('renders welcome message', () => {
  let p = new pokemon()
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(p.state.moreInfo).toEqual({})
})
