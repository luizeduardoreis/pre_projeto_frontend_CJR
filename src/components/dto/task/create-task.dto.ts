export default interface CreateTaskDTO {
    name: string;
    tagId: string | undefined;
    isDone: boolean;
}