
import React from "react"
import Menu from '../components/menu';

const Header = () => {
  return  (
      <div className="header">
        <Menu />
        <div className="text-div">
          <h1 className="m-auto banner-text"><span className="bracket">{`{`}</span>FRONTEND DEVELOPER<span className="bracket">{`}`}</span></h1>
        </div>

      </div>



    // <div className="row menu-header">
    //   <div className="col-12 align-self-center">
    //     <h1 className="m-auto banner-text"><span className="bracket">{`{`}</span>FRONTEND DEVELOPER<span className="bracket">{`}`}</span></h1>
    //   </div>
    // </div>
  )
}

export default Header;
