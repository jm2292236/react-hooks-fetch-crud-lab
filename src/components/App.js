import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
    const [page, setPage] = useState("List");

    // State for the questions does not live here because with this design when the user adds a question (QuestionForm) it does not need to
    // update the state because QuestionForm and QuestionList components are shown one or the other and what happens in QuestionForm
    // does not need to be known by QuestionList

    return (
        <main>
            <AdminNavBar onChangePage={setPage} />
            {page === "Form" ? <QuestionForm /> : <QuestionList />}
        </main>
    );
}

export default App;
