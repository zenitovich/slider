export interface IView {
    addHtml(): HTMLDivElement
}
export interface IOptions {
    min: number,
    max: number,
    initValue: number,
}
export interface  ISlider {
    init(): void
}
export interface IPresenter {

}
export interface IModel {

}
export interface IEvents {
    "update:min"?: Function[]
}
// export const Events: string = 'onclick' | "onmousedown" | "onmouseup" | "onmousemove" | "contextmenu"
