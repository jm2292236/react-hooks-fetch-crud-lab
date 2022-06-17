import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/questions")
        .then(response => response.json())
        .then(data => setQuestions(data))
    }, []);


    function handleDeleteQuestion(questionId) {
        const remainingQuestions = questions.filter(question => question.id !== questionId)
        setQuestions(remainingQuestions);
    }


    return (
        <section>
            <h1>Quiz Questions</h1>
            <ul>
                {/* display QuestionItem components here after fetching */}
                {questions.map(question => 
                   <QuestionItem 
                        key={question.id} 
                        question={question} 
                        onDeleteQuestion={handleDeleteQuestion}
                    /> 
                )}
            </ul>
        </section>
    );
}

export default QuestionList;
