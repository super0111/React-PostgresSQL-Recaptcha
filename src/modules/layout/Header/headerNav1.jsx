import React from 'react';
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { useRouter } from 'next/router'
 
const HeaderNav1= (props) => {
  const router = useRouter()
  const {state, setState} = props

    return (
      <div className="d-flex flex-row justify-content-between align-items-center header-nav">
        <div className='d-flex flex-row justify-content-between align-items-center nav-title'>
          <div
            onClick={() => setState('basics')}
            className={ state === 'basics' ? "headerNav active" : "headerNav" }
          >
            Basics
          </div>
          <div
            onClick={() => setState('update')}
            className={ state === 'update' ? "headerNav active" : "headerNav" }
          >
              Updates
          </div>
          <div
            onClick={() => setState('pricing')}
            className={ state === 'pricing' ? "headerNav active" : "headerNav" }
          >
            Pricing
          </div>
        </div>
        <div className='pricing-action-btn'>
          <div onClick={() => router.back()} className='d-flex flex-row align-items-center back'>
            <AiOutlineLeft fontSize={18} color={"black"}/>
            <span>Back</span>
          </div>
          <div className='d-flex flex-row align-items-center next mr-2'>
            <span>Next</span>
            <AiOutlineRight fontSize={18} color={"black"}/>
          </div>
        </div>
      </div>
    );
}
export default HeaderNav1
