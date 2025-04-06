'use client';

import axios from 'axios';

// Define the base types for Groq API responses
interface GroqMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface GroqResponse {
  id: string;
  model: string;
  object: string;
  created: number;
  choices: {
    index: number;
    message: GroqMessage;
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

class GroqApi {
  private apiKey: string;
  private baseUrl: string;
  private defaultModel: string;

  constructor() {
    // Using the provided API key
    this.apiKey = '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';
    this.baseUrl = 'https://api.groq.com/openai/v1';
    this.defaultModel = 'llama3-70b-8192';
  }

  // Process text input with Groq API
  async processText(messages: GroqMessage[], model = this.defaultModel): Promise<string> {
    try {
      const response = await axios.post<GroqResponse>(
        `${this.baseUrl}/chat/completions`,
        {
          model,
          messages,
          temperature: 0.7,
          max_tokens: 2048,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`,
          },
        }
      );

      return response.data.choices[0]?.message.content || '';
    } catch (error: any) {
      console.error('Error calling Groq API:', error.response?.data || error.message);
      throw new Error('Failed to get response from Groq: ' + (error.response?.data?.error?.message || error.message));
    }
  }

  // Process audio by first converting to text using an audio transcription service
  // then processing the transcribed text with Groq
  async processAudio(audioBlob: Blob, userLanguage = 'en'): Promise<string> {
    try {
      // In a real implementation, you would upload the audio to a transcription service
      // like Whisper API, then pass the transcribed text to Groq
      // This is a simplified example
      
      // Mock transcription for demo purposes
      const mockTranscription = "This is a mock transcription of audio input.";
      
      // Process the transcribed text with Groq
      const messages: GroqMessage[] = [
        { role: 'system', content: `You are a helpful AI assistant that responds in ${userLanguage}.` },
        { role: 'user', content: mockTranscription }
      ];
      
      return await this.processText(messages);
    } catch (error: any) {
      console.error('Error processing audio:', error);
      throw new Error('Failed to process audio: ' + error.message);
    }
  }

  // Process image input by extracting text/information from the image
  // then processing with Groq
  async processImage(imageFile: File, userPrompt = '', userLanguage = 'en'): Promise<string> {
    try {
      // In a real implementation, you would use a vision model to analyze the image
      // and extract text or information from it
      // This is a simplified example
      
      // Mock image description for demo purposes
      const mockImageDescription = "This is a mock description of the image content.";
      
      // Combine the image description with any user prompt
      const combinedPrompt = userPrompt 
        ? `${userPrompt}\n\nImage content: ${mockImageDescription}`
        : `Describe this image: ${mockImageDescription}`;
      
      // Process with Groq
      const messages: GroqMessage[] = [
        { role: 'system', content: `You are a helpful AI assistant that responds in ${userLanguage}.` },
        { role: 'user', content: combinedPrompt }
      ];
      
      return await this.processText(messages);
    } catch (error: any) {
      console.error('Error processing image:', error);
      throw new Error('Failed to process image: ' + error.message);
    }
  }
}

// Export a singleton instance
const groqApi = new GroqApi();
export default groqApi; 