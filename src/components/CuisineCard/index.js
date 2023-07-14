import {Link} from 'react-router-dom'
import {Card, Img, Text} from './styledComponents'

const CuisineCard = props => {
  const {each} = props
  const {id, image, title} = each
  return (
    <Link to={`/recipe/${id}`}>
      <Card>
        <Img src={image} alt={title} style={{borderRadius: '0.6rem'}} />
        <Text>{title}</Text>
      </Card>
    </Link>
  )
}

export default CuisineCard
