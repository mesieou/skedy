class ConversationQueue {
  private queue: any[] = [];
  private conversationPool: ConversationPool;


  constructor(conversationPool: ConversationPool) {
      this.conversationPool = conversationPool;  // Store reference to WorkerPool
  }
  async addConversation(conversationStartData: any, business: any, customer: any, conversation: any, aiContext: any) {
    const conversationObj = {
      conversationStartData,
      business,
      customer,
      conversation,
      aiContext
    };
    this.queue.push(conversationObj); // Add task to the queue
    this.processNextTask(); // Start processing tasks
  }

  async processNextTask() {
    if (this.queue.length > 0) {
      const conversationObj = this.queue.shift(); // Get next task in the queue
      await this.conversationPool.handleConversation(conversationObj);  // Process the task via the worker pool
    }
  }
}
