import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import classes from './Layout.scss'

import '../../styles/core.scss'

export const CoreLayout = ({ children, ...props }) => (
  <div className={classes.container}>
    <Header {...props} />
    <div className={classes.core_layout_viewport}>
      {children}
    </div>
    <Footer />
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
