import { IEvents } from "../interfaces";

export default class Emitter {
  events: IEvents = {};

  // подписка / добавление слушателей
  subscribe(name: keyof IEvents, listener: Function) {
    if (!this.events[name]) {
      this.events[name] = [];
    }
    this.events[name]?.push(listener);
  }

  // удаление слушателей (функций из массива по имени события)
  removeListener(name: keyof IEvents, listenerToRemove: Function) {
    if (!this.events[name]) {
      throw new Error("Argument types do not match parameters");
    }
    this.events[name] = this.events[name]?.filter(
      (listener: Function) => listener !== listenerToRemove
    );
  }

  // оповещение слушателей в массиве с именем события,вызываются функции с параметрами(data)
  // в дате будет объект с мин макс инит осуществленный в интерфейсе
  emit(name: keyof IEvents, data: Object) {
    if (!this.events[name]) {
      throw new Error(`Can't emit an event. Event "${name}" doesn't exits.`);
    }
    this.events[name]?.forEach((listener: Function) => listener(data));
  }
}
