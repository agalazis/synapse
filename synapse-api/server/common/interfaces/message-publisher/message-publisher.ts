import { IMessage } from "./message";

export interface IMessagePublisher<T>{
    create: (m: IMessage) => Promise<T>
}
