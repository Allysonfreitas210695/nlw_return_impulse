export interface FeedbackCreateDate{
  type: string;
  commet: string;
  screenshot?: string;
}

export interface FeedbackRepository{
  create: ( data: FeedbackCreateDate ) => Promise<void>;
}