import React, { useState } from 'react';

const HeaderNav= (props) => {
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
      <div className='d-flex flex-row justify-content-between align-items-center action-btn'>
        <div className='d-flex flex-row align-items-center' style={{cursor:"pointer"}}>
          <img className='preview-icon' src="/imgs/preview.png" />
          <div className='d-flex flex-row align-items-center preview-text'>Preview</div>
        </div>
        <button type="button" className="btn btn-default header-btn" >Save Changes</button>
        <button type="button" className="btn btn-primary header-btn">Launch/submit Page</button>
      </div>
    </div>
  );
}
export default HeaderNav
