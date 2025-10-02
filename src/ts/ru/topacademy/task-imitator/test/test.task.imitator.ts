import { TaskImimitator } from "../task.imitator.ts";


export function testTaskImimitator() {

    const taskImit = new TaskImimitator();

    taskImit.addTask('Обновление системы', 'urgent');
    taskImit.addTask('Обработка данных', 'background');
    taskImit.addTask('Резервное копирование', 'background');
    taskImit.addTask('Обработка прерывания', 'urgent');

    taskImit.runTasks();
}