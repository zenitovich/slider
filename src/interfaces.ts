export interface IView {
    addHtml(): HTMLDivElement
}
export interface IOptionValues {
    min: number
    max: number
    initValue: number
}
export interface IOptions {
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
    "update:optionValues"?: Function[]
}

