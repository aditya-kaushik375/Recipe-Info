import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {Grid} from './styledComponents'
import CuisineCard from '../CuisineCard'
import TabCategory from '../TabCategory'

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([])
  const params = useParams()

  const getRecipes = async name => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=1f40ffb41cd2486aa2f50353a235d0a8&cuisine=${name}`,
    )
    const response = await data.json()
    console.log(response.results)
    setCuisine(response.results)
  }

  useEffect(() => {
    getRecipes(params.type)
  }, [params.type])

  return (
    <>
      <TabCategory />
      <Grid>
        {cuisine.map(each => (
          <CuisineCard key={each.id} each={each} />
        ))}
      </Grid>
    </>
  )
}

export default Cuisine
