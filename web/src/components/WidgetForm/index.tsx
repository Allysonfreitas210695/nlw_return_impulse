import { CloseButton } from '../CloseButton'
import bugImage from '../../assets/bug.svg'
import ideiaImage from '../../assets/ideia.svg'
import otherImage from '../../assets/other.svg'
import { useState } from 'react'
import { FeedbackTypeStep } from './staps/FeedbackTypeStep'
import { FeedbackContentStep } from './staps/FeedbackContentStep'
import { FeedbackSucessntStep } from './staps/FeedbackSucessType'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImage,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideiaImage,
      alt: 'Imagem de um Lampada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: otherImage,
      alt: 'Imagem de um nuvens'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedback, setFeedback] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartback() {
    setFeedbackSent(false);
    setFeedback(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSucessntStep  onFeedbackRestartRequested={handleRestartback}
        />
      ) : (
        <>
          {!feedback ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedback} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedback}
              onFeedbackRestartRequested={handleRestartback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{' '}
        <a
          className="underline underline-offset-2"
          href="https://rockeseat.com.br"
          target="_blank"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  )
}
