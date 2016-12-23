import React from 'react'
import classes from './Footer.scss'

export const Footer = ({}) => (
    <div className={classes.footer}>
        <p className={classes.left}>
            <a target="_blank" href="http://gitlab.alibaba-inc.com/mcn/bd-mobile/issues">反馈及建议</a>
            <a target="_blank" href="http://www.atatech.org/groups/1950">团队博客</a>
            <a href="#">联系我们</a>
        </p>

        <p className={classes.right}>Copyright @ 2016 CNUX</p>
    </div>
)

export default Footer
