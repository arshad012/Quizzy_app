import { config } from 'dotenv'
import { GoogleGenAI } from '@google/genai';

import { Template } from "../models/index.js";
import { getQuestionListGenerationPrompt, questionListResponseSchema } from '../ai/index.js';

config()
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export const createAssesmentQuestions = async (assesment) => {

  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  const { template: templateObjectId } = assesment;

  const templateId = templateObjectId.toString();
  if (!templateId) return;

  const template = await Template.findById(templateId);
  if (!template) return;


  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-001',
      contents: getQuestionListGenerationPrompt(assesment, template),
      config: {
        responseMimeType: "application/json",
        responseSchema: questionListResponseSchema
      }
    });

    const questions = JSON.parse(response.text)
    return questions;

  } catch (error) {
    throw new Error('Failed to generate questions from AI', {
      cause: error
    })
  }

};
