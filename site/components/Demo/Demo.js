import React, { Component } from 'react'
import toReactComponent     from 'jsonml-to-react-component'
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
        this.setState({expand : !this.state.expand})
    }

    render (){
        const { meta, pathname, intro, highlightedCode, preview } = this.props
        const { expand } = this.state

        const highlightClass = classname({
            'highlight-wrapper' : true,
            'highlight-wrapper-expand' :  expand
        })

        const codeBoxClass = classname({
            'code-box' : true,
            'expand' : expand
        })

        return (
            <section className={codeBoxClass}>
                <section className="code-box-meta markdown">
                    <div className="code-box-title">{meta.title}</div>
                    {
                        toReactComponent(['div'].concat(intro))
                    }
                    <span className="bdicon bdicon-arrow" onClick={this.handleClickArrow}></span>
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

                {
                    //React.cloneElement(preview)
                }
            </section>        
        )   
    }
}
