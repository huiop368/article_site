import React, { Component } from 'react'
import toReactComponent     from 'jsonml-to-react-component'
import demosData            from '_data/demos-list'
import Demo                 from 'components/Demo'
import classes              from './ComponentDoc.scss'

export default class ComponentDoc extends Component {

    constructor (props){
        super(props)

        this.state = {
            currentIndex : 0
        }
    }

    componentDidMount (){
        
    }

    handleClickDemo = (i, e) => {
        this.setState({
            currentIndex : i
        })
    }

    render (){
        const { doc : { meta, description, intro, api } } = this.props
        const { currentIndex } = this.state
        const demos = (demosData[meta.fileName] || []).filter(demo => !demo.meta.hidden)
        const demoSort = demos.sort((a, b) => parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10) )

        return (
            <article>
                <section className="markdown">
                    <h1 className="section-title">
                        {meta.chinese || meta.english}
                    </h1>
                    {
                     toReactComponent(['section', { className: 'markdown' }].concat(description))
                    }

                    <section className="demo-title-wrapper">
                        <h2 className="demo-title">代码演示</h2>
                    </section>
                </section>

                <div className="clearfix" style={{ paddingRight: 380 }}>
                    <div className={classes.demo_code}>
                        {
                            demoSort.map((data, i) =>
                                <Demo key={i} {...data} pathname={location.pathname} onClick={e => this.handleClickDemo(i, e)} active={currentIndex === i} />
                            )
                        }
                    </div>

                    <div className={classes.demo_preview}>  
                        <div className={classes.demo_preview_wrapper}>
                            <div className={classes.demo_preview_header}>
                                <img width="290px" src="https://os.alipayobjects.com/rmsportal/VfVHYcSUxreetec.png" style={{'margin': '0px 2px'}} />
                            </div>
                            
                            <div className={classes.demo_preview_scroller}>
                                <iframe id="demoFrame" name="demoFrame" style={{width: '318px', height: '548px'}}></iframe>
                            </div>
                        </div>
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
