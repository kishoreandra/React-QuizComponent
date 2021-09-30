import React,{Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component{
    handleClick (buttonText) {
        if(buttonText === this.props.quiz_question.answer){
            this.props.showNextQuestionHandler()
        }
    }
    render(){
        
        return(
            <main>
        <section>
        <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="but tons">
          <ul>
            {
                this.props.quiz_question.answer_options.map((answer_option ,index)=> {
                    return <QuizQuestionButton clickHandler={this.handleClick.bind(this)} button_text={answer_option} key={index} />
                })
            }
          </ul>
        </section>
      </main>
        )
    }
}

export default QuizQuestion;