import { prisma } from "../../prisma";
import { FeedbackCreateDate, FeedbackRepository } from "../feedbacks-repository";


export class PrismaFeedbackRepository implements FeedbackRepository{
  async create({ type, commet, screenshot }: FeedbackCreateDate){
    await prisma.feedback.create({
      data: {
        type,
        commet,
        screenshot
      }
    })
  }
}