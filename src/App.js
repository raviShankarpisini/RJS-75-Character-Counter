import {Component} from 'react'
import {v4 as uuid} from 'uuid'

import './App.css'

// Replace your code here

const ResultView = props => {
  const {each} = props
  const {name, length} = each

  return (
    <li>
      <p>
        {name} : {length}
      </p>
    </li>
  )
}

class App extends Component {
  state = {
    input: '',
    list: [],
  }

  onClickButton = () => {
    const {input} = this.state
    const newListItem = {
      id: uuid(),
      name: input,
      length: input.length,
    }

    // input.length > 0 &&
    this.setState(prevState => ({
      input: '',
      list: [...prevState.list, newListItem],
    }))
  }

  onChangeInput = event => this.setState({input: event.target.value})

  render() {
    const {input, list} = this.state
    console.log(list)
    return (
      <div>
        <div className="left-container">
          <h1>Count the characters like a Boss...</h1>
          {list.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <ul>
              {list.map(each => (
                <ResultView each={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
        <div className="right-container">
          <h1>Character Counter</h1>
          <div>
            <form onSubmit={this.onClickButton}>
              <input
                type="text"
                onChange={this.onChangeInput}
                value={input}
                placeholder="Enter the Characters here"
              />
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
