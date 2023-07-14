import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {Wrapper} from './styledComponents'
import CardItem from '../CardItem'

const Popular = () => {
  const [popular, setPopular] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const settings = {
    dots: true,
    slidesToShow: windowWidth < 768 ? 1 : 3,
    slidesToScroll: 1,
  }

  const getPopular = async () => {
    const check = localStorage.getItem('popular')
    if (check) {
      setPopular(JSON.parse(check))
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=1f40ffb41cd2486aa2f50353a235d0a8&number=9`,
      )
      const data = await api.json()
      localStorage.setItem('popular', JSON.stringify(data.recipes))
      setPopular(data.recipes)
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
      <h2 style={{textAlign: 'center'}}>Popular Options</h2>
      <Slider {...settings}>
        {popular.map(each => (
          <Link to={`/recipe/${each.id}`}>
            <CardItem key={each.id} each={each} />
          </Link>
        ))}
      </Slider>
    </Wrapper>
  )
}

export default Popular
