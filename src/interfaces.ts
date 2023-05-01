export interface IView {
    toHtml(): string
}

export interface  ISlider {
    init(): string
    view: IView
}

export interface IPresenter {
    min: number
    max: number
}
