import React from 'react'
import FlashcardList from './FlashcardList'

export default function Flashcard({flashcard}) {
  return (
    <div>
        {flashcard.question}
    </div>
  )
}
