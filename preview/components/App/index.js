import React from 'react'

export const App = ({ children, ...props }) => (
  <div className='wrapper'>
      {children}
  </div>
)

App.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default App 
