
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Bye extends Component {
  render () {
    return (
      <div className="container">
        <h3>bye {this.props.username}!</h3>
        <p><Link to="/hello">hello</Link></p>
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
  Bye
)
