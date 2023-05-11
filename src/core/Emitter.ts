import {IEvents} from "../interfaces.ts";

export default class Emitter {
    events: IEvents = {}
    //подписка / добавление слушателей
    subscribe(name: keyof IEvents, listener: Function) {
        if (!this.events[name]) {
            this.events[name] = [];
        }
        this.events[name]?.push(listener);
    }
    //удаление слушателей (функций из массива по имени события)
    removeListener(name: keyof IEvents, listenerToRemove: Function) {
        if (!this.events[name]) {
            throw new Error(`Can't remove a listener. Event "${name}" doesn't exits.`);
        }
        this.events[name] = this.events[name]?.filter((listener: Function) => listener !== listenerToRemove);
    }
    //оповещение слушателей в массиве с именем события, где по-очереди вызываются функции с текущими параметрами(data)
    // в дате будет объект с мин макс инит осуществленный в интерфейсе
    emit(name: keyof IEvents, data: number | object) {
        if (!this.events[name]) {
            throw new Error(`Can't emit an event. Event "${name}" doesn't exits.`);
        }
        this.events[name]?.forEach((listener: Function) => listener(data));
    }
}
