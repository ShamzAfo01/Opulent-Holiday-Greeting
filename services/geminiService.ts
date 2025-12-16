import { GoogleGenAI } from "@google/genai";
import { GreetingRequest } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateHolidayGreeting = async (request: GreetingRequest): Promise<string> => {
  try {
    const prompt = `
      Write a short, ${request.tone} holiday greeting card message from a company named "${request.companyName}" to "${request.recipientName}".
      The message should be elegant, concise (under 50 words), and suitable for a high-end luxury brand.
      Focus on themes of warmth, prosperity, and gratitude. 
      Do not include any markdown formatting, just plain text.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster simple text generation
      }
    });

    return response.text || "Season's Greetings and best wishes for the New Year.";
  } catch (error) {
    console.error("Error generating greeting:", error);
    return "Wishing you peace, joy, and prosperity throughout the coming year. Thank you for your continued partnership.";
  }
};
