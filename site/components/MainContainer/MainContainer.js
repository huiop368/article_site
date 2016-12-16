import React, { Component } from 'react'
import classes              from './MainContainer.scss'

export default class MainContainer extends Component {

    componentDidMount (){
        const { menuItems } = this.props
        
        console.log(menuItems)
    }

    render (){
        return (
            <div className={classes.main_container}>
                <div className={classes.sider_bar}>
                    siderBar
                </div>

                <div className={classes.container}>
                    { this.props.children }
                </div>
            </div>        
        )
    }
}
