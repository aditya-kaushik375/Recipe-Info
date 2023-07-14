import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
  .active {
    background: linear-gradient(#444, #666);
    color: #fff;
  }
`

export const Heading = styled.h3`
  margin-bottom: 2rem;
  margin-left: 4rem;
`
export const Li = styled.li`
  font-size: 1.2rem;
  line-height: 2.5rem;
`
export const Ul = styled.ul`
  margin-top: 2rem;
`
export const Button = styled.button`
  padding: 1rem 1.8rem;
  color: #444;
  background-color: #fff;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`
export const Info = styled.div`
  margin-left: 5rem;
  @media screen and (max-width: 800px) {
    margin-left: 0 auto;
  }
`
export const Img = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
  border-radius: 5px;
  margin-left: 5rem;
`
export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`
