
import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';

import NumUtil from "../../utils/numutils";
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
		selector: row => row.symbol,
		minWidth: '0px',
		compact: 'true',
		center: 'true',
    cell: row => <ModalComponent name = {row.symbol}/>
	},
	{
		name: 'Price',
		selector: row => NumUtil.decimal(row.price, 2),
		minWidth: '0px',
		compact: 'true',
		center: 'true'
	},
	{
		name: 'Strike',
		selector: row => NumUtil.decimal(row.strike, 2),
		minWidth: '0px',
		compact: 'true',
		center: 'true'
	},
	{
		name: 'Expiration',
		selector: row => NumUtil.reformat(row.expiration),
		minWidth: '0px',
		compact: 'true',
		center: 'true'
	},
	{
		name: 'DTE',
		selector: row => NumUtil.decimal(row.dte, 0),
		minWidth: '0px',
		compact: 'true',
		center: 'true'
	},
	{  
		name: 'Bid',
		selector: row => NumUtil.decimal(row.bid, 2),
		minWidth: '0px',
		compact: 'true',
		center: 'true'
	},
	{  
		name: 'Ask',
		selector: row => NumUtil.decimal(row.ask, 2),
		minWidth: '0px',
		compact: 'true',
		center: 'true'
	},
	{  
		name: 'Last',
		selector: row => NumUtil.decimal(row.last, 2),
		minWidth: '0px',
		compact: 'true',
		center: 'true'
	},
	{  
		name: 'Volume',
		selector: row => NumUtil.formattedNumber(row.volume),
		minWidth: '0px',
		compact: 'true',
		center: 'true'
	},
	{  
		name: 'OpenInt',
		selector: row => NumUtil.formattedNumber(row.openint),
		minWidth: '0px',
		compact: 'true',
		center: 'true'
	},
	{  
		name: 'VolOI',
		selector: row => NumUtil.decimal(row.voloi, 2) + '%',
		minWidth: '0px',
		compact: 'true',
		center: 'true'
	},
	{  
		name: 'IV',
		selector: row => NumUtil.decimal(row.iv, 2) + '%',
		minWidth: '0px',
		compact: 'true',
		center: 'true'
	},
	{  
		name: 'Delta',
		selector: row => row.delta,
		minWidth: '0px',
		compact: 'true',
		center: 'true'
	},
	{  
		name: 'QuoteDate',
		selector: row => NumUtil.reformat(row.quotedate),
		minWidth: '0px',
		compact: 'true',
		center: 'true'
	}
];
  
const HighVolunmTable = (props) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    fetchData(1, perPage);
  }, [perPage])

  const fetchData = async (page, per_page) => {
    fetch("http://localhost:8081/loadDetails?date='2022-08-24'&limit=" + per_page + "&offset=" + page + "&order=" + (props.order || "volume"))
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
          highlightOnHover={true}
        />
        </>
    );
  }
}

export default HighVolunmTable;