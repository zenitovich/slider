export interface IView {
    toHtml(): string
}
export interface IOption {
  min: number,
  max: number,
  init(): string
}
export interface  ISlider {
    // init(): string
    view: IView
    el: string
    option: IOption
    presenter: IPresenter
    model: IModel
}
export interface IPresenter {
    model: IModel,
    option: IOption
}
export interface IModel {

}
