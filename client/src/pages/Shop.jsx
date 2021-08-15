import {Col, Container, Row} from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import {useContext, useEffect} from 'react';
import {Context} from '../index';
import {getBrands, getDevices, getTypes} from '../http/deviceApi';
import {observer} from 'mobx-react-lite';
import PaginationPages from '../components/PaginationPages';

const Shop = observer(() => {
  const {devices} = useContext(Context)

  useEffect(() => {
    getTypes().then(data => devices.setTypes(data))
    getBrands().then(data => devices.setBrands(data))
    getDevices(null, null, 1, 9)
      .then(data => {
        devices.setDevices(data.rows)
        devices.setTotalDevices(data.count)
        devices.setLimitOnPage(data.limit)
      })
  }, [])

  useEffect(() => {
    getDevices(devices.selectedBrand.id, devices.selectedType.id, devices.currentPage, 9)
      .then(data => {
        devices.setDevices(data.rows)
        devices.setTotalDevices(data.count)
        devices.setLimitOnPage(data.limit)
      })
  }, [devices.currentPage, devices.selectedBrand, devices.selectedType])

  return (
    <Container>
      <Row>
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
          <DeviceList/>
          <PaginationPages/>
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;