import {IOptionValues, IView} from "../../interfaces";
import Presenter from "../presenter/Presenter";
import Emitter from "../../core/Emitter.ts";

export default class View implements IView {
    presenter: Presenter
    private emitter: Emitter
    constructor(presenter: Presenter, emitter: Emitter) {
        this.emitter = emitter
        this.presenter = presenter
        this.emitter.subscribe('update:optionValues',  (optionValues: IOptionValues) => {
            console.log('change optionValues ', optionValues);
        })
        //   this.$emitter.subscribe('update:rice', (min: number, max: number, rice: number) => this.makeRice(min, max, rice))
    }
    public addHtml() {
        let str: string = ''
        // working with sub
        // this.presenter.model.arrOfValues.forEach((el) => {
        //         str += `<div class="slider__ruler-value--item">${el}</div>`
        //     }
        // )
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
                <div class="slider__ruler-value">${str}</div>
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
