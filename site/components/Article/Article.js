import React, { Component } from 'react'
import toReactComponent     from 'jsonml-to-react-component'
import classes              from './Article.scss'

export default class Article extends Component {

    render (){
        const { content : { meta, description, intro } } = this.props

        return (
            <article className="markdown">
                <h1>
                  {meta.english} {meta.chinese}
                  {
                    !meta.subtitle ? null :
                      <span className="subtitle">{ meta.subtitle }</span>
                  }
                </h1>

                {
                  !intro ? null :
                    toReactComponent(['section', { className: 'markdown' }].concat(intro))
                }

                {
                    toReactComponent(['section', { className: 'markdown' }].concat(description))
                }
            </article>        
        )
    }
}
