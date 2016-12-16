import React, { Component } from 'react'
import toReactComponent     from 'jsonml-to-react-component'
import classes              from './Article.scss'

export default class Article extends Component {

    render (){
        const { content : { meta, description } } = this.props

        return (
            <div>
                {
                    toReactComponent(['section', { className: 'markdown' }].concat(description))
                }
            </div>        
        )
    }
}
