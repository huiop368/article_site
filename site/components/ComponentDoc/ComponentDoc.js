import React, { Component } from 'react'
import toReactComponent     from 'jsonml-to-react-component'
import classes              from './ComponentDoc.scss'

export default class ComponentDoc extends Component {

    componentDidMount (){
        
    }

    render (){
        const { doc : { description } } = this.props

        return (
            <div>
               {
                    toReactComponent(['section', { className: 'markdown' }].concat(description))
               }
            </div>        
        )
    }
}
