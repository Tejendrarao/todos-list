import React from 'react'

export const Footer = () => {
  let footerStyle={
    position:"absolute",
    top:"100vh",
    width:"100%"
  }
  return (
    <footer className='bg-black text-light' style={footerStyle}>
      <p className='text-center py-3'>
      Copyright &copy; Testing.com
      </p>
    </footer>
  )
}
