import {component} from 'react'

class LogIN extends Comment {
  state = {username: '', password: ''}

  render() {
    return (
      <form>
        <lable for="username">username</lable>
        <input id="username" value={this.username}>
          UserName
        </input>
        <lable for="password">Password</lable>
        <input id="password" value={this.password}>
          password
        </input>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
