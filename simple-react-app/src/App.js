import React, { useState } from 'react';
import FlashcardList from './components/FlashcardList';


function App() {

  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <FlashcardList flashcards={flashcards} />
  );
}



const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 2 + 2?",
    answer: "4",
    options: [
      "2",
      "3",
      "4",
      "5"
    ]
  },
  {
    id: 1,
    question: "Question 2",
    answer: "Answer",
    options: [
      "Answer",
      "Answer1",
      "Answer2",
      "Answer3"
    ]
  }
]

export default App;
