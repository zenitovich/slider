export interface IView {
    html(): string
}

export interface  ISlider {
    init(): string
    view: IView
}
