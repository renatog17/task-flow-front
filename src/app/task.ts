export interface Task {
    id: number;
    title: string;
    description: string;
    creationDate: Date;
    deadline: Date;
    listId: number;
}

export interface TaskList{
    id: number;
    boardId: number;
    title: string;
}

export interface Board{
    id?: number;
    title: string;
}