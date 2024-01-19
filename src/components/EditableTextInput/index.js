import './index.css'

import {Component} from 'react'

class EditableTextInput extends Component {
  state = {
    textInput: '',
    text: '',
    isSaved: false,
  }

  onSave = () => {
    const {textInput, isSaved} = this.state

    this.setState({
      text: textInput,
      isSaved: !isSaved,
    })
  }

  onEdit = () => {
    this.setState({
      isSaved: false,
    })
  }

  onChangeInput = event => {
    this.setState({
      textInput: event.target.value,
    })
  }

  render() {
    const {textInput, isSaved, text} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="main-heading">Editable Text Input</h1>
          <div className="input-container">
            {isSaved ? (
              <>
                <p className="saved-text">{text}</p>
                <button type="button" className="button" onClick={this.onEdit}>
                  edit
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  className="input-field"
                  value={textInput}
                  onChange={this.onChangeInput}
                />
                <button type="button" className="button" onClick={this.onSave}>
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditableTextInput
