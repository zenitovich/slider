import {IView, TComponent} from "../../interfaces";
import Presenter from "../presenter/Presenter";
import Emitter from "../../core/Emitter";
import Ruler from "./components/Ruler";
import {$} from "../../core/dom.ts";

export default class View implements IView {
    private readonly presenter: Presenter
    private readonly emitter: Emitter
    components: [typeof Ruler]
    //массив с нашими классами
    componentsInstance: Ruler[]

    constructor(presenter: Presenter, emitter: Emitter) {
        this.components = [Ruler]
        this.emitter = emitter
        this.presenter = presenter
        console.log(this.presenter)
    }

    getRoot(): HTMLElement | null {
        const $root = $.create('div', 'slider')

        this.componentsInstance = this.components.map((Component: TComponent) => {

            const $el  = $.create('div', Component.className)
            const component = new Component(this.emitter, $el)

            $el.html(component.toHTML())
            $root.append($el.$el)

            return component
        })

        return $root.$el
    }

    render() {
        this.componentsInstance.forEach((component) => {
            component.init()
        })
    }



    public addHtml() {
        const sliderHtml = document.createElement('div')
        sliderHtml.className = 'sliderHtml'
        sliderHtml.innerHTML = `
            <div class="slider">
<!--                <div class="slider__control-panel slider__item">-->
<!--                    <div class="slider__control-panel&#45;&#45;item">-->
<!--                        <div class="slider__control-panel&#45;&#45;item-input">-->
<!--                            horizontal: <input type="radio" name="view" checked>-->
<!--                        </div>-->
<!--                        <div class="slider__control-panel&#45;&#45;item-input">-->
<!--                            vertical: <input type="radio" name="view">-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="slider__control-panel&#45;&#45;item">-->
<!--                        <div class="slider__control-panel&#45;&#45;item-input">-->
<!--                            scale: <input type="radio" name="scale-value">-->
<!--                        </div>-->
<!--                        <div class="slider__control-panel&#45;&#45;item-input">-->
<!--                            no-scale: <input type="radio" name="scale-value" checked>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="slider__control-panel&#45;&#45;item">-->
<!--                        <div class="slider__control-panel&#45;&#45;item-input">-->
<!--                            range: <input type="radio" name="range" checked>-->
<!--                        </div>-->
<!--                        <div class="slider__control-panel&#45;&#45;item-input">-->
<!--                            no-range: <input type="radio" name="range">-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
                <div class="slider__scale">
                    <div class="slider__scale--button button-one"></div>
                    <div class="slider__scale--button button-two"></div>
                </div>
                <div class="slider__ruler"></div>
                <div class="slider__ruler-value">this.ruler.stringOfValues</div>
                <div class="slider__inputs slider__item">
<!--                    <div>-->
<!--                        min: <input type="text" class="slider__inputs&#45;&#45;input">-->
<!--                    </div>-->
<!--                    <div>-->
<!--                        max: <input type="text" class="slider__inputs&#45;&#45;input">-->
<!--                    </div>-->
                    <div>
                        value: <input type="text" class="slider__inputs--input">
                    </div>
<!--                    <div>-->
<!--                        step: <input type="text" class="slider__inputs&#45;&#45;input">-->
<!--                    </div>-->
                </div>
            </div>
        `
        return sliderHtml
    }
}
