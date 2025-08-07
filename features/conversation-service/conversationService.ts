// import { ConversationQueue } from "../concurrency/conversation-queue";
// import { ConversationPool } from "../concurrency/conversation-pool";
// import { Business } from "../business/business";
// import { Customer } from "../customer/customer";
// import { ConversationStartData, ChatSession } from "./types";
  
// class ConversationService {
//     constructor(private conversationQueue: ConversationQueue, private conversationPool: ConversationPool) {
//         this.conversationQueue = new ConversationQueue(this.conversationPool);
//         this.conversationPool = new ConversationPool();
//     }

//     async startConversationSession(conversationStartData: ConversationStartData) {
//         const { business, customer } = await this.initEntities(conversationStartData)

//         const businessContext = await this.generateBusinessContext(business);
//         const chatSession = await this.initChatSession(conversationStartData, business, customer, businessContext);


//         await this.conversationQueue.addConversation(conversationStartData, chatSession);
//     }

//     async initChatSession(conversationStartData: ConversationStartData, business: Business, customer: Customer, businessContext: any) {
//         //
//         const chatSession = await this.conversationRepository.create({
//             businessId: business.id,
//             customerId: customer.id,
//         });
//         return chatSession;
//     }
    
//     async initEntities(conversationStartData: ConversationStartData) {
//         const business = await this.businessRepository.findById(conversationStartData.businessId);
//         const customer = await this.customerRepository.findById(conversationStartData.customerId);

//         return { business, customer };
//     }

//     async generateBusinessContext(business: Business) {
//         //
//     }
// }