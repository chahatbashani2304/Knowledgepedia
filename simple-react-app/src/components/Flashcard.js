import React, { useState } from 'react'
import FlashcardList from './FlashcardList'

export default function Flashcard({flashcard}) {

    const [flip, setFlip] = useState(false)

  return (
    <div onClick={() => setFlip(!flip)}>
        {flip ? flashcard.answer : flashcard.question}
    </div>
  )
}
