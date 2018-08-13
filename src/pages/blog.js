import React from 'react'
import {Redirect} from 'react-router-dom'

export default class testing extends React.Component{
    render(){
        return(
            <div>
                <div style={{height:"200px"}}/>
                {
                    (this.props.location.pathname == '/blog' || this.props.location.pathname == '/blog/')? <div>Blog</div> : ""
                }
                {
                    (this.props.location.pathname == "/blog/now" || this.props.location.pathname == '/blog/now/') ? <div>Now Now</div> :""
                }
                {
                    (this.props.location.pathname != '/blog' && this.props.location.pathname != '/blog/now') ? <Redirect to='/404' /> : ""
                }
                
                </div>
        )
    }
}