import React from 'react'
import Header from 'components/Header'
import classes from './Layout.scss'

import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className={classes.container}>
    <Header />
    <div className={classes.core_layout__viewport}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
