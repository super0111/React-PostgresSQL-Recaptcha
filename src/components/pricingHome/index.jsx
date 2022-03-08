import HeaderNav1 from '../../modules/layout/Header/headerNav1';
import { AiFillPlusCircle } from "react-icons/ai";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AddForm from "./AddForm";

const PricingHome = (props) => {
    const {state, setState} = props

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='pricing-body-top'>
        <div className="d-flex flex-column pricing-left-width">
            <HeaderNav1 state={state} setState = {setState} />
            <div className='pricing-body'>
                <div className="title">
                    Pricing
                </div>
                {/* <Modal /> */}
                <div className='d-flex flex-column box'>
                    <div className='title'>Photoshop Icons template</div>
                    <div className='d-flex flex-row justify-content-start photoIconsTemplate'>
                        <div className='d-flex flex-column justify-content-start saleType-left'>
                            <span style={{color:"black", fontSize:14, fontWeight:500}}>Sale type</span>
                            <span style={{color:"blue", fontSize:12}}>Required</span>
                        </div>
                        <div className='saleType-right'>
                            <div className='d-flex flex-row chargeByProject'>
                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something"/>
                                <div className='d-flex flex-column justify-content-start text'>
                                    <span className='font-16' style={{color:"black", fontSize:16,}}>Charge By Project</span>
                                    <span style={{color:"black", fontSize:14}}>With this choice you are offing a fixed starting price complete your service.</span>
                                </div>
                            </div>
                            <div className='d-flex flex-row chargeByHour'>
                                <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something"/>
                                <div className='d-flex flex-column text'>
                                    <span style={{color:"black", fontSize:16,}}>Charge By Hour</span>
                                    <span style={{color:"black", fontSize:14}}>With this choice your buyer request how many hours of work they need from you.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-start deliverytime'>
                        <div className='d-flex flex-column justify-content-start deliverytime-left'>
                            <span style={{color:"black", fontSize:14, fontWeight:500}}>Delivery Time</span>
                            <span style={{color:"blue", fontSize:12}}>Required</span>
                        </div>
                        <div className='deliverytime-right'>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div className='d-flex flex-row justify-content-start deliverytime'>
                        <div className='d-flex flex-column justify-content-start deliverytime-left'>
                            <span style={{color:"black", fontSize:14, fontWeight:500}}>Number of Revisions</span>
                            <span style={{color:"black", fontSize:12}}>Optional</span>
                        </div>
                        <div className='deliverytime-right'>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div className='d-flex flex-row justify-content-start deliverytime'>
                        <div className='d-flex flex-column justify-content-start deliverytime-left'>
                            <span style={{color:"black", fontSize:14, fontWeight:500}}>Hours of work included</span>
                            <span style={{color:"black", fontSize:12}}>Optional</span>
                        </div>
                        <div className='deliverytime-right'>
                            <input type="text" className="form-control" placeholder="Hours"/>
                        </div>
                    </div>

                    <div className='d-flex flex-row justify-content-start deliverytime'>
                        <div className='d-flex flex-column justify-content-start deliverytime-left'>
                            <span style={{color:"black", fontSize:14, fontWeight:500}}>Source files included</span>
                            <span style={{color:"black", fontSize:12}}>Optional</span>
                        </div>
                        <div className='deliverytime-right'>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div className='d-flex flex-row justify-content-start deliverytime'>
                        <div className='d-flex flex-column justify-content-start deliverytime-left'>
                            <span style={{color:"black", fontSize:14, fontWeight:500}}>Your starting price</span>
                            <span style={{color:"black", fontSize:12,}}>Max Amount 200$<span style={{color:"blue", fontSize:12}}>Upgrade</span></span>
                            <span style={{color:"blue", fontSize:12}}>Required</span>
                            <span style={{color:"black", fontSize:12}}>You can customise/change price off your service  at the time of sale using the &apos;Customise Job&apos;button.</span>
                            <a style={{color:"blue", fontSize:13}} href="#">Learn more</a>
                        </div>
                        <div className='deliverytime-right'>
                            <input type="text" className="form-control" placeholder="Enter Amount $"/>
                        </div>
                    </div>
                    <div className='title'>Select or Create Add-Ons</div>
                    
                    <div className='add-ons'>
                        <div className='addOns-left'>
                            <span style={{color:"black", fontSize:14, fontWeight:500}}>Add or Create add-ons</span>
                            <span style={{color:"black", fontSize:12}}>Optional</span>
                        </div>
                        <div className='addOns-right'>
                            <div className='d-flex flex-row align-items-center justify-content-between option'>
                                <div className='d-flex flex-row align-items-center'>
                                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    <span className='option-text'>Fast Delivery</span>
                                </div>
                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                    <button type="button" className="btn btn-default addAmounts-btn" >Add Amounts $</button>
                                    <span className='addAmounts-text mt-2'>Max $200/<span style={{color:"blue", fontSize:12}}>Upgrade</span></span>
                                </div>
                                <button type="button" className="btn btn-default minus-btn" >Minus</button>
                            </div>
                            <div className='d-flex flex-row align-items-center justify-content-between option'>
                                <div className='d-flex flex-row align-items-center'>
                                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    <span className='option-text'>Fast Delivery</span>
                                </div>
                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                    <button type="button" className="btn btn-default addAmounts-btn" >Add Amounts $</button>
                                    <span className='addAmounts-text mt-2'>Max $200/<span style={{color:"blue", fontSize:12}}>Upgrade</span></span>
                                </div>
                                <button type="button" className="btn btn-default minus-btn" >Plus</button>
                            </div>
                            <div className='d-flex flex-row align-items-center justify-content-between option'>
                                <div className='d-flex flex-row align-items-center'>
                                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    <span className='option-text'>Fast Delivery</span>
                                </div>
                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                    <button type="button" className="btn btn-default addAmounts-btn" >Add Amounts $</button>
                                    <span className='addAmounts-text mt-2'>Max $200/<span style={{color:"blue", fontSize:12}}>Upgrade</span></span>
                                </div>
                                <button type="button" className="btn btn-default minus-btn" >Plus</button>
                            </div>
                            <div onClick={handleShow} className='d-flex flex-row align-items-center justify-content-start cursor option'>
                                <AiFillPlusCircle style={{color: "rgb(86, 85, 88)", fontSize:16, marginRight:5}} />
                                <span style={{color:"rgb(86, 85, 88)", fontSize:15}}>Add your own custom extra</span>
                            </div>
                            <Modal size="md" show={show} onHide={handleClose} dialogClassName="modal-90w">
                                <Modal.Header closeButton>
                                <Modal.Title style={{color:"rgb(86, 85, 88)", fontSize:16}}>Customs Add Ons</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <AddForm />
                                </Modal.Body>
                                <Modal.Footer>
                                <Button style={{ width: 80,fontSize:14, display: "flex",height: 29, border: "1px solid #a09a9a",justifyContent:"center", alignItems: "center" }} variant="default" onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button style={{ width: 80,fontSize:14,display: "flex",height: 29,border: "1px solid #a09a9a;", justifyContent:"center",alignItems: "center" }} variant="primary" onClick={handleClose}>
                                    Save
                                </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>

                    <div style={{margin:"30px 0 10px 0"}} className='title'>Photoshop Icons Template</div>
                    <div className='d-flex flex-row justify-content-start deliverytime'>
                        <div className='d-flex flex-column justify-content-start deliverytime-left'>
                            <span style={{color:"black", fontSize:14, fontWeight:500}}>Price your offering</span>
                            <span style={{color:"blue", fontSize:12}}>Required</span>
                            <span style={{color:"black", fontSize:12,}}>Max Amount 200$<span style={{color:"blue", fontSize:12}}>Upgrade</span></span>
                        </div>
                        <div className='deliverytime-right'>
                            <input type="text" className="form-control" placeholder="Enter Amount $"/>
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-start deliverytime'>
                        <div className='d-flex flex-column justify-content-start deliverytime-left'>
                            <span style={{color:"black", fontSize:14, fontWeight:500}}>A paid news feed</span>
                            <span style={{color:"black", fontSize:12}}>When subscribers will pay a <br/> Monthly Fee</span>
                            <span style={{color:"black", fontSize:12,}}>Max Amount 200$<span style={{color:"blue", fontSize:12}}>Upgrade</span></span>
                        </div>
                        <div className='deliverytime-right'>
                            <input type="text"  style={{width: 150}} className="form-control" placeholder="Monthly Fee $"/>
                        </div>
                    </div>
                    
                    <div className='d-flex flex-row justify-content-start deliverytime'>
                        <div className='d-flex flex-column justify-content-start deliverytime-left'>
                            <span style={{color:"black", fontSize:14, fontWeight:500}}>A free to access news feed</span>
                            <span style={{color:"black", fontSize:12}}>With the option to make some or any <br/>of your Posts Payable to access</span>
                        </div>
                        <div className='deliverytime-right'>
                            <input style={{marginLeft:20}} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                        </div>
                    </div>

                    <div className='d-flex flex-row justify-content-start deliverytime'>
                        <div className='d-flex flex-column justify-content-start deliverytime-left'>
                            <span style={{color:"black", fontSize:14, fontWeight:500}}>A free to access news feed</span>
                            <span style={{color:"black", fontSize:12}}>With an Access Donations button</span>
                        </div>
                        <div className='deliverytime-right'>
                            <input style={{marginLeft:20}} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="pricing-body-right">
            <div className='pricing-right-box'>
                <button type="button" className="btn btn-default header-btn" >Save Changes</button>
                <button type="button" className="btn btn-primary header-btn">Launch/submit Page</button>
                <button type="button" className="d-flex flex-row btn btn-default justify-content-center align-items-center header-btn">
                    <img className='preview-icon' src="/imgs/preview.png" />
                    <div className='d-flex flex-row align-items-center preview-text'>Preview</div>
                </button>
            </div>

            <div className='border'></div>
            <div className="checklist-title">
                Checklist
            </div>
            <div className="d-flex flex-column checklist">
                <div className="d-flex flex-row align-items-center">
                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something"/>
                    <span>Set your page name</span>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                    <span>Create your headline</span>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                    <span>Verify your email address</span>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                    <span>Upload your profile picture</span>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                    <span>Upload cover image</span>
                </div>
            </div>
        </div>
    </div>
  ) 
};

export default PricingHome;


