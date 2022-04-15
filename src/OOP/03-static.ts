enum TaskStatus {
    Created = 100,
    Active,
    InActive,
    Process,
    Finish
}

interface TaskInterface {
    id: number;
    name: string;
    status?: TaskStatus;
}

class TaskSer {

    public username: string = "thaole";        //=> truy cập mọi nơi
    public static nickname: string = "thaone"
    public static address = "VN";      //=> TRUY CẬP TRỰC TIẾP mà k cần phải khởi tạo ra đối tượng


    static tasks: TaskInterface[];

    constructor(tasks: TaskInterface[]) {
        TaskSer.tasks = tasks;
    }

    getTasks() {
        return TaskSer.tasks;
    }

    static showInfo():void {   //gọi trực tiếp phương thức thông qua tên class chứ k cần tạo 1 instance của class
        for(let task of TaskSer.tasks) {
            console.log(`${this.nickname} ${task.name}`);
        }
        console.log("show info");
    }
}

let newTask: TaskInterface = {id: 3, name: "play"};

let tasksList: TaskInterface[] = [
    {id: 1, name: "learn"},
    {id: 2, name: "sleep", status: TaskStatus.Finish},
    newTask,
];

let taskSerObj = new TaskSer(tasksList);

const tasksData = taskSerObj.getTasks();
console.log("tasksData", tasksData);
console.log("username", taskSerObj.username);
console.log("address", TaskSer.address);
TaskSer.showInfo();