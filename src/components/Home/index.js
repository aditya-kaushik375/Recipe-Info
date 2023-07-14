import Veggie from '../Veggie'
import Popular from '../Popular'
import NonVeg from '../NonVeg'
import TabCategory from '../TabCategory'
import SearchQuery from '../SearchQuery'
import {Container} from './styledComponents'

const Home = () => (
  <Container>
    <SearchQuery />
    <TabCategory />
    <Popular />
    <Veggie />
    <NonVeg />
  </Container>
)

export default Home
