
import React from 'react';
import HighVolumnTable from './HighVolumnTable';
import MostActiveTable from './MostActiveTable';
import "./style.css";

const TableComponent = (props) => {
  
  if (props.option === "mostactive") {
    return (
      <>
        <MostActiveTable />
      </>
    )
  } else if (props.option === "highvolume") {
    return (
      <>
        <HighVolumnTable order={"openinterest"}/>
      </>
    )
  }
}

export default TableComponent;