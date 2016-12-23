import React, {Component} from 'react'
import { IndexLink, Link } from 'react-router'
import classnames           from 'classnames'
import classes from './Header.scss'

export default class Header extends Component {
    
    render (){
        const { location : {pathname} } = this.props

        const reactClass = classnames({
            [classes.nav_item_active] : /docs\/(components|react)/.test(pathname)
        })

        const designClass = classnames({
            [classes.nav_item_active] : /docs\/design/.test(pathname)
        })

        return (
            <div className={classes.header}>
                <div className={classes.logo}>
                    <h1>Logo</h1>
                </div>
                <div>
                    <div className={classes.search_box}></div>
                    <ul className={classes.nav_bar}>
                        <li className={classes.nav_item}>
                            <IndexLink to='/' activeClassName={classes.nav_item_active}>
                              Home
                            </IndexLink>        
                        </li>
                        <li className={classes.nav_item}>
                            <Link to='/docs/react/introduce' className={reactClass}>Components</Link>
                        </li>
                        <li className={classes.nav_item}>
                            <Link to='/docs/design/color' className={designClass}>Design</Link>
                        </li>
                    </ul>
                    
                </div>
              </div>                  
        )
    }
}
