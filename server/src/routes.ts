import express from 'express'
import { NodemailerAdapter } from './adapters/nodemailer/nodemailer-mail-adapter'
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedback-repositories'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case'

export const routes = express.Router()



routes.post('/feedbacks', async (req, res) => {
  const { type, commet, screenshot } = req.body;

  try{
    const nodemailerAdapter = new NodemailerAdapter();

    const prismaFeedbacksRepository = new PrismaFeedbackRepository();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbacksRepository, 
      nodemailerAdapter
    );
  
    await submitFeedbackUseCase.execute({
      type,
      commet,
      screenshot
    });
  
  
    res.status(201).send();
  }catch (err) {
    console.log(err);
    res.status(500).send();
  }
  
})
