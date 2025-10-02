export class TaskImimitator {
    urgentTasks: string[];
    backgroundTasks: string[];

    constructor() {
      this.urgentTasks = [];
      this.backgroundTasks = [];
    }

    addTask(taskName: string, priority = 'background'): void {
        if (priority === 'urgent') {
            this.urgentTasks.push(taskName);
        } else {
            this.backgroundTasks.push(taskName);
        }
    }

    runTasks() {
        while (this.urgentTasks.length > 0 || this.backgroundTasks.length > 0) {
            if (this.urgentTasks.length > 0) {
                const task = this.urgentTasks.shift();
                console.log(`Выполняется срочная задача: ${task}`);
            } else {
                const task = this.backgroundTasks.shift();
                console.log(`Выполняется обычная задача: ${task}`);
            }
        }
    }

}