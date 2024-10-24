import React, { useEffect, useState } from 'react';
import useData from './useData';
import './Pagination.css';

const Pagination = () => {
  const [api, setApi] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);
  const { datas } = useData();

  useEffect(() => {
    setApi(datas);
  }, [datas]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = api.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(api.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pagination-container">
      <div className="items-grid">
        {currentItems.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.title} className="item-image" />
            <h4 className="item-title">{item.title}</h4>
          </div>
        ))}
      </div>

      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 1} className="pagination-btn">
          Previous
        </button>
        <span className="page-info">
          Page {currentPage} of {Math.ceil(api.length / itemsPerPage)}
        </span>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(api.length / itemsPerPage)} className="pagination-btn">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
