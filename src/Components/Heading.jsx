import React from 'react'
import styled from 'styled-components'

const Heading1= styled.div`
  text-align: center;
  font-size: 20px;
  padding: 10px;
`
const Heading = ({heading}) => {
  return (
    <>
    <Heading1>
    <h3>{heading}</h3>
    </Heading1>
    </>
  )
}

export default Heading