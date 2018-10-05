import React from 'react'

class PublicLayout extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default PublicLayout
