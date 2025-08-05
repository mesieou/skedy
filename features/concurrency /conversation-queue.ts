import { ChatSession } from "../conversation-service/types";
import { ConversationPool } from "./conversation-pool";

class ConversationQueue {
  private queue: any[] = [];
  private conversationPool: ConversationPool;


  constructor(conversationPool: ConversationPool) {
      this.conversationPool = conversationPool;  // Store reference to WorkerPool
  }
  async addConversation(conversationStartData: any, chatSession: ChatSession) {
   
    this.queue.push({ conversationStartData, chatSession }); // Add task to the queue
    this.processNextTask(); // Start processing tasks
  }

  async processNextTask() {
    if (this.queue.length > 0) {
      const task = this.queue.shift(); // Get next task in the queue
      await this.conversationPool.handleConversation(task.conversationStartData, task.chatSession);  // Process the task via the worker pool
    }
  }
}
