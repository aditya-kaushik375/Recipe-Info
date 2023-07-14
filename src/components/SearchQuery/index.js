import {withRouter} from 'react-router-dom'

import {useState} from 'react'

import {BiSearchAlt} from 'react-icons/bi'

import {Form, Input, InputCard} from './styledComponents'

import './index.css'

const SearchQuery = props => {
  const {match, location, history} = props
  const [input, setInput] = useState('')

  const submitHandler = e => {
    e.preventDefault()
    history.replace(`/searchQuery/${input}`)
  }

  return (
    <Form onSubmit={submitHandler}>
      <InputCard>
        <BiSearchAlt className="icon" />

        <Input
          type="text"
          placeholder="Enter Search Keyword"
          onChange={e => setInput(e.target.value)}
          value={input}
        />
      </InputCard>
    </Form>
  )
}

export default withRouter(SearchQuery)
