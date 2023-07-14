import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import SimilarRecipe from '../SimilarRecipe'

import {
  Img,
  Wrapper,
  Heading,
  Info,
  Button,
  Ul,
  Li,
  ButtonWrapper,
} from './styledComponents'

const Recipe = () => {
  const [detail, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState('instruction')
  const params = useParams()

  const fetchDetails = async () => {
    const details = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=1f40ffb41cd2486aa2f50353a235d0a8`,
    )
    const data = await details.json()
    console.log(data)
    setDetails(data)
  }

  useEffect(() => {
    fetchDetails()
  }, [])

  return (
    <>
      <Wrapper>
        <div>
          <Heading>{detail.title}</Heading>
          <Img src={detail.image} alt={detail.title} />
        </div>
        <Info>
          <ButtonWrapper>
            <Button
              type="button"
              className={activeTab === 'instruction' ? 'active' : ''}
              onClick={() => setActiveTab('instruction')}
            >
              Instructions
            </Button>
            <Button
              type="button"
              className={activeTab === 'ingredients' ? 'active' : ''}
              onClick={() => setActiveTab('ingredients')}
            >
              Ingredients
            </Button>
          </ButtonWrapper>
          {activeTab === 'instruction' ? (
            <div>
              <p dangerouslySetInnerHTML={{__html: detail.summary}} />
              <p dangerouslySetInnerHTML={{__html: detail.instructions}} />
            </div>
          ) : (
            <Ul>
              {detail.extendedIngredients.map(each => (
                <Li key={each.id}>{each.original}</Li>
              ))}
            </Ul>
          )}
        </Info>
      </Wrapper>
      <h2 style={{textAlign: 'center'}}>Similar Receipe</h2>

      <SimilarRecipe id={params.name} />
    </>
  )
}

export default Recipe
