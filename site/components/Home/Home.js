import React, {Component}   from 'react'
import classes              from './Home.scss'

export default class Home extends Component {

    render (){
        return (
            <div className={classes.home_container}>
                <h1>Welcome, Its your home page</h1>
            </div>                 
        )
    }
}
