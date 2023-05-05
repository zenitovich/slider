import {IPresenter} from "../../interfaces";
import Model from "../model/Model.ts";
export default class Presenter implements IPresenter {
  // todo:  Не должно быть свойств кроме модели
    public model: Model
    constructor(model: Model) {
        this.model = model

      // todo: модель в слайдере инициализируется + риски генерятся во вью а не тут
      // todo этого не будет
      //   this.model = new Model(this.min, this.max)
      //   this.firstEl = Math.round(0.2 * (max - min) + min)
      //   this.secondEl = Math.round(0.4 * (max - min) + min)
      //   this.thirdEl = Math.round(0.6 * (max - min) + min)
      //   this.fourthEl = Math.round(0.8 * (max - min) + min)
      //   console.log(this.min)
      //   console.log(this.model)
      ///

      // todo модель передается в конструкторе + настройки в объекте
      // this.model = model
      // this.model.setMin(min)
    }

    // changeValue(val: number) {
    //   this.model.setMin(val)
    // }
}
