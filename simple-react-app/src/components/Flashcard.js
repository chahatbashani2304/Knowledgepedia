import React, { useState } from 'react'
import FlashcardList from './FlashcardList'

export default function Flashcard({flashcard}) {

    const [flip, setFlip] = useState(false)

  return (
    <div 
        classname={`card ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
    >
        <div classname="front">
            {flashcard.question}
            <div classname="flashcard-options">
                {flashcard.options.map(option => {
                    return <div className="flashcard-option">{option}</div>
                })}
            </div>
        </div>
        <div className="back">{flashcard.answer}</div>
    </div>
  )
}
