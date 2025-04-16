import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Define the expected request body structure
interface ChatRequest {
  messages: {
    role: 'system' | 'user' | 'assistant';
    content: string;
  }[];
  language?: string;
  model?: string;
}

// Hard-coded API key for this example
const GROQ_API_KEY = '';

// Validate the request body
function isValidRequest(body: any): body is ChatRequest {
  return (
    body &&
    Array.isArray(body.messages) &&
    body.messages.every(
      (msg: any) =>
        typeof msg === 'object' &&
        ['system', 'user', 'assistant'].includes(msg.role) &&
        typeof msg.content === 'string'
    )
  );
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the request
    if (!isValidRequest(body)) {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const { messages, language = 'en', model = 'llama-3.3-70b-versatile' } = body;

    // Use our hard-coded API key
    const apiKey = GROQ_API_KEY;

    // Check if there are image-related messages
    const hasImageContent = messages.some(msg => 
      msg.role === 'user' && 
      msg.content.includes("I've attached an image of my homework assignment")
    );

    // Prepare system message with language preference and image handling abilities if needed
    if (!messages.some(msg => msg.role === 'system')) {
      let systemContent = `You are a helpful, educational AI assistant. Please respond in ${language}.`;
      
      if (hasImageContent) {
        systemContent += `
You have been given a description of an image containing a homework assignment or problem. 
Even though you can't see the actual image, please:
1. Acknowledge that you understand an image was shared
2. Respond as if you can understand the type of homework problem based on the description
3. Provide general guidance for solving this type of problem
4. Ask clarifying questions if more information is needed about the image content
5. Offer step-by-step assistance to help the student learn how to approach similar problems`;
      }
      
      messages.unshift({
        role: 'system',
        content: systemContent,
      });
    } else if (hasImageContent) {
      // If there's already a system message but now we're getting image content,
      // enhance the existing system message
      const systemIndex = messages.findIndex(msg => msg.role === 'system');
      if (systemIndex !== -1) {
        messages[systemIndex].content += `
Additionally, the user has shared an image of a homework problem. 
Please provide helpful guidance based on the description they provide about the image.`;
      }
    }

    // Call the Groq API
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model,
        messages,
        temperature: 0.7,
        max_tokens: 2048,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    // Return the response from Groq
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('Error calling Groq API:', error.response?.data || error.message);
    
    return NextResponse.json(
      {
        error: 'Failed to get response from Groq',
        details: error.response?.data?.error?.message || error.message,
      },
      { status: error.response?.status || 500 }
    );
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
} 
