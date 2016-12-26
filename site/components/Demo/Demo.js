import React, { Component } from 'react'
import toReactComponent     from 'jsonml-to-react-component'
import { Icon }             from 'react-fa'
import classname            from 'classnames'
import classes              from './Demo.scss'

export default class Demo extends Component {

    constructor (props){
       super(props) 

       this.state = {
         expand : false
       }
    }

    handleClickArrow = (e) => {
        e.stopPropagation()
        this.setState({expand : !this.state.expand})
    }

    handleClickBox = (e) => {
        const { onClick } = this.props

        if('function' === typeof onClick){
            onClick()
        }
    }

    render (){
        const { meta, pathname, intro, highlightedCode, preview, active } = this.props
        const { expand } = this.state

        const highlightClass = classname({
            'highlight-wrapper' : true,
            'highlight-wrapper-expand' :  expand
        })

        const codeBoxClass = classname({
            'code-box' : true,
            'code-box-target' : active,
            'expand' : expand
        })

        const arrowClass = classname({
            [classes.arrow] : true,
            [classes.arrow_expand] : expand
        })

        return (
            <section className={codeBoxClass} onClick={this.handleClickBox}>
                <section className="code-box-meta markdown">
                    <div className="code-box-title">{meta.title}</div>
                    {
                        toReactComponent(['div'].concat(intro))
                    }
                    <Icon name="chevron-down" className={arrowClass} onClick={this.handleClickArrow} />
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
