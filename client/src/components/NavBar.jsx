import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useHistory, useLocation,} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTER} from "../helpers/routesConsts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
  const {user} = useContext(Context)
  const history = useHistory()
  const location = useLocation()

  const logoutHandler = () => {
    user.setUser({})
    user.setIsAuth()
    localStorage.clear()
    history.push('/')
  }
  const adminHandler = () => {
    history.push(ADMIN_ROUTE)
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container >
        <NavLink style={{color: 'white'}} to={SHOP_ROUTER}>My little shop</NavLink>
        {user.isAuth ?
          <Nav className="ml-auto">
            {location.pathname === '/admin' ?
              null :
              <Button
                variant={"outline-light"}
                onClick={()=> adminHandler()}
              >
                Панель администратора
              </Button>}
             <Button
               variant={"outline-light"}
               className='ml-2'
               onClick={()=> logoutHandler()}
             >
               Выйти
             </Button>
          </Nav> :
          <Nav className="ml-auto">
            <Button
              variant={"outline-light"}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Войти
            </Button>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(REGISTRATION_ROUTE)} className='ml-2'
            >
              Зарегистрироваться
            </Button>
          </Nav>
        }
      </Container>
    </Navbar>
  )
})

export default NavBar;