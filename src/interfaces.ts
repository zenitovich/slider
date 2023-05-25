import Ruler from "./modules/view/components/Ruler";

export type TComponent = typeof Ruler

export type TMethodName = 'onClick' | 'onMousedown'

export type TEventName = 'click' | 'mousedown'

export type TCapitalizeName = 'Click' | 'Mousedown'


// export interface IDomListenerEvents {
//     onClick(event: Event): void
//     onMousedown(event: Event): void
// }

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
    listeners: TEventName[],
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
