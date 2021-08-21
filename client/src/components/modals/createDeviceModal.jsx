import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from 'react-bootstrap';
import {Context} from '../../index';
import {createDevice} from '../../http/deviceApi';
import {observer} from 'mobx-react-lite';

const CreateDeviceModal = observer(({show, onHide}) => {
  const {devices} = useContext(Context)

  const [selectedType, setSelectedType] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [file, setFile] = useState(null)
  const [info, setInfo] = useState([])

  const addInfoRow = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }
  const delInfoRow = (number) => {
    setInfo(info.filter(el => el.number !== number))
  }
  const changeInfo = (oneInfo, key, value) => {
    setInfo(info.map(i => i.number === oneInfo.number ? {...i, [key]: value} : i))
  }
  const addFileHandler = e => {
    setFile(e.target.files[0])
  }
  const addDevice = () => {
    const formData = new FormData()
    formData.append('typeId', selectedType.id)
    formData.append('brandId', selectedBrand.id)
    formData.append('name', name)
    formData.append('price', price)
    formData.append('image', file)
    formData.append('info', JSON.stringify(info))
    createDevice(formData)
    onHide()
  }

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
        <Form>
          <Dropdown className={'mt-2 mb-2'}>
            <Dropdown.Toggle>
              {selectedType === '' ? 'Выберите тип' : selectedType.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {devices.types.map(type =>
                <Dropdown.Item key={type.id}
                               onSelect={(e) => setSelectedType(type)}
                >
                  {type.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className={'mt-2 mb-2'}>
            <Dropdown.Toggle>
              {selectedBrand === '' ? 'Выберите брэнд' : selectedBrand.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {devices.brands.map(brand =>
                <Dropdown.Item key={brand.id}
                               onSelect={(e) => setSelectedBrand(brand)}
                >
                  {brand.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className={'mt-2 mb-2'}
            type="text"
            placeholder="Введите название"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Form.Control
            className={'mt-2 mb-2'}
            type="number"
            placeholder="Введите стоимость"
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
          />
          <Form.Control
            className={'mt-2 mb-2'}
            type="file"
            onChange={addFileHandler}
          />
          <hr/>
          <Button
            onClick={addInfoRow}
          >
            Добавить характеристику
          </Button>
          {info.map((el) =>
            <Row key={el.number} className='mt-2'>
              <Col md={4}>
                <Form.Control
                  value={el.title}
                  onChange={(e) => {
                    changeInfo(el, 'title', e.target.value)
                  }
                  }
                  type='text'
                  placeholder='Параметр/характеристика'
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={el.description}
                  onChange={(e) => {
                    changeInfo(el, 'description', e.target.value)
                  }
                  }
                  type='text'
                  placeholder='Значение'
                />
              </Col>
              <Col md={2} className={'d-flex justify-content-center'}>

              </Col>
              <Col md={2} className={'d-flex justify-content-center'}>
                <Button
                  variant={'outline-danger'}
                  onClick={() => delInfoRow(el.number)}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success'
                onClick={addDevice}
        >
          Добавить
        </Button>
        <Button variant='outline-danger'
                onClick={onHide}
        >
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDeviceModal;
