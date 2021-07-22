import React, {useContext} from 'react';
import {Button, Dropdown, Form, Modal} from 'react-bootstrap';
import {Context} from '../../index';

const CreateDeviceModal = ({show, onHide}) => {
  const {devices} = useContext(Context)
  console.log(devices)

  return (
    <Modal
      size="lg"
      centered
      show={show}
      backdrop={true}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form >
          <Dropdown className={'mt-2 mb-2'}>
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {devices.types.map(type =>
              <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className={'mt-2 mb-2'}>
              <Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
            <Dropdown.Menu>
              {devices.brands.map(brand =>
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className={'mt-2 mb-2'}
            type="text"
            placeholder="Введите название"
          />
          <Form.Control
            className={'mt-2 mb-2'}
            type="number"
            placeholder="Введите стоимость"
          />
          <Form.Control
            className={'mt-2 mb-2'}
            type="file"
          />
          <hr/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={onHide}>Добавить</Button>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDeviceModal;
