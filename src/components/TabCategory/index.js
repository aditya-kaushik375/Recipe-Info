import {FaPizzaSlice} from 'react-icons/fa'
import {GiNoodles, GiHamburger, GiIndianPalace} from 'react-icons/gi'

import {Container, StyleLink, Text} from './styledComponents'

const TabCategory = () => (
  <Container>
    <StyleLink to="/cuisine/Italian">
      <FaPizzaSlice />
      <Text>Italian</Text>
    </StyleLink>

    <StyleLink to="/cuisine/American">
      <GiHamburger />
      <Text>American</Text>
    </StyleLink>

    <StyleLink to="/cuisine/Indian">
      <GiIndianPalace />
      <Text>Indian</Text>
    </StyleLink>

    <StyleLink to="/cuisine/Japanese">
      <GiNoodles />
      <Text>Japanese</Text>
    </StyleLink>
  </Container>
)

export default TabCategory
