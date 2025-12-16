import { GoogleGenerativeAI } from "@google/genai";
import { GreetingRequest } from "../types";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

export const generateHolidayGreeting = async (request: GreetingRequest): Promise<string> => {
  try {
    const prompt = `
      Write a short, ${request.tone} holiday greeting card message from a company named "${request.companyName}" to "${request.recipientName}".
      The message should be elegant, concise (under 50 words), and suitable for a high-end luxury brand.
      Focus on themes of warmth, prosperity, and gratitude. 
      Do not include any markdown formatting, just plain text.
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text || "Season's Greetings and best wishes for the New Year.";
  } catch (error) {
    console.error("Error generating greeting:", error);
    return "Wishing you peace, joy, and prosperity throughout the coming year. Thank you for your continued partnership.";
  }
};
