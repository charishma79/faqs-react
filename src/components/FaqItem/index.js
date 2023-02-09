// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {show: false}

  onClickShowAnswer = () => {
    const {show} = this.state
    this.setState({show: !show})
  }

  render() {
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    console.log(questionText)
    const {show} = this.state
    return (
      <li className="faqs-list">
        <div className="faq-item">
          <h1 className="question-text">{questionText}</h1>
          <button
            className="btn"
            type="button"
            onClick={this.onClickShowAnswer}
          >
            {show ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                className="icon"
                alt="minus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                className="icon"
                alt="plus"
              />
            )}
          </button>
        </div>

        {show && (
          <div className="faq-answer">
            <hr className="seperator" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
