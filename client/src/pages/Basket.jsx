import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {deleteFromCart, getBasket} from "../http/basketApi";
import ListGroup from "react-bootstrap/ListGroup";
import {Button, Image} from "react-bootstrap";

const Basket = observer(() => {
  const {user} = useContext(Context)
  useEffect(() => {
    getBasket().then(data => user.setBasket(data))
  }, [])

  const deleteHandler = (id) => {
    deleteFromCart(id)
      .then(data => user.setBasket(data))
  }

  return (
    <div className={'d-flex justify-content-center'}>
      <ListGroup
        className={'justify-content-between m-1'}
      >
        <h3 className={'text-center'}>Ваш заказ</h3>
        {user.basket.map(el =>
          <ListGroup.Item
            key={el.id}
            className={'d-flex justify-content-between align-items-center'}
          >
            <div>
              <Image
                src={process.env.REACT_APP_API_URL + el.device.image}
                style={{width: '150px'}}
              />
            </div>
            <div className={'m-2'}>{el.device.name}</div>
            <div className={'m-2'}>Цена: {el.device.price}</div>
            <Button
              variant='outline-danger'
              as={'div'}
              onClick={() => deleteHandler(el.device.id)}
            >
              Удалить
            </Button>
          </ListGroup.Item>
        )}
        <ListGroup.Item
          className={'d-flex align-items-center justify-content-between'}
        >
          Сумма заказа: {user.basket.reduce((acc, el) => acc + el.device.price, 0)} рублей
          <Button
            variant={'outline-success'}
          >
            Оплатить
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
});

export default Basket;