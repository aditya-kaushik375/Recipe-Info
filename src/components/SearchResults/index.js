import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {Grid} from './styledComponents'
import CuisineCard from '../CuisineCard'
import TabCategory from '../TabCategory'

const SearchResults = props => {
  console.log(props)
  const [result, setResult] = useState([])
  const params = useParams()

  const getRecipes = async name => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=1f40ffb41cd2486aa2f50353a235d0a8&query=${name}`,
    )
    const response = await data.json()
    console.log(response.results)
    setResult(response.results)
  }

  useEffect(() => {
    console.log(params.term)
    getRecipes(params.term)
  }, [params.term])

  return (
    <>
      <TabCategory />

      <Grid>
        {result.map(each => (
          <CuisineCard key={each.id} each={each} />
        ))}
      </Grid>
    </>
  )
}

export default SearchResults
