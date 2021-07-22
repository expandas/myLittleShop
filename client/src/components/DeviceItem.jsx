import {Card, Col, Image} from 'react-bootstrap';
import {useHistory} from 'react-router-dom'
import {DEVICE_ROUTE} from '../helpers/routesConsts';
import star from '../assets/star.png'

const DeviceItem = ({device}) => {
  const history = useHistory()

  return (
    <Col md={3} className='m-3'>
      <Card style={{width: 150, cursor: 'pointer'}} border={'light'}
      onClick={()=> history.push(DEVICE_ROUTE + '/' + device.id)}
      >
        <Image width={150} height={150} src={device.image}/>
        <div className='d-flex justify-content-between align-items-center mw-150 text-black-50'>
          <div> {device.brands}</div>
          <div className='d-flex align-items-center mt-1'>
            <div> {device.rating} </div>
            <Image height={15} width={15}
                   src={star}/>
          </div>
        </div>
        <div> {device.name}</div>

      </Card>
    </Col>
  );
};

export default DeviceItem;