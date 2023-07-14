import {useState, useEffect} from 'react'

import SimilarCard from '../SimilarCard'
import './index.css'

const SimilarRecipe = props => {
  const {id} = props
  console.log(id)
  const [similar, setSimilar] = useState([])
  const similarRecipe = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/similar?apiKey=1f40ffb41cd2486aa2f50353a235d0a8&number=6`,
    )
    const response = await data.json()
    console.log(response)
    setSimilar(response)
  }

  useEffect(() => {
    similarRecipe()
  }, [])
  return (
    <div className="similar-container">
      {similar.map(each => (
        <SimilarCard each={each} key={each.id} />
      ))}
    </div>
  )
}

export default SimilarRecipe
