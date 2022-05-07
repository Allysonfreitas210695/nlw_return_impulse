import { CloseButton } from '../../CloseButton'
import emojiImage from '../../../assets/emoji.svg'


interface FeedbackSucessntStepProps {
  onFeedbackRestartRequested: () => void;
}


export function FeedbackSucessntStep({ onFeedbackRestartRequested }: FeedbackSucessntStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={emojiImage} alt="Emoji de sucesso" />

        <span className="text-xl my-2">Agradecemos o feedback</span>

        <button
          type="button"
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:border-brand-500 focus:ring-brand-500 focus:ring-1"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}
