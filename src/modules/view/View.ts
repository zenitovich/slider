import { TComponent } from "../../interfaces.ts"
import Presenter from "../presenter/Presenter.ts"
import Emitter from "../../core/Emitter.ts"
import Ruler from "./components/Ruler.ts"
import { $ } from "../../core/dom"

export default class View {
    private readonly presenter: Presenter

    private readonly emitter: Emitter

    components: [typeof Ruler]

    // массив с нашими классами
    componentsInstance: Ruler[]

    constructor(presenter: Presenter, emitter: Emitter) {
        this.components = [Ruler]
        this.emitter = emitter
        this.presenter = presenter
        console.log(this.presenter)
    }

    getRoot(): HTMLElement | null {
        const $root = $.create("div", "slider")

        this.componentsInstance = this.components.map(
            (Component: TComponent) => {
                const $el = $.create("div", Component.className)
                const component = new Component(this.emitter, $el)

                $el.html(component.toHTML())
                $root.append($el.$el)

                return component
            }
        )

        return $root.$el
    }

    render() {
        this.componentsInstance.forEach((component) => {
            component.init()
        })
    }
}
