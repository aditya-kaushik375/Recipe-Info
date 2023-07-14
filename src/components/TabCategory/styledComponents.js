import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0rem;
`

export const StyleLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 2rem;
  background: linear-gradient(35deg, #444, #666);
  height: 4rem;
  width: 6rem;
  color: #fff;
  padding: 6px;
  transform: scale(0.8);
  @media screen and(max-width:800px) {
    margin-right: 10px;
    width: 3rem;
  }
  &.active {
    background: linear-gradient(#f27121, #e94057);
    color: #fff;
    outline-color: orange;
    outline-width: 2px;
    outline-offset: 2px;
  }
`
export const Text = styled.h4`
  font-size: 1rem;
  color: #fff;
  margin-left: 5px;
`
