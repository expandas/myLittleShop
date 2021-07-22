import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
  const {devices} = useContext(Context)
  return (
    <Row className='justify-content-around mt-2'>
      {devices.brands.map((brand) =>
        <Card
          key={brand.id}
          style={{cursor: 'pointer'}}
          className='mr-2'
          onClick={() => devices.setSelectedBrand(brand)}
          border={brand.id === devices.selectedBrand.id ? 'success' : 'light'}
        >
          {brand.name}
        </Card>
      )}
    </Row>
  )
})

export default BrandBar