import {Card, Img, CardText, Gradient} from './styledComponents'

const CardItem = props => {
  const {each} = props
  const {image, title} = each
  return (
    <Card>
      <Img src={image} alt={title} />
      <CardText>{title}</CardText>
      <Gradient />
    </Card>
  )
}

export default CardItem
