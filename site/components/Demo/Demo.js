import React, { Component } from 'react'
import toReactComponent     from 'jsonml-to-react-component'
import classname            from 'classnames'
import classes              from './Demo.scss'

export default class Demo extends Component {

    constructor (props){
       super(props) 
    }

    render (){
        const { meta, pathname, intro, highlightedCode } = this.props

        const highlightClass = classname({
            'highlight-wrapper' : true,
            'highlight-wrapper-extend' : false 
        })
        
        return (
            <section className="code-box">
                <section className="code-box-meta markdown">
                    <div className="code-box-title">{meta.title}</div>
                    {
                        toReactComponent(['div'].concat(intro))
                    }
                </section>

                <section className={highlightClass}>
                    <div className="highlight">
                         <pre>
                            <code className="javascript" dangerouslySetInnerHTML={{
                                __html: highlightedCode,
                            }} />
                        </pre>
                    </div>
                </section>
            </section>        
        )   
    }
}
