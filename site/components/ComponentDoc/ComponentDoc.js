import React, { Component } from 'react'
import classes              from './ComponentDoc.scss'

export default class ComponentDoc extends Component {

    componentDidMount (){
        const { doc } = this.props
        
        //console.log(doc)
    }

    render (){
        return (
            <div>
               ComponentDoc 
            </div>        
        )
    }
}
