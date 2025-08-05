export type ConversationStartData = {
    transport: 'voice' | 'text'         // How the conversation happens (Voice or Text)
    direction: 'inbound' | 'outbound'   // Who started the conversation (Customer or Business)
    from: string                        // Customer phone number
    to: string                          // Business phone number
    initialInput?: string               // Customer's first message or speech (optional)
    script?: string                     // AI's script if it's an outbound text (optional)
  }

export type ChatSession = {
    sessionId: string;                // Unique session ID for each conversation
    businessId: string;               // Which business the conversation belongs to
    customerId: string;               // The customer ID initiating the conversation
    messages: any[];                  // Conversation history
    context: any;                     // Context of the conversation (e.g., AI state)
    isActive: boolean;                // Track if the session is still active
  } 