import Ruler from "./modules/view/components/Ruler.ts";

export interface IView {
    addHtml(): HTMLDivElement
}

export interface IScaleData {
    min: number
    max: number
    initValue: number
}

export interface IComponent {

}

export interface IComponentOptions {
    listeners: string[],
    name: string
}

export interface IOptions {
    scaleData: IScaleData
}

export interface  ISlider {

}

export interface IPresenter {

}

export interface IModel {

}

export interface IEvents {
    "update:optionValues"?: Function[]
}

export type TComponent = typeof Ruler
