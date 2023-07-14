import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {Wrapper} from './styledComponents'

import CardItem from '../CardItem'

const Veggie = () => {
  const [veggies, setVeggies] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const settings = {
    dots: true,
    slidesToShow: windowWidth < 768 ? 1 : 3,
    slidesToScroll: 1,
  }

  const getPopular = async () => {
    const check = localStorage.getItem('veggies')
    if (check) {
      setVeggies(JSON.parse(check))
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=1f40ffb41cd2486aa2f50353a235d0a8&tags=vegetarian&number=9`,
      )
      const data = await api.json()
      localStorage.setItem('veggies', JSON.stringify(data.recipes))
      setVeggies(data.recipes)
      console.log(data)
    }
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  useEffect(() => {
    getPopular()
  }, [])

  return (
    <Wrapper>
      <h2 style={{textAlign: 'center'}}>Vegetarian Options</h2>
      <Slider {...settings}>
        {veggies.map(each => (
          <Link to={`/recipe/${each.id}`}>
            <CardItem key={each.id} each={each} />
          </Link>
        ))}
      </Slider>
    </Wrapper>
  )
}

export default Veggie
