import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import search from '../../assets/images/search.svg'
import cross from '../../assets/images/cross.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import { ImQrcode } from 'react-icons/im';
import { BsCart, BsCaretDownFill } from 'react-icons/bs';
import { CgMenu } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import { useState } from "react";
import "./style.css";

const MenuComponent = (props) => {
  const expand = "lg";
  const [menuSpanFlag, setMenuSpanFlag] = useState(true);

  const pullMenu = () => {
    setMenuSpanFlag(!menuSpanFlag);
  }

  return (
    <>
      <div className="header-content">
        <div className="pre-header">
          <div className="pre-header-content">
            <span>
              <ImQrcode style={{marginRight: '5px'}}/> Apply coupon LABOR30 during checkout
            </span>
            <span>Use LABOR30 coupon for 30% off</span>
          </div>
          <button href="#" className="addcart-amount">
            <div className="addcard-body">
                <div className="addcart-amount-value">
                    $0.00
                </div>
                <div className="addcart-content">
                    <BsCart/>
                    <span className="addcart-alert">0</span>
                </div>
            </div>
          </button>
        </div>

        <Navbar key={expand} expand={expand} className="mainNavBar">
          <Container className="nav-desktop">
            <div className="nav-desktop-brand">
              <img src={logo} alt="" />
              <div className="menu-main">
                <div className="main-nav">
                  <div className="main-nav-list">
                    <Nav.Link href="/#">Home</Nav.Link> 
                    <Nav.Link href="/#">Data Structure</Nav.Link>
                    <Nav.Link href="/#">Price</Nav.Link>
                    <Nav.Link href="/#">Free Data</Nav.Link>
                    <Nav.Link href="/login">Log in</Nav.Link>                                      
                    <Nav.Link href="/register">Register</Nav.Link>                                      
                    <Dropdown>
                        <Dropdown.Toggle variant="default">
                            OptionCharts <BsCaretDownFill />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/mostactive">Most Active Symbols</Dropdown.Item>
                            <Dropdown.Item href="/highestrank">Highest IVRank Symbols</Dropdown.Item>
                            <Dropdown.Item href="/optionvolume">Unusual Option Volume</Dropdown.Item>
                            <Dropdown.Item href="/highvolume">High Volume Options</Dropdown.Item>
                            <Dropdown.Item href="/optiondetailhistory">Options Detail History</Dropdown.Item>
                            <Dropdown.Item href="/highestgain">This Weeks Highest Gains</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>  
            </div>
          </Container>
          {/* <div className="menu-bootstrap">
              <Dropdown>
                  <Dropdown.Toggle variant="default">
                      <span className="menu-icon" onClick={() => pullMenu()}>{ menuSpanFlag ? <CgMenu /> : <IoClose />}</span>
                  </Dropdown.Toggle>
              
                  <Dropdown.Menu>
                      <Dropdown.Item href="#">Home</Dropdown.Item>
                      <Dropdown.Item href="#">Data Structure</Dropdown.Item>
                      <Dropdown.Item href="#">Price</Dropdown.Item>
                      <Dropdown.Item href="#">Free Data</Dropdown.Item>
                      <Dropdown.Item href="#">Login</Dropdown.Item>
                      <Dropdown.Item href="#">
                          <Dropdown.Toggle variant="default">OptionChart</Dropdown.Toggle>
                          <Dropdown>
                              <Dropdown.Menu>
                                  <Dropdown.Item href="#/action-1">Most Active Symbols</Dropdown.Item>
                                  <Dropdown.Item href="#/action-2">Highest IVRank Symbols</Dropdown.Item>
                                  <Dropdown.Item href="#/action-3">Unusual Option Volume</Dropdown.Item>
                                  <Dropdown.Item href="#/action-4">High Volume Options</Dropdown.Item>
                                  <Dropdown.Item href="#/action-5">Options Detail History</Dropdown.Item>
                                  <Dropdown.Item href="#/action-6">This Weeks Highest Gains</Dropdown.Item>
                              </Dropdown.Menu>
                          </Dropdown>
                      </Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
          </div> */}
        </Navbar>
      </div>
    </>
  )
}

export default MenuComponent;