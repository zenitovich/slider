import {IView} from "../../interfaces";
import Presenter from "../presenter/Presenter.ts";
export default class View implements IView{
    presenter: Presenter
    constructor(presenter: Presenter) {
        this.presenter = presenter
    }
    public toHtml() {
        return document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
                <div class="slider__ruler">
                    <div class="slider__ruler--item"></div>
                    <div class="slider__ruler--item"></div>
                    <div class="slider__ruler--item"></div>
                    <div class="slider__ruler--item"></div>
                    <div class="slider__ruler--item"></div>
                    <div class="slider__ruler--item"></div>
                </div>
                <div class="slider__ruler-value slider__item">
                    <div class="slider__ruler-value--min" data-value="min">${this.presenter.min}</div>
                    <div class="slider__ruler-value--item" data-value="first-item">${this.presenter.firstEl}</div>
                    <div class="slider__ruler-value--item" data-value="second-item">${this.presenter.secondEl}</div>
                    <div class="slider__ruler-value--item" data-value="third-item">${this.presenter.thirdEl}</div>
                    <div class="slider__ruler-value--item" data-value="fourth-item">${this.presenter.fourthEl}</div>
                    <div class="slider__ruler-value--max" data-value="max">${this.presenter.max}</div>
                </div>
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
    }
}
// воткнуть в слайдер рулер итем
    // <div class="slider__ruler-value--min" data-value="min">${presenter.min}</div>
    // <div class="slider__ruler-value--item" data-value="first-item">${presenter.firstEl}</div>
    // <div class="slider__ruler-value--item" data-value="second-item">${presenter.secondEl}</div>
    // <div class="slider__ruler-value--item" data-value="third-item">${presenter.thirdEl}</div>
    // <div class="slider__ruler-value--item" data-value="fourth-item">${presenter.fourthEl}</div>
    // <div class="slider__ruler-value--max" data-value="max">${presenter.max}</div>
