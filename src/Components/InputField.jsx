  import React from 'react'
  import styled from 'styled-components'

  const InputContainer = styled.div`
  padding: 10px;
  gap: 5px;
  padding-top: 2%;
  border-radius: 5px;
  `

  const Label = styled.label`
  font-size: medium;
  padding-left: 5px;
  `

  const InputElement = styled.input`
    width: calc(100% - 30px);
    padding: 12px;
    margin-top: 5px;
    border: 1px solid ${(props)=>(props.$error?'red':'#ccc')};
    border-radius: 5px;
    font-size: 15px;
    /* border: 1px red solid; */

    &:focus{
      outline: none;
    }
  `
  const ErrorMessage = styled.span`
    color: red;
    font-size: 15px;
    margin-top: 5px;
    display: block;
  `;


  const InputField = ({label,name,type,value,placeholder,onChange,error}) => {
    return (
      
      <InputContainer>
      <Label>{label}</Label>
      <InputElement
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
       //for red border
       $error={!!error}/>
 
  {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputContainer>
    )
  }

  export default InputField