export class Todo {

    //data member
    id: number;
    task: string;
    finish:boolean = false;

    constructor(id ?: number, task?: string, finish?: boolean) {
        this.id = id;
        this.task = task;
        this.finish = finish;
    }

    getTodoId(): number {
        return this.id
    }

}