export interface Task {
    id: number;
    title: string;
    description: string;
    creationDate: Date;
    deadline: Date;
}

export interface TaskList{
    id: number;
    tasks: Task[];
    title: string;
}

export interface Board{
    id:number;
    lists: TaskList[];
    title: string;
}