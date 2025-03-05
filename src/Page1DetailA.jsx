import { useLocation } from 'react-router'
import React from 'react'

export const Page1DetailA = () => {
  const {state} = useLocation();
  console.log(state);
  return (
    <h1>Page1DetailAページです</h1>
  )
}
