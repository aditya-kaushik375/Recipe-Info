import styled from 'styled-components'

export const Form = styled.form`
  margin: 1rem 10rem;

  width: 45vw;
  @media screen and (max-width: 768px) {
    margin: 1rem 2rem;
    width: 70vw;
  }
`

export const Input = styled.input`
  border: 0;
  outline: 0;
  font-size: 0.8rem;
  padding: 1rem;
  width: 100%;
  background: linear-gradient(#444, #666);
  border-radius: 1rem;
  color: #fff;
`
export const InputCard = styled.div`
  width: 100%;
  position: relative;
`
