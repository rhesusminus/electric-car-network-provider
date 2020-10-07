import React from 'react'
import { Header, Footer } from './'

export const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  )
}
