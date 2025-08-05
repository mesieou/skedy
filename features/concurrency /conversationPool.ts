import { ChatSession, ConversationStartData } from "../conversation-service/types";

class TaskWorker {
    public isAvailable: boolean = true;
  
    constructor(private taskHandler: (conversationObj: ConversationStartData, chatSession: ChatSession) => Promise<void>) {}
  
    async handleConversation(conversationObj: ConversationStartData, chatSession: ChatSession) {
      console.log("Worker is handling conversation", conversationObj , "with chat session", chatSession);
      await this.taskHandler(conversationObj, chatSession);
    }
}

export class ConversationPool {
  private workers: TaskWorker[] = [];

  constructor(private factor: number = 4) {
    for (let i = 0; i < this.factor; i++) {
      this.workers.push(new TaskWorker(this.handleConversation.bind(this)));
    }
  }

  async handleConversation(conversationObj: ConversationStartData, chatSession: ChatSession) {
    const worker = this.workers.find((worker) => worker.isAvailable);
    if (!worker) {
      console.warn("No available worker for this conversation:", conversationObj);
      return;
    }

    worker.isAvailable = false;
    await worker.handleConversation(conversationObj, chatSession);
    worker.isAvailable = true;
  }
}
  
