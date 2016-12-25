import React, {Component}   from 'react'
import { Icon }             from 'react-fa'
import { IndexLink, Link }  from 'react-router'
import classnames            from 'classnames'
import classes              from './MenuItem.scss'

export default class MenuItem extends Component {

    constructor (props){
        super(props)

        this.state = {
            expand : true
        }
    }

    normalize (fileName){
        const bIndexFile = /index\.md/.test(fileName)
        const sign = bIndexFile ? '/' : '.md'

        return fileName.slice(0, fileName.lastIndexOf(sign))
    }

    handleClickTitle = (e) => {
        this.setState({expand : !this.state.expand})
    }
    
    render (){
        const { submenu, title, items } = this.props
        const { expand } = this.state

        const menuClass = classnames({
            [classes.menu_sub_wrapper] : submenu
        })

        const menuListClass = classnames({
            [classes.menu_list] : true,
            [classes.menu_list_expand] : expand
        })

        const arrowClass = classnames({
            [classes.arrow] : true,
            [classes.arrow_expand] : expand
        })

        return (
            <div className={menuClass}>
                {
                    title ? <h3 className={classes.title_area} onClick={this.handleClickTitle}>{ title } <Icon name="angle-down" className={arrowClass} /></h3> : null
                }
                <ul className={menuListClass}>
                    {
                        items.map((item, i) => {
                            const path = this.normalize(item.fileName)
                            return <li key={i}><Link to={`/${path}`} activeClassName={classes.active_link}>{item.english} {item.chinese || ''}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
