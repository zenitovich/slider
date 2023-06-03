import { SliderComponent } from "../../../core/SliderComponent.ts";
import Emitter from "../../../core/Emitter.ts";
import { Dom } from "../../../core/dom.ts";

export default class Point extends SliderComponent {
  static className = "slider__point";

  private emitter: Emitter;

  constructor(emitter: Emitter, $root: Dom) {
    super($root, {
      name: "Point",
      listeners: ["click", "mousedown"],
    });
    this.emitter = emitter;
    console.log(this.emitter);
  }

  onClick(event: Event) {
    console.log("Point onClick", event);
  }

  onMousedown() {
    console.log("Mousedown");
  }

  toHTML(): string {
    return `
            <div class="slider__point--button"></div>
        `;
  }
}
