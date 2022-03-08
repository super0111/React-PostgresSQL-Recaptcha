import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/router";

const HeaderTop = () => {
    const router = useRouter();

    const handleClick = (e, path) => {
        if (path === "/") {
          router.push("/");
        }
      };

    return (
        <React.Fragment>
            <div className="d-flex flex-row justify-content-between header-top">
                <div onClick={(e) => handleClick(e, "/")} className='cursorPointer d-flex flex-row align-items-center'>
                    <img className='logo-img' src="/imgs/logo.fig.png"/>
                    <div className='logo-text'>
                        Globashare
                    </div>
                </div>
                <div className='d-flex flex-row align-items-center'>
                    <div className='search-type'>
                        Search Type
                    </div>
                    <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input type="text" className="form-control" placeholder="Search"/>
                    </div>
                </div>
                <div className='header-icon'>
                    <img className='cursorPointer shop' src="/imgs/shop icon.png" />
                    <img  className='cursorPointer time' src="/imgs/Shape 652.png" />
                    <img className='cursorPointer new' src="/imgs/News fee.png" />
                    <img className='cursorPointer message' src='/imgs/Shape 46.png' />
                    <img className='cursorPointer notification' src='/imgs/Notifications.png' />
                    <img className='cursorPointer more' src='/imgs/Shape 655.png' />
                </div>
            </div>
        </React.Fragment>
    );
}
export default HeaderTop;