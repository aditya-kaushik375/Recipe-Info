import styled from 'styled-components'

export const Card = styled.div`
  border-radius: 1rem;
  margin: 1rem;
  background-color: #fff;
  position: relative;
  min-height: 20rem;
  cursor: pointer;
`

export const Img = styled.img`
  position: absolute;
  width: 90%;
  height: 85%;
  object-fit: cover;

  padding: 1rem;
  border-radius: 1rem;
`
export const CardText = styled.p`
  z-index: 100;
  color: #fff;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 1%;
  top: 60%;
  letter-spacing: 1px;
`
export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 95%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  border-radius: 1rem;
`
