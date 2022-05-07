import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const crateFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: crateFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('submit feedback', () => {
  it('shiould be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      commet: 'Merda consegui!',
      screenshot: 'data:image/png;base64,iVBORw0KGgoAAAANSU'
    })).resolves.not.toThrow();

    expect(crateFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('shiould not be able to submit feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      commet: 'Merda consegui!',
      screenshot: 'data:image/png;base64,iVBORw0KGgoAAAANSU'
    })).rejects.toThrow();
  });

  it('shiould not be able to submit feedback without commet', async () => {
    await expect(submitFeedback.execute({
      type: 'Bug',
      commet: '',
      screenshot: 'data:image/png;base64,iVBORw0KGgoAAAANSU'
    })).rejects.toThrow();
  });

  it('shiould not be able to submit feedback without is invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'Bug',
      commet: 'Tudo bugado',
      screenshot: '123'
    })).rejects.toThrow();
  });
})