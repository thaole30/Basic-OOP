
class Task {
    id: number;
    name: string;
    state: string;

    constructor(id: number, name: string, state: string) {
        this.id = id;
        this.name = name;
        this.state = state;
    }

    showTaskInfo() {
        console.log(`id: ${this.id} name: ${this.name} state: ${this.state}`)
    }
}


let task1 = new Task (10, "eat", "done");
console.log("task1", task1);
task1.showTaskInfo();

