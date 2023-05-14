export interface IView {
    addHtml(): HTMLDivElement
}
export interface IScaleData {
    min: number
    max: number
    initValue: number
}
export interface IOptions {
    scaleData: IScaleData
}
export interface  ISlider {
    init(): void
}
export interface IPresenter {

}
export interface IModel {

}
export interface IEvents {
    "update:optionValues"?: Function[]
}
