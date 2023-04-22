export default class View {
    init() {
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
            <div class="slider">
                <div class="slider__control-panel slider__item">
                    <div class="slider__control-panel--item">
                        <div class="slider__control-panel--item-input">
                            horizontal: <input type="radio" name="view" checked>
                        </div>
                        <div class="slider__control-panel--item-input">
                            vertical: <input type="radio" name="view">
                        </div>
                    </div>
                    <div class="slider__control-panel--item">
                        <div class="slider__control-panel--item-input">
                            scale: <input type="radio" name="scale-value">
                        </div>
                        <div class="slider__control-panel--item-input">
                            no-scale: <input type="radio" name="scale-value" checked>
                        </div>
                    </div>
                    <div class="slider__control-panel--item">
                        <div class="slider__control-panel--item-input">
                            range: <input type="radio" name="range" checked>
                        </div>
                        <div class="slider__control-panel--item-input">
                            no-range: <input type="radio" name="range">
                        </div>
                    </div>
                </div>
                <div class="slider__scale">
                    <div class="slider__scale--button button-one"></div>
                    <div class="slider__scale--button button-two"></div>
                </div>
                <div class="slider__inputs slider__item">
                    <div>
                        min: <input type="text" class="slider__inputs--input">
                    </div>
                    <div>
                        max: <input type="text" class="slider__inputs--input">
                    </div>
                    <div>
                        value: <input type="text" class="slider__inputs--input">
                    </div>
                    <div>
                        step: <input type="text" class="slider__inputs--input">
                    </div>
                </div>
            </div>
        `
    }
}
