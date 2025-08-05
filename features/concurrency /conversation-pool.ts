class TaskWorker {
    public isAvailable: boolean = true;
  
    constructor(private taskHandler: (task: any) => Promise<void>) {}
  
    async handleConversation(conversationObj: {}) {
      console.log("Worker is handling conversation", conversationObj);
      await this.taskHandler(conversationObj);
    }
}

class ConversationPool {
  private workers: TaskWorker[] = [];

  constructor(private factor: number = 4) {
    for (let i = 0; i < this.factor; i++) {
      this.workers.push(new TaskWorker(this.handleConversation));
    }
  }

  async handleConversation(conversationObj: {}) {
    const worker = this.workers.find((worker) => worker.isAvailable);
    if (!worker) {
      console.warn("No available worker for this conversation:", conversationObj);
      return;
    }

    worker.isAvailable = false;
    await worker.handleConversation(conversationObj);
    worker.isAvailable = true;
  }
}
  
