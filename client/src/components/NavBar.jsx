import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {useHistory, useLocation,} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTER} from "../helpers/routesConsts";
import {observer} from "mobx-react-lite";
import {getDevices} from '../http/deviceApi';

const NavBar = observer(() => {
  const {user} = useContext(Context)
  const {devices} = useContext(Context)
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
  const homeHandler = () => {
    getDevices(null, null, 1, 9)
      .then(data => {
        devices.setDevices(data.rows)
        devices.setTotalDevices(data.count)
      })
      .then(data => devices.setSelectedBrand([]))
      .then(data => devices.setSelectedType([]))
      .then(data => history.push(SHOP_ROUTER))
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav.Link style={{color: 'white'}}
                  onClick={homeHandler}
        >
          Boring shop
        </Nav.Link>
        {user.isAuth ?
          <Nav className="ml-auto">
            {location.pathname === '/admin' ?
              null :
              <Button
                size='sm'
                variant={"outline-light"}
                onClick={() => adminHandler()}
              >
                Панель администратора
              </Button>}
            {location.pathname === '/basket' ?
              null :
              <Button
                size='sm'
                variant={"outline-light"}
                className='ml-2'
                onClick={() => history.push(BASKET_ROUTE)}
              >
                Корзина
              </Button>}
            <Button
              size='sm'
              variant={"outline-light"}
              className='ml-2'
              onClick={() => logoutHandler()}
            >
              Выйти
            </Button>
          </Nav> :
          <Nav className="ml-auto">
            <Button
              size='sm'
              variant={"outline-light"}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Войти
            </Button>
            <Button
              size='sm'
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