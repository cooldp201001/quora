// QuestionForm.js
import React, { useState } from 'react';

const QuestionForm = ({ onClose, onSubmit }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(question);
    onClose();
  };

  return (
    <div className="question-form">
      <h2>Add a Question</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default QuestionForm;
