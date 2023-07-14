import {Link} from 'react-router-dom'
import './index.css'

import {Nav, Logo, Img} from './styledComponents'

const NavBar = () => (
  <Nav>
    <Img
      src="https://cdn-icons-png.flaticon.com/512/3170/3170733.png"
      alt="logo"
    />
    <Link to="/">
      <Logo to="/">Treat</Logo>
    </Link>
  </Nav>
)

export default NavBar
