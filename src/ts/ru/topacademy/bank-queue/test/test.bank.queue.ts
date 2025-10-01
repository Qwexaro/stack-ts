import { Queue } from "../queue/Queue.ts";


export function testBankQueue() {

    const queue = new Queue();
    
    queue.enqueue("Zahar");
    queue.enqueue("Kirill");
    queue.enqueue("Sockrat");
    queue.enqueue("Dmitry");
    
    console.log(`Обслужен - ${queue.serve()}`);
    console.log(`Обслужен - ${queue.serve()}`);
    
    console.log(queue);
}