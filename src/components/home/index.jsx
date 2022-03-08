import React, { useState } from 'react';
import TextEditor from './textEditor';
import ImageUpload from './imageUpload';
import ImageVideoUpload from './imageVideoUpload';
import VideoUpload from './videoUpload';
import FileUpload2 from './fileUpload2';
import Properties from './properties';
import HeaderNav from './../../modules/layout/Header/headerNav';
import PricingHome from './../../components/pricingHome';
import PdfUpload from './pdfUpload';

const Home = () => {
    const [state, setState] = useState('basics');
    return (
        <>
        {
            state === 'basics' ? 
            <>
                <HeaderNav state={state} setState = {setState} />
                <div className='basics-body'>
                    <div className="title">
                        Basics Share Page Details
                    </div>
                    <div className="basics-body-body">
                        <div className="body">
                            <div className="d-flex flex-row justify-content-between body-1">
                                <div className="left">
                                    <div className="sharePageTitle">
                                        <div className="d-flex flex-column text">
                                            <span className="top">
                                                Share Page Title
                                            </span>
                                            <span className="bottom">
                                                <span style={{ color: "#076bff;" }}> Required</span> Maxiumum 100 Characters
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-5 creating">
                                        <div className="d-flex flex-column text">
                                            <span className="top">
                                                What are your creating
                                            </span>
                                            <span className="bottom">
                                                <span style={{ color: "#076bff;" }}> Required</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mt-5 creating">
                                        <div className="d-flex flex-column text">
                                            <span className="top">
                                                Which sounds more correct?
                                            </span>
                                        </div>
                
                                    </div>
                                    <div className="profileImage-left">
                                        <div className="d-flex flex-column text">
                                            <span className="top">
                                                Page Profile Image
                                            </span>
                                            <span className="bottom">
                                                <span> We recommend a 256px by 256px image</span>
                                            </span>
                                        </div>
                                    </div>

                                </div>

                                <div className="right">
                                    <input type="text" className="form-control" placeholder="Share Page Title"/>
                                    <input type="text" className="form-control mt-5" placeholder="Share Page Title"/>
                                    <div className="correct-check mt-5">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                                            <label className="form-check-label text-black">
                                                {/* Default radio */}
                                            </label>
                                            </div>
                                            <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label className="form-check-label text-black">
                                                {/* Default checked radio */}
                                            </label>
                                        </div>
                                    </div>
                                    <div className="profileImage mt-4">
                                        <span>RH</span>
                                    </div>

                                </div>
                            </div>
                            <div className=''>
                                <div className="d-flex flex-row justify-content-between pageCoverPhoto">
                                    <div className="d-flex flex-column text">
                                        <span className="top">
                                            Share Page Cover Photo
                                        </span>
                                        <span style={{ color: "#076bff;", fontSize:12}}>Required</span>
                                        <span className="bottom">
                                            We recommend an image at least 1600px <br/> wide and 400px tall.
                                        </span>
                                    </div>
                                    <div className='imageUploading'>
                                        <ImageUpload />
                                    </div>
                                </div>
                                <div className='d-flex flex-row justify-content-between coverPhotoVideo'>
                                    <div className="d-flex flex-column text">
                                        <span className="top">
                                            Share Page Cover Photo and/or Video
                                        </span>
                                        <span style={{ color: "#076bff;", fontSize:12}}>Required</span>
                                        <span className="bottom">
                                            Recommend images should be at least<br/> 1200 wide and 800 high <br/>Videos should be 1080b.
                                        </span>
                                    </div>
                                    <div className='imageVideoUploading'>
                                        <ImageVideoUpload />
                                    </div>
                                </div>

                                <div className='d-flex flex-row justify-content-between coverPhotoVideo'>
                                    <div className="d-flex flex-column  text">
                                        <span className="top">
                                            Upload  your course video here
                                        </span>
                                        <span style={{ color: "#076bff;", fontSize:12}}>Required</span>
                                        <span className="bottom">
                                            Videos should be 1080b.
                                        </span>
                                    </div>
                                    <div className='videoUploading'>
                                        <VideoUpload />
                                    </div>
                                </div>

                                <div className='d-flex flex-row justify-content-between pageURL'>
                                    <div className="d-flex flex-column text">
                                        <span className="top">
                                            Share Page URl 
                                            <span className="bottom">
                                                Globashare.com/
                                            </span>
                                        </span>
                                    </div>
                                    <div className="pageURL-right">
                                        <input type="text" className="form-control" placeholder="Share Page Title"/>
                                    </div>
                                </div>

                                <div className="d-flex flex-row justify-content-between offering-left">
                                    <div className="d-flex flex-column text">
                                        <span className="top">
                                            About your offering
                                        </span>
                                        <span style={{color:"black", fontSize:12}}><span style={{ color: "#076bff;", fontSize:12}}>Required</span> Minium 50 words</span>
                                        <span className="bottom">
                                            This is the first thing buyerswill see they land<br/> on your page so make sure you add as much <br/> detail as possible about your offering.<br/> The more detail you add the mroe chance <br/> you have of making a sale.<br/>Include dates, sizes, formats, hours spent etc.
                                        </span>
                                    </div>
                                    <div className="offering">
                                        <TextEditor />
                                    </div>
                                </div>

                                <div className="d-flex flex-row justify-content-between pageCoverPhoto">
                                    <div className="d-flex flex-column text">
                                        <span className="top">
                                            Upload a supporting document
                                        </span>
                                        <span className='bottom' style={{margin:"5px 0"}}>Optional</span>
                                        <span className="bottom">
                                            Upload a supporting document <br/> that your buyers can download <br/> before buying. The document <br/> can included further detailed <br/> information regarding your offering.
                                        </span>
                                    </div>
                                    <div className='supportingDocument'>
                                        {/* <FileUpload /> */}
                                        <PdfUpload />
                                    </div>
                                </div>

                                <div className="d-flex flex-row justify-content-between pageCoverPhoto">
                                    <div className="d-flex flex-column text">
                                        <span className="top">
                                            Upload your for sale<br/>content here
                                        </span>
                                        <span style={{ color: "#076bff;", fontSize:12}}>Required</span>
                                        <span className="bottom">
                                            These files will be fies your<br/> buyers will receive pucharsing<br/> your offering.
                                        </span>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center algin-items-center saleContent'>
                                        <FileUpload2 />
                                    </div>
                                </div>

                                <div className="d-flex flex-row justify-content-between pageCoverPhoto">
                                    <div className="d-flex flex-column text">
                                        <span className="top">
                                            Properties
                                        </span>
                                        <span style={{ color: "black", fontSize:12}}>Optional</span>
                                        <span className="bottom">
                                            Select from the properties below <br/> to help search and filter your<br/> photos.
                                        </span>
                                    </div>
                                    <div className='property'>
                                        <div className='d-flex flex-row justify-content-around property-box'>
                                            <Properties />
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex flex-row justify-content-between pageCoverPhoto">
                                    <div className="d-flex flex-column text">
                                        <span className="top">
                                            Meta Tags
                                        </span>
                                        <span style={{ color: "black", fontSize:12}}>Optional</span>
                                        <span className="bottom">
                                            Add tags to your share page to make <br/>it more discoverable.
                                        </span>
                                    </div>
                                    <div className='metaTags-box'>
                                        <button>Landscape</button>
                                        <button>Color</button>
                                        <button>Sunset</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body-right">
                            <div className="checklist-title">
                                Checklist
                            </div>
                            <div className="d-flex flex-column checklist">
                                <div className="d-flex flex-row align-items-center">
                                    <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked/>
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
                </div>
            </> : 
            state ==='update' ? <PricingHome state={state} setState = {setState} /> :
            state === 'pricing' ?
            <PricingHome state={state} setState = {setState} /> : ""
        } 
        </>
    ) 
};

export default Home;
