import React, {Component} from 'react'
import { IndexLink, Link } from 'react-router'
import classnames           from 'classnames'
import classes from './Searchbox.scss'

import searchList from '_data/search-list'

export default class Searchbox extends Component {

    constructor (props){
        super(props)

        this.state = {
            val : '',
            focused : false,
            items : searchList
        }
    }

    handleFocus = () => {
        this.setState({
            focused : true
        })
    }

    handleBlur = () => {
        this.setState({
            focused : false,
            val : '',
            items : searchList
        })
    }

    handleChange = (e) => {
        const value = e.target.value
        const regx = new RegExp(value, 'i')

        const ret = searchList.filter(md => regx.test(md.meta.english) || regx.test(md.meta.chinese))

        this.setState({
            val : value,
            items : ret
        })
    }

    normalize (fileName){
        const bIndexFile = /index\.md/.test(fileName)
        const sign = bIndexFile ? '/' : '.md'

        return fileName.slice(0, fileName.lastIndexOf(sign))
    }
    
    render (){
        const { focused, items, val } = this.state
        const resultClass = classnames({
            [classes.search_result] : true,
            [classes.search_result_display] : focused
        })

        return (
            <div className={classes.search_box}>
                <input type="text" placeholder="搜索..."
                 value={val}
                 onChange={this.handleChange}
                 onFocus={this.handleFocus}
                 onBlur={this.handleBlur} />

                <div className={resultClass}>
                    <ul className={classes.search_list}>
                        {
                            items.map((md, i) => { 
                                return <li className={classes.search_list_item} key={i}>
                                    <Link to={`/${this.normalize(md.meta.fileName)}`} className={classes.search_list_link}>
                                        <strong>{md.meta.english || 'no english meta'}</strong>
                                        <span className={classes.search_list_item_chinese}>{md.meta.chinese || 'no chinese meta'}</span>
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>        
        )
    }
}
