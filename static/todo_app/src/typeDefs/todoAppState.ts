import { ITodoItem } from "./todoItem"

export interface ITodoAppState {
    ui: {
        todoList: ITodoItem[]
    }
}