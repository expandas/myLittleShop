import {Button, Modal} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {checkout} from "../../http/basketApi";
import {SHOP_ROUTER} from "../../helpers/routesConsts";
import {useHistory} from "react-router-dom";

const CheckoutModal = observer(({show, onHide}) => {
  const history = useHistory()

  const onCheckout = () => {
    checkout()
      .then(data => onHide())
      .then(data => history.push(SHOP_ROUTER))
  }

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Оплата
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Дорогой друг!</h4>
        <p>
          Это игрушечный магазин, ну какие деньги, камон
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onCheckout}>Ага угу</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CheckoutModal;