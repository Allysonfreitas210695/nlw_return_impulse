import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbackRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest{
  type: string;
  commet: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
 
  constructor(
    private feedbacksRepository: FeedbackRepository,
    private mailAdapter: MailAdapter){
    this.feedbacksRepository = feedbacksRepository;
  }

  async execute(request: SubmitFeedbackUseCaseRequest){
    const { type, commet, screenshot } = request;

    if(!type){
      throw new Error("Type is required.");
      
    }

    if(!commet){
      throw new Error("commet is required.");
    }

   if(screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error("Invalid screenshot format");
      
    }

    this.feedbacksRepository.create({
      type,
      commet,
      screenshot
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo Feedback',
      body: [
        `<div style="font-family: monospace; font-size: 16px; color: #111;">`,
        `<p> Tipo do feedback: ${type}</p>`,
        `<p> Comentario do feedback: ${commet}</p>`,
        screenshot ? `<img src="${screenshot}" />` : ``,
        `</div>`
      ].join('\n')
    })

  }
}