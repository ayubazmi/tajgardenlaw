
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `You are the AI Event Planner for "Taj Garden Lawns & Banquet" located in Sangamner, Maharashtra. 
        Your goal is to help potential clients plan their events at this venue.
        Venue Highlights:
        - Sprawling green lawns (50k sq. ft)
        - AC Banquet Hall (500-800 capacity)
        - Ample Parking
        - Luxury Bride/Groom Suites
        - Located in Sangamner
        
        Style: Professional, helpful, welcoming, and elegant.
        Keep answers concise and focus on how Taj Garden Lawns can accommodate the user's request.
        If users ask about pricing, suggest they contact management directly via the contact form or phone number (+91 99999 00000).`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please call us at +91 99999 00000 for immediate assistance.";
  }
};
