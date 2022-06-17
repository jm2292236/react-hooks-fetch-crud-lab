import React, {useState, useEffect} from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
    const [page, setPage] = useState("List");
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/questions")
        .then(response => response.json())
        .then(data => setQuestions(data))
    }, []);



    function handleAddQuestion(addedQuestion) {
        setQuestions([...questions, addedQuestion]);
    }


    function handleDeleteQuestion(questionId) {
        const remainingQuestions = questions.filter(question => question.id !== questionId)
        setQuestions(remainingQuestions);
    }



    return (
        <main>
            <AdminNavBar onChangePage={setPage} />
            {page === "Form" ? 
                <QuestionForm onAddQuestion={handleAddQuestion}/> 
            : 
                <QuestionList questions={questions} onDeleteQuestion={handleDeleteQuestion} />
            }
        </main>
    );
}

export default App;
