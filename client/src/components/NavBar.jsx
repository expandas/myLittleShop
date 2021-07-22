import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useHistory, } from "react-router-dom";
import {ADMIN_ROUTE, SHOP_ROUTER} from "../helpers/routesConsts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
  const {user} = useContext(Context)
  const history = useHistory()

  const logoutHandler = () => {
    user.setIsAuth()
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
            <Button
              variant={"outline-light"}
              onClick={()=> adminHandler()}
            >
              Панель администратора
            </Button>
             <Button
               variant={"outline-light"}
               className='ml-2'
               onClick={()=> logoutHandler()}
             >
               Выйти
             </Button>
          </Nav> :
          <Nav className="ml-auto">
            <Button variant={"outline-light"} onClick={() => user.setIsAuth()}> Войти </Button>
            <Button variant={"outline-light"} className='ml-2'> Зарегистрироваться </Button>
          </Nav>
        }
      </Container>
    </Navbar>
  )
})

export default NavBar;