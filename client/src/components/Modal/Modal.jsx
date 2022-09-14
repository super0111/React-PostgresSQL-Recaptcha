import React, { useState } from "react";
import plus from '../../assets/images/plus.svg';
import Modal from 'react-bootstrap/Modal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactApexChart from "react-apexcharts";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./style.css";

const ModalComponent = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const chartData = {
        series: [{
            data: [{
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            {
                x: new Date(1538780400000),
                y: [6632.01, 6643.59, 6620, 6630.11]
            },
            {
                x: new Date(1538782200000),
                y: [6630.71, 6648.95, 6623.34, 6635.65]
            },
            {
                x: new Date(1538784000000),
                y: [6635.65, 6651, 6629.67, 6638.24]
            },
            {
                x: new Date(1538785800000),
                y: [6638.24, 6640, 6620, 6624.47]
            },
            {
                x: new Date(1538787600000),
                y: [6624.53, 6636.03, 6621.68, 6624.31]
            },
            {
                x: new Date(1538789400000),
                y: [6624.61, 6632.2, 6617, 6626.02]
            },
            {
                x: new Date(1538791200000),
                y: [6627, 6627.62, 6584.22, 6603.02]
            },
            {
                x: new Date(1538793000000),
                y: [6605, 6608.03, 6598.95, 6604.01]
            },
            {
                x: new Date(1538794800000),
                y: [6604.5, 6614.4, 6602.26, 6608.02]
            },
            {
                x: new Date(1538796600000),
                y: [6608.02, 6610.68, 6601.99, 6608.91]
            },
            {
                x: new Date(1538798400000),
                y: [6608.91, 6618.99, 6608.01, 6612]
            },
            {
                x: new Date(1538800200000),
                y: [6612, 6615.13, 6605.09, 6612]
            },
            {
                x: new Date(1538802000000),
                y: [6612, 6624.12, 6608.43, 6622.95]
            },
            {
                x: new Date(1538803800000),
                y: [6623.91, 6623.91, 6615, 6615.67]
            },
            {
                x: new Date(1538805600000),
                y: [6618.69, 6618.74, 6610, 6610.4]
            },
            {
                x: new Date(1538807400000),
                y: [6611, 6622.78, 6610.4, 6614.9]
            },
            {
                x: new Date(1538809200000),
                y: [6614.9, 6626.2, 6613.33, 6623.45]
            },
            {
                x: new Date(1538811000000),
                y: [6623.48, 6627, 6618.38, 6620.35]
            },
            {
                x: new Date(1538812800000),
                y: [6619.43, 6620.35, 6610.05, 6615.53]
            },
            {
                x: new Date(1538814600000),
                y: [6615.53, 6617.93, 6610, 6615.19]
            },
            {
                x: new Date(1538816400000),
                y: [6615.19, 6621.6, 6608.2, 6620]
            },
            {
                x: new Date(1538818200000),
                y: [6619.54, 6625.17, 6614.15, 6620]
            },
            {
                x: new Date(1538820000000),
                y: [6620.33, 6634.15, 6617.24, 6624.61]
            },
            {
                x: new Date(1538821800000),
                y: [6625.95, 6626, 6611.66, 6617.58]
            },
            {
                x: new Date(1538823600000),
                y: [6619, 6625.97, 6595.27, 6598.86]
            },
            {
                x: new Date(1538825400000),
                y: [6598.86, 6598.88, 6570, 6587.16]
            },
            {
                x: new Date(1538827200000),
                y: [6588.86, 6600, 6580, 6593.4]
            },
            {
                x: new Date(1538829000000),
                y: [6593.99, 6598.89, 6585, 6587.81]
            },
            {
                x: new Date(1538830800000),
                y: [6587.81, 6592.73, 6567.14, 6578]
            },
            {
                x: new Date(1538832600000),
                y: [6578.35, 6581.72, 6567.39, 6579]
            },
            {
                x: new Date(1538834400000),
                y: [6579.38, 6580.92, 6566.77, 6575.96]
            },


            ]
        }],
        options: {
            chart: {
                type: 'candlestick',
                height: 300,
                toolbar: {
                    show: false,
                },
            },
            title: {
                text: '',
                align: 'left'
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                tooltip: {
                    enabled: true
                }
            }
        }
    }


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <button className="plus-btn m-auto d-block" onClick={handleShow}>
                {props.name}
            </button>
            <Modal show={show} onHide={handleClose} size="lg"
            >
                <Modal.Header closeButton className="px-5">
                    <Modal.Title>Apple Inc (AAPL) 163.62 <span className="red-color">-6.41 (-3.77%)</span>   </Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-5 slider-modal-body">
                    <Slider {...settings}>
                        <div>
                            <div className="slide-hader">
                                <h3>Chart</h3>
                                <button className="btn btn-outline">Chart</button>
                            </div>
                            <div id="chart">
                                <ReactApexChart options={chartData.options} series={chartData.series} type="candlestick" height={300} />
                            </div>

                        </div>
                        <div>
                            <div className="slide-hader">
                                <h3>Overview</h3>
                                <button className="btn btn-outline">Full Qoute</button>
                            </div>

                            <div className="row py-3">
                                <div className="col-md-6">
                                    <div className="progress-wrapper  mb-2">
                                        <div className="pregress-vale border-0">
                                            <p>Day Low <br/>394.05</p>
                                            <p>Day High<br/>394.05</p>
                                        </div>
                                        <ProgressBar now="60" label="60%" visuallyHidden />

                                    </div>
                                    <div className="modal-listin-data">
                                        <div className="list-data-box">
                                            <div className="key">Previous Close</div>
                                            <div className="val">170.03</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">Previous Close</div>
                                            <div className="val">170.03</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">Previous Close</div>
                                            <div className="val">170.03</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">Previous Close</div>
                                            <div className="val">170.03</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">Previous Close</div>
                                            <div className="val red-color">170.03</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-header bottom-border">
                                        <h3>PERFORMANCE - PAST 5 DAYS</h3>
                                    </div>

                                    <table className="table modal-table">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Last</th>
                                                <th>Change</th>
                                                <th>%Ch</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>08/26/22</td>
                                                <td>163.62</td>
                                                <td><span className="red-color">-6.42</span> </td>
                                                <td><span className="green-color">+6.42</span> </td>
                                            </tr>

                                            <tr>
                                                <td>08/26/22</td>
                                                <td>163.62</td>
                                                <td><span className="red-color">-6.42</span> </td>
                                                <td><span className="green-color">+6.42</span> </td>
                                            </tr>

                                            <tr>
                                                <td>08/26/22</td>
                                                <td>163.62</td>
                                                <td><span className="red-color">-6.42</span> </td>
                                                <td><span className="green-color">+6.42</span> </td>
                                            </tr>

                                            <tr>
                                                <td>08/26/22</td>
                                                <td>163.62</td>
                                                <td><span className="red-color">-6.42</span> </td>
                                                <td><span className="green-color">+6.42</span> </td>
                                            </tr>

                                            <tr>
                                                <td>08/26/22</td>
                                                <td>163.62</td>
                                                <td><span className="red-color">-6.42</span> </td>
                                                <td><span className="green-color">+6.42</span> </td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="inner-header bottom-border">
                                <div className="slide-hader">
                                    <h3>Performance Report</h3>
                                    <button className="btn btn-outline">Full Report</button>
                                </div>
                            </div>

                            <div className="row m-0">
                                <div className="col-md-4 p-0">
                                    <div className="inner-header bottom-border">
                                        <h3>PERIOD</h3>
                                    </div>
                                </div>
                                <div className="col-md-4 p-0">
                                    <div className="inner-header bottom-border">
                                        <h3>CHANGE / %CHG</h3>
                                    </div>
                                </div>
                                <div className="col-md-4 p-0">
                                    <div className="inner-header bottom-border">
                                        <h3>RANGE</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row py-1">
                                <div className="col-md-6">
                                    <div className="modal-listin-data">
                                        <div className="list-data-box">
                                            <div className="key">1-Month</div>
                                            <div className="val">170.03</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">1-Month</div>
                                            <div className="val">170.03</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">1-Month</div>
                                            <div className="val">170.03</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">1-Month</div>
                                            <div className="val">170.03</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">1-Month</div>
                                            <div className="val red-color">170.03</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">

                                    <div className="progress-wrapper">
                                        <ProgressBar now="60" label="60%" visuallyHidden />
                                        <div className="pregress-vale">
                                            <p>394.05</p>
                                            <p>394.05</p>
                                        </div>
                                    </div>

                                    <div className="progress-wrapper">
                                        <ProgressBar now="60" label="60%" visuallyHidden />
                                        <div className="pregress-vale">
                                            <p>394.05</p>
                                            <p>394.05</p>
                                        </div>
                                    </div>


                                    <div className="progress-wrapper">
                                        <ProgressBar now="60" label="60%" visuallyHidden />
                                        <div className="pregress-vale">
                                            <p>394.05</p>
                                            <p>394.05</p>
                                        </div>
                                    </div>


                                    <div className="progress-wrapper">
                                        <ProgressBar now="60" label="60%" visuallyHidden />
                                        <div className="pregress-vale">
                                            <p>394.05</p>
                                            <p>394.05</p>
                                        </div>
                                    </div>
                                    <div className="progress-wrapper">
                                        <ProgressBar now="60" label="60%" visuallyHidden />
                                        <div className="pregress-vale">
                                            <p>394.05</p>
                                            <p>394.05</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                        <div>
                            <div className="inner-header">
                                <div className="slide-hader">
                                    <h3>Headlines</h3>
                                    <button className="btn btn-outline">Full Report</button>
                                </div>
                            </div>


                            <div className="modal-news-data">
                                <div className="news-box">
                                    <a href="">These 2 High-Growth Stocks Could Power the Bull Market's Next Record Run</a>
                                    <p>Motley Fool - Sat Aug 27, 7:42AM CDT</p>
                                </div>

                                <div className="news-box">
                                    <a href="">These 2 High-Growth Stocks Could Power the Bull Market's Next Record Run</a>
                                    <p>Motley Fool - Sat Aug 27, 7:42AM CDT</p>
                                </div>

                                <div className="news-box">
                                    <a href="">These 2 High-Growth Stocks Could Power the Bull Market's Next Record Run</a>
                                    <p>Motley Fool - Sat Aug 27, 7:42AM CDT</p>
                                </div>

                                <div className="news-box">
                                    <a href="">These 2 High-Growth Stocks Could Power the Bull Market's Next Record Run</a>
                                    <p>Motley Fool - Sat Aug 27, 7:42AM CDT</p>
                                </div>

                                <div className="news-box">
                                    <a href="">These 2 High-Growth Stocks Could Power the Bull Market's Next Record Run</a>
                                    <p>Motley Fool - Sat Aug 27, 7:42AM CDT</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="inner-header">
                                <div className="slide-hader">
                                    <h3>Opinion</h3>
                                    <button className="btn btn-outline">Full Opinion</button>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-6">
                                    <div className="op-left-wrapper">
                                        <h4>OVERALL AVERAGE:</h4>
                                        <button className="btn btn-sell">SELL</button>
                                        <p>The Barchart Technical Opinion rating is a 48% Sell with a Weakening short term outlook on maintaining the current direction.</p>
                                        <p>The current trending strength of the market is Soft.</p>
                                        <p>Long term indicators fully support a continuation of the trend.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-header bottom-border">
                                        <h3>INDICATOR SUMMARY:
                                        </h3>
                                    </div>

                                    <div className="modal-listin-data">
                                        <div className="list-data-box">
                                            <div className="key">Short Term Indicators</div>
                                            <div className="val">0% HOLD</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">Medium Term Indicators</div>
                                            <div className="val red-color">50% SELL3</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">Medium Term Indicators</div>
                                            <div className="val red-color">50% SELL3</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">Medium Term Indicators</div>
                                            <div className="val red-color">50% SELL3</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">Medium Term Indicators</div>
                                            <div className="val red-color">50% SELL3</div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="inner-header bottom-border">
                                <div className="slide-hader">
                                    <h3>Technical Analysis</h3>
                                    <button className="btn btn-outline">Full Technical</button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="modal-listin-data">
                                        <div className="list-data-box">
                                            <div className="key">Short Term Indicators</div>
                                            <div className="val">0% HOLD</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">Medium Term Indicators</div>
                                            <div className="val red-color">50% SELL3</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">Medium Term Indicators</div>
                                            <div className="val red-color">50% SELL3</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">Medium Term Indicators</div>
                                            <div className="val red-color">50% SELL3</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">Medium Term Indicators</div>
                                            <div className="val red-color">50% SELL3</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">Medium Term Indicators</div>
                                            <div className="val red-color">50% SELL3</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">Medium Term Indicators</div>
                                            <div className="val red-color">50% SELL3</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">Medium Term Indicators</div>
                                            <div className="val red-color">50% SELL3</div>
                                        </div>


                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="modal-listin-data">
                                        <div className="list-data-box">
                                            <div className="key">Short Term Indicators</div>
                                            <div className="val">0% HOLD</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">Medium Term Indicators</div>
                                            <div className="val red-color">50% SELL3</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">Medium Term Indicators</div>
                                            <div className="val red-color">50% SELL3</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">Medium Term Indicators</div>
                                            <div className="val red-color">50% SELL3</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">Medium Term Indicators</div>
                                            <div className="val red-color">50% SELL3</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">Medium Term Indicators</div>
                                            <div className="val red-color">50% SELL3</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">Medium Term Indicators</div>
                                            <div className="val red-color">50% SELL3</div>
                                        </div>

                                        <div className="list-data-box">
                                            <div className="key">Medium Term Indicators</div>
                                            <div className="val red-color">50% SELL3</div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>


                        <div>
                            <div className="inner-header bottom-border">
                                <div className="slide-hader">
                                    <h3>Key Statistics</h3>
                                    <button className="btn btn-outline">Full Profile</button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="inner-header bottom-border">
                                        <h3>OVERVIEW:
                                        </h3>
                                    </div>
                                    <div className="modal-listin-data">
                                        <div className="list-data-box">
                                            <div className="key">Short Term Indicators</div>
                                            <div className="val">State Street Global Advisors</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">Underlying Index</div>
                                            <div className="val">S&P 500 Index</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">Underlying Index</div>
                                            <div className="val">S&P 500 Index</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">Underlying Index</div>
                                            <div className="val">S&P 500 Index</div>
                                        </div>



                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="inner-header bottom-border">
                                        <h3>GROWTH: </h3>
                                    </div>
                                    <div className="modal-listin-data">
                                        <div className="list-data-box">
                                            <div className="key">1-Year Return</div>
                                            <div className="val">-9.18%</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">1-Year Return</div>
                                            <div className="val">-9.18%</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">1-Year Return</div>
                                            <div className="val">-9.18%</div>
                                        </div>




                                    </div>
                                </div>
                            </div>

                        </div>

                        <div>
                            <div className="inner-header bottom-border">
                                <div className="slide-hader">
                                    <h3>Investment Information</h3>
                                    <button className="btn btn-outline">Full Profile</button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="modal-listin-data">
                                        <div className="list-data-box">
                                            <div className="key">60-Month Beta</div>
                                            <div className="val">1.00</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">60-Month Beta</div>
                                            <div className="val">1.00</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">60-Month Beta</div>
                                            <div className="val">1.00</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">60-Month Beta</div>
                                            <div className="val">1.00</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">60-Month Beta</div>
                                            <div className="val">1.00</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">60-Month Beta</div>
                                            <div className="val">1.00</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">60-Month Beta</div>
                                            <div className="val">1.00</div>
                                        </div>



                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="modal-listin-data">
                                        <div className="list-data-box">
                                            <div className="key">Management Fee</div>
                                            <div className="val">0.09%</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">Management Fee</div>
                                            <div className="val">0.09%</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">Management Fee</div>
                                            <div className="val">0.09%</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">Management Fee</div>
                                            <div className="val">0.09%</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">Management Fee</div>
                                            <div className="val">0.09%</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">Management Fee</div>
                                            <div className="val">0.09%</div>
                                        </div>
                                        <div className="list-data-box">
                                            <div className="key">Management Fee</div>
                                            <div className="val">0.09%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div>
                            <div>
                                <div className="inner-header">
                                    <div className="slide-hader">
                                        <h3>Profile</h3>
                                        <button className="btn btn-outline">Full Report</button>
                                    </div>
                                </div>


                                <div className="modal-news-data">
                                    <div className="news-box">
                                        <div className="inner-header bottom-border">
                                            <h3>DESCRIPTION:</h3>
                                        </div>
                                        <p>Sector: ETFs - Large Cap</p>
                                        <p>The SPDR SP 500 ETF Trust seeks to provide investment results that,
                                            before expenses, correspond generally to the price and yield performance of the SP 500 Index.</p>
                                    </div>



                                </div>
                            </div>
                        </div>


                    </Slider>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )

}

export default ModalComponent;