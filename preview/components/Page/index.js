import React, { Component } from 'react'
import demoObj              from '_data/demos-list'

export default class Page extends Component {
    
    render (){
        const { params : {component, index}} = this.props
        const key = `docs/components/${component}/index.md`
        const doc = demoObj[key][index]

        return (
            <div>
                {
                    React.cloneElement(doc.preview)
                }
            </div>        
        )
    }
}
