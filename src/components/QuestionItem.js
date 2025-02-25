import React from "react";

function QuestionItem({ question, onDeleteQuestion }) {
    const { id, prompt, answers, correctIndex } = question;

    const options = answers.map((answer, index) => (
        <option key={index} value={index}>
        {answer}
        </option>
    ));


    function handleDeleteClick() {
        fetch(`http://localhost:4000/questions/${id}`, {
            method: "DELETE",
        })
        .then(response => response.json())
        .then(() => onDeleteQuestion(id));
    }

    // When the user changes the answer to the question it is not necessary to change questions state because
    // it is already showing the right value
    function handleOnChangeClick(event) {
        fetch(`http://localhost:4000/questions/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                correctIndex: parseInt(event.target.value)
            })
        })
    }


    return (
        <li>
            <h4>Question {id}</h4>
            <h5>Prompt: {prompt}</h5>
            <label>
                Correct Answer:
                <select defaultValue={correctIndex} onChange={handleOnChangeClick}>{options}</select>
            </label>
            <button onClick={handleDeleteClick}>Delete Question</button>
        </li>
    );
}

export default QuestionItem;
