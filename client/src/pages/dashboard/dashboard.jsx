import React from "react";
import { useParams} from "react-router-dom";
import MenuComponent from "../../components/Menu/Menu";
import FooterComponent from "../../components/Footer/Footer";
import SideBarComponent from "../../components/SideBar/SideBar";
import TableComponent from "../../components/Table/Table";
import PageTitle from "../../components/PageTitle/PageTitle";
import Logo from '../../assets/images/logo.png';

const Dashboard = ({name}) => {

    const params = useParams();
    let titleComponent;
    let tableComponent = <>No Table</>;
    if(params.optiontype === "highvolume") {
        titleComponent = (
            <PageTitle title="High Volume Options" 
                subtitle="Options with the highest volume." 
            />
        );
    } else if (params.optiontype === "mostactive") {
        titleComponent = (
            <PageTitle title="Most Active Symbols" 
                subtitle="Stocks, ETFs and Indices with the most option volume." 
            />
        );
    } else if (params.optiontype) {

    } else {
        titleComponent = (
            <PageTitle title="Most Active Stock Options"
                subtitle="Shows Stocks, ETFs and Indices with the most option activity on the day, with IV Rank and Put/Call ratio."
            />
        );
    }

    if(params.optiontype) {
        tableComponent = <TableComponent option={params.optiontype}/>;
    } else {
        tableComponent = <TableComponent />;
    }
 
    return (
        <>
            <MenuComponent />
            <div className="container">
                <div className="main-container mt-4">
                    <SideBarComponent />
                    <div className="main__containe__inner">
                        {titleComponent}
                        {tableComponent}

                        <div className="pre-wrapper">
                            <div className="prem-left-wrapper">
                                <div className="prem-logo">
                                    <img src={Logo} alt="" />
                                </div>
                                <p>
                                    <strong>DnChart Premier Members</strong>
                                    can view ALL results, and set custom filters to screen for more
                                    data including advanced strategies for Covered Calls, Naked Puts and Option
                                    Spreads, based on 100s of criteria. <a href="">Sign up for a risk-free 30-day trial today</a>.</p>
                            </div>
                            <div className="prem-right-wrapper">
                                <button className="btn btn-unlock">
                                    Unlock the Entire List
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <FooterComponent />
        </>
    )
}

export default Dashboard