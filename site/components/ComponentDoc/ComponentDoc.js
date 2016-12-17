import React, { Component } from 'react'
import toReactComponent     from 'jsonml-to-react-component'
import classes              from './ComponentDoc.scss'

export default class ComponentDoc extends Component {

    componentDidMount (){
        
    }

    render (){
        const { doc : { meta, description, intro, api } } = this.props

        return (
            <article>
                <section className={classes.markdown}>
                    <h1 className={classes.section_title}>
                        {meta.chinese || meta.english}
                    </h1>
                    {
                     toReactComponent(['section', { className: 'markdown' }].concat(description))
                    }

                    <section className={classes.demo_title_area}>
                        <h2 className={classes.demo_title}>代码演示</h2>
                    </section>
                </section>

                <div className="clearfix" style={{ paddingRight: 380 }}>
                    <div className={classes.demo_code_area}>
                        Demo Code
                    </div>

                    <div className={classes.demo_preview_area}>  
                        Preview
                    </div>
                </div>

                {
                  toReactComponent(['section', {
                    //id: 'api',
                    className: 'markdown api-area',
                  }].concat(api || [])
                  )
                }
            </article>        
        )
    }
}
