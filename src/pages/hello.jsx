
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Hello extends Component {
  render () {
    return (
      <div className="container">
        <h3>hello {this.props.username}!</h3>
        <p><Link to="/bye">bye</Link></p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  username: state.username
})

export default connect(
  mapStateToProps
)(
  Hello
)