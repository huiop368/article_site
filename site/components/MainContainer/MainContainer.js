import React, { Component } from 'react'
import MenuItem             from 'components/MenuItem'
import classes              from './MainContainer.scss'

export default class MainContainer extends Component {

    componentDidMount (){
        
    }

    render (){
        const { menuItems } = this.props

        return (
            <div className={classes.main_container}>
                <div className={classes.sider_bar}>
                    <MenuItem itemObj={menuItems} />
                </div>

                <div className={classes.container}>
                    { this.props.children }
                </div>
            </div>        
        )
    }
}
