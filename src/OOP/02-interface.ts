enum TaskState {
    Created = 100,
    Active,
    InActive,
    Process,
    Finish
}

interface TaskInterface {
    id: number;
    name: string;
    state?: TaskState;
}

class TaskService {
    tasks: TaskInterface[];

    constructor(tasks: TaskInterface[]) {
        this.tasks = tasks;
    }

    getTasks() {
        return this.tasks;
    }
}

let task3: TaskInterface = {id: 3, name: "play"};

let tasks: TaskInterface[] = [
    {id: 1, name: "learn"},
    {id: 2, name: "sleep", state: TaskState.Finish},
    task3,
];

let taskServiceObj = new TaskService(tasks);

const myTasks = taskServiceObj.getTasks();
console.log("myTasks", myTasks);