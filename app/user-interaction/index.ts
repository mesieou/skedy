//Classes: business, customer, conversation, message, backendTask, LLM, quotes, bookings, services, pricing_configs, availability, documents, notifications, crawl session, errorLogs

//business class
  //generateBusinessContext

//conversation class
  //initEntities(business, customer, conversation)
  //appendToConversation
  //handleCustomerInput
  //sendTextMessage
 
// LLM class
  //generateGreetingPrompt
  //streamTextToSpeech
  //askLLM

//backendTask class
  //callBackend

//   type ConversationStartData = {
//     transport: 'voice' | 'text'         // How the conversation happens (Voice or Text)
//     direction: 'inbound' | 'outbound'   // Who started the conversation (Customer or Business)
//     from: string                        // Customer phone number
//     to: string                          // Business phone number
//     initialInput?: string               // Customer's first message or speech (optional)
//     script?: string                     // AI's script if it's an outbound text (optional)
//   }

// async function startConversationSession(conversationStartData: ConversationStartData) {
//     const { business, customer, conversation } = await initEntities(conversationStartData)
//     const aiContext = await generateBusinessContext(business)
  
//     // Determine who speaks first
//     const customerStarts = (
//       (conversationStartData.direction === 'inbound' && conversationStartData.transport === 'text') ||
//       (conversationStartData.direction === 'outbound' && conversationStartData.transport === 'voice')
//     )
  
//     // If AI starts, send greeting
//     if (!customerStarts) {
//       const greeting = await generateGreetingPrompt(business, conversationStartData)
//       await appendMessage(conversation.id, 'assistant', greeting)
//       await deliverMessage(conversationStartData.transport, greeting, conversationStartData)
//     }
  
//     // If customer already said something first (text or outbound call)
//     if (conversationStartData.initialInput) {
//       await processCustomerInput(conversationStartData.initialInput, conversation, aiContext, conversationStartData)
//     }
  
//     // Main loop for ongoing conversation
//     while (await sessionIsActive(conversationStartData)) {
//       const customerInput = await waitForInput(conversationStartData)
//       await processCustomerInput(customerInput, conversation, aiContext, conversationStartData)
//     }
//   }

// async function processCustomerInput(input: string, conversation: any, context: any, conversationStartData: ConversationStartData) {
//     // Append customer's input to the conversation
//     await appendMessage(conversation.id, 'user', input)
  
//     // Generate AI response based on conversation history and context
//     const aiResponse = await runLLM(conversation.messages, context)
  
//     // Append AI's response to the conversation
//     await appendMessage(conversation.id, 'assistant', aiResponse.content)
  
//     // Deliver the AI's response through the appropriate transport (voice or text)
//     await deliverMessage(conversationStartData.transport, aiResponse.content, conversationStartData)
  
//     // If the AI's response includes a backend function call, execute and append the result
//     if (aiResponse.function_call) {
//       const result = await runBackendFunction(aiResponse.function_call)
//       await appendMessage(conversation.id, 'function', result)
//     }
//   }
  
// async function deliverMessage(transport: 'voice' | 'text', message: string, conversationStartData: ConversationStartData) {
//     if (transport === 'voice') {
//       // Convert text to speech for voice transport
//       await streamTextToSpeech(message, conversationStartData)
//     } else {
//       // Send message as text (SMS, chat, etc.)
//       await sendTextMessage(message, conversationStartData)
//     }
//   }