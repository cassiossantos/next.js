import { useState } from 'react'

import { ThumbsUp } from '../../../icons/thumbs/thumbs-up'
import { ThumbsDown } from '../../../icons/thumbs/thumbs-down'

export function ErrorFeedback({ errorCode }: { errorCode: string }) {
  const [voted, setVoted] = useState<'good' | 'bad' | null>(null)
  const hasVoted = voted !== null

  const handleFeedback = (value: 'good' | 'bad') => {
    console.log('errorCode:', errorCode)
    setVoted(value)
  }

  return (
    <div className="error-feedback">
      <p>Was this helpful?</p>
      <button
        onClick={() => handleFeedback('good')}
        disabled={hasVoted}
        className={`feedback-button ${voted === 'good' ? 'voted' : ''}`}
      >
        <ThumbsUp />
      </button>
      <button
        onClick={() => handleFeedback('bad')}
        disabled={hasVoted}
        className={`feedback-button ${voted === 'bad' ? 'voted' : ''}`}
      >
        <ThumbsDown />
      </button>
    </div>
  )
}
