import React, {Component} from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './MenuItem.scss'

export default class MenuItem extends Component {

    get topLevelMenu(){
        const { itemObj } = this.props
        const ret = itemObj.topLevel.topLevel

        return (
            <div>
                <ul className={classes.menu_list}>
                    {
                        ret.map((item, i) => {
                            const path = item.fileName.slice(0, item.fileName.lastIndexOf('/'))
                            return <li key={i}><Link to={`/${path}`} activeClassName={classes.active_link}>{item.english} {item.chinese || ''}</Link></li>
                        })
                    }
                </ul>
            </div>        
        )
    }

    get othersMenu (){
        const { itemObj } = this.props
        let keys = Object.keys(itemObj)
        keys.splice(keys.indexOf('topLevel'), 1)

        let ret = []

        keys.forEach( key => {
            const obj = itemObj[key]
            const arr = Object.keys(obj)

            arr.map( (type, i) => {
                const val = obj[type]

                ret.push(
                    <div key={i} className={classes.menu_sub_wrapper}>
                        <h3>{type}</h3>
                        <ul className={classes.menu_list}>
                            {
                                val.map((item, i) => {
                                    const path = item.fileName.slice(0, item.fileName.lastIndexOf('/'))
                                    return <li key={i}><Link to={`/${path}`} activeClassName={classes.active_link}>{item.english} {item.chinese || ''}</Link></li>
                                })
                            }
                        </ul>
                    </div>
                )
            })
        })
        

        return <div>{ret}</div>
    }
    
    render (){
        return (
            <div>
                {this.topLevelMenu}
                {this.othersMenu}
            </div>
        )
    }
}
