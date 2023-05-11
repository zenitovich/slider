export interface IView {
    addHtml(): HTMLDivElement
}
export interface IOptions {
    // min: number,
    // max: number,
    // initValue: number,
    values: IOptionValues
}
export interface  ISlider {
    init(): void
}
export interface IPresenter {

}
export interface IModel {

}
export interface IEvents {
    // "update:min"?: Function[]
    "update:optionValues"?: Function[]
}
export interface IOptionValues {
    min: number
    max: number
    initValue: number
}
