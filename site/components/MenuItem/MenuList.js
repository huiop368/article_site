import React, {Component}   from 'react'
import MenuItem             from './MenuItem'             

export default class MenuList extends Component {

    get topLevelMenu(){
        const { itemObj } = this.props
        const ret = itemObj.topLevel.topLevel

        return <MenuItem items={ret} />
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
                    <MenuItem key={i} items={val} title={type} submenu />
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
