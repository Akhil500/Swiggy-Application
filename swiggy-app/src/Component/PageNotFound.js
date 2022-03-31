import React, { Component } from 'react'
import pg from '../Css/pagenotfound.module.css'


class PageNotFound extends Component {
  render() {
    return (
        <>
          <div className={pg.divhead}>
            <div className={pg.pagenotfounddiv}>
                <p className={pg.pagenotfound}> OOPS!........</p>
                <p className={pg.pagenotfound}>Page Not Found....</p>
            </div>
         </div>
         </>
    )
  }
}

export default PageNotFound;
