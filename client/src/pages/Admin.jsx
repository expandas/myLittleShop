import {Button, Container} from 'react-bootstrap';
import CreateDeviceModal from '../components/modals/createDeviceModal';
import CreateTypeModal from '../components/modals/createTypeModal';
import {useContext, useEffect, useState} from 'react';
import CreateBrand from '../components/modals/createBrand';
import {getBrands, getTypes} from '../http/deviceApi';
import {Context} from '../index';

const Admin = () => {
  const {devices} = useContext(Context)
  const [typeVisible, setTypeVisible] = useState(false)
  const [brandVisible, setBrandVisible] = useState(false)
  const [deviseVisible, setDeviceVisible] = useState(false)

  useEffect(() => {
    getTypes().then(data => devices.setTypes(data))
    getBrands().then(data => devices.setBrands(data))
  }, [deviseVisible])

  return (
    <Container className='d-flex flex-column p-2'>
      <Button
        variant={'outline-dark'}
        className={'mt-2'}
        onClick={() => setTypeVisible(true)}
      >
        Добавить тип
      </Button>
      <Button
        variant={'outline-dark'}
        className={'mt-2'}
        onClick={() => setBrandVisible(true)}
      >
        Добавить брэнд
      </Button>
      <Button
        variant={'outline-dark'}
        className={'mt-2'}
        onClick={() => setDeviceVisible(true)}
      >
        Добавить устройство
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
      <CreateDeviceModal show={deviseVisible} onHide={() => setDeviceVisible(false)}/>
      <CreateTypeModal show={typeVisible} onHide={() => setTypeVisible(false)}/>
    </Container>
  )
};

export default Admin