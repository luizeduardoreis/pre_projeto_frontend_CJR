import { Task } from "./Task";

export default interface Tag {
    id: string;
    name: string;
    tasks?: Task[];
}