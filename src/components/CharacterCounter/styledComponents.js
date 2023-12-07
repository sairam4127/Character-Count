import styled from 'styled-components'

export const CCMainBg = styled.div`
  min-height: 100vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AddCounterCont = styled.div`
  min-height: 70vh;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.BgColor};
  border-top-left-radius: ${props => props.brtl}px;
  border-top-right-radius: ${props => props.brtr}px;
  border-bottom-left-radius: ${props => props.brbl}px;
  border-bottom-right-radius: ${props => props.brbr}px;
`

export const CharCounHead = styled.h1`
  text-align: center;
  color: #ffbf1f;
`
export const CharCountInputCont = styled.form`
  display: flex;
  width: 60%;
`
export const CharCountInput = styled.input`
  width: 60%;
  max-width: 500px;
  padding: 5px;
  margin-right: 10px;
`

export const CharCountBtn = styled.button`
  color: #0f172a;
  background-color: #ffbf1f;
  padding: 5px;
  border: none;
  width: 80px;
  border-radius: 7px;
`

export const YellowParaDiv = styled.div`
  border-top-left-radius: 20px;
  color: #0f172a;
  background-color: #ffbf1f;
  min-height: 20vh;
  width: 100%;
  text-align: center;
`
export const YellowHead = styled.h1`
  // border-bottom-left-radius: 20px;
`
export const YellowPara = styled.p`
  // border-bottom-left-radius: 20px;
`
export const YellowImg = styled.img`
  margin: 10px;
  height: 300px;
  width: 400px;
  @media screen and (max-width: 868px) {
    height: 35vh;
    width: 70%;
  }
`

export const UItemsList = styled.ul`
  text-align: left;
  width: 100%;
  padding: 0px;
  list-style-type: none;
`

export const ListItem = styled.li``
