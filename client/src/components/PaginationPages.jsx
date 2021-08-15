import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import {Pagination} from 'react-bootstrap';

const PaginationPages = observer(() => {
  const {devices} = useContext(Context)
  const pagesCount = Math.ceil(devices.totalDevices / devices.limitOnPage)
  const pages =[]

  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1)
  }

  return (
    <Pagination >
      {pages.map(page =>
        <Pagination.Item
          key={page}
          active={devices.currentPage === page}
          onClick={() => devices.setCurrentPage(page)}
        >
          {page}
        </Pagination.Item>
      )}

    </Pagination>
  );
});

export default PaginationPages;