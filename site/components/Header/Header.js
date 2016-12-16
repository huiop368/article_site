import React, {Component} from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export default class Header extends Component {
    
    render (){

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
                            <Link to='/docs/react' activeClassName={classes.nav_item_active}>Components</Link>
                        </li>
                        <li className={classes.nav_item}>
                            <Link to='/docs/design' activeClassName={classes.nav_item_active}>Design</Link>
                        </li>
                    </ul>
                    
                </div>
              </div>                  
        )
    }
}
