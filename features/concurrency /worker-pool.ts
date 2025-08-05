class TaskWorker {
    public isAvailable: boolean = true;
  
    constructor(private taskHandler: (task: any) => Promise<void>) {}
  
    async handleTask(task: any) {
      console.log("Worker is handling task", task);
      await this.taskHandler(task);
    }
}

class WorkerPool {
  private workers: TaskWorker[] = [];

  constructor(private factor: number = 4, private taskHandler: (task: any) => Promise<void>) {
    for (let i = 0; i < this.factor; i++) {
      this.workers.push(new TaskWorker(taskHandler));
    }
  }

  async handleTask(task: any) {
    const worker = this.workers.find((worker) => worker.isAvailable);
    if (!worker) {
      console.warn("No available worker for task:", task);
      return;
    }

    worker.isAvailable = false;
    await worker.handleTask(task);
    worker.isAvailable = true;
  }
}
  
