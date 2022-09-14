
import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';

import NumUtil from "../../utils/numutils";
import elipse from '../../assets/images/v-elipse.svg';
import filter from '../../assets/images/filter.svg';
import trendUp from '../../assets/images/trend-up.svg';
import download from '../../assets/images/download.svg';
import ModalComponent from "../Modal/Modal";
import "./style.css";

const customStyles = {
  headCells: {
      style: {
        fontSize: "small",
        fontWeight: "bolder"
      },
  }
};

const columns = [

  {
      name: 'Symbol',
      minWidth: '0px',
      compact: 'true',
      center: 'true',
      cell: row => <ModalComponent name={row.symbol} />
  },
  {
      name: 'Name',
      selector: row => row.companyname,
      minWidth: '0px',
      compact: 'true',
      center: 'true'
  },
  {
      name: 'Last',
      selector: row => NumUtil.decimal(row.stocklastprice, 2),
      minWidth: '0px',
      compact: 'true',
      center: 'true'
  },
  {
      name: 'Change',
      selector: row => NumUtil.decimal(row.stockpercchange, 2),
      minWidth: '0px',
      compact: 'true',
      center: 'true'
  },
  {
      name: '%Chg',
      selector: row => NumUtil.decimal(row.stockpercchange*100, 1) + "%",
      minWidth: '0px',
      compact: 'true',
      center: 'true'
  },
  {  
      name: 'IV Rank',
      selector: row => NumUtil.decimal(row.ivrankoneyear*100, 1) + "%",
      minWidth: '0px',
      compact: 'true',
      center: 'true'
  },
  {  
      name: 'Options Vol',
      selector: row => NumUtil.formattedNumber(row.stockvolume),
      minWidth: '0px',
      compact: 'true',
      center: 'true'
  },
  {  
      name: '% Put',
      selector: row => NumUtil.decimal(row.percputvolume*100, 1) + "%",
      minWidth: '0px',
      compact: 'true',
      center: 'true'
  },
  {  
      name: '% Call',
      selector: row => NumUtil.decimal(row.perccallvolume*100, 1) + "%",
      minWidth: '0px',
      compact: 'true',
      center: 'true'
  },
  {  
      name: 'Put/Call Vol',
      selector: row => NumUtil.decimal(row.putcallratio, 2),
      minWidth: '0px',
      compact: 'true',
      center: 'true'
  },
  {  
      name: 'Time',
      selector: row => NumUtil.reformat(row.quotedate),
      minWidth: '0px',
      compact: 'true',
      center: 'true'
  }
]; 
  
const TableComponent = (props) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    fetchData(1, perPage);
  }, [perPage])

  const fetchData = async (page, per_page) => {
    fetch("http://localhost:8081/loadSummary?date='2022-08-24'&limit=" + per_page + "&offset=" + page)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
          setTotalRows(result.totalCount);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  const handlePageChange = page => {
    fetchData(page, perPage);
  }

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="tabs-wrapper">
            <div className="tabs">
                <a href="/#"> Stocks </a>
            </div>

            <div className="tabs">
                <a href="/#">  ETFs  </a>
            </div>

            <div className="tabs">
                <a href="/#">  Indices  </a>
            </div>
        </div>
        <div className="table-filter-wrapper">
            <div className="table-filter-right">
                <select name="viewName" className="form_control">
                    <option value="main">Main View </option>
                    <option value="technical">Technical </option>
                    <option value="performance">Performance </option>
                    <option value="custom_create_view">Custom</option>
                </select>
            </div>
            <div className="table-filter-left">
                <a href="/#"> <img src={filter} alt="" /> Screen</a>
                <a href="/#"><img src={trendUp} alt="" /> Flipcharts</a>
                <a href="/#"><img src={download} alt="" /> Download</a>
            </div>
        </div>

        <DataTable
          columns={columns}
          data={items}
          pagination
          paginationServer
          paginationRowsPerPageOptions={[10, 25, 50, 100]}
          paginationTotalRows={totalRows}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handlePerRowsChange}
          customStyles={customStyles}
          striped={true}
          highlightOnHover={true} />
      </>
    );
  }
}

export default TableComponent;