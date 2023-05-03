export interface IView {
    addHtml(): HTMLDivElement
}
export interface IOption {
  min: number,
  max: number,
}
export interface  ISlider {
    init(): void
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
