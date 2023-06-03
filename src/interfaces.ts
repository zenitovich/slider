import Ruler from "./modules/view/components/Ruler.ts";
import Point from "./modules/view/components/Point.ts";

export type TComponent = typeof Ruler | typeof Point;

export type TMethodName = "onClick" | "onMousedown";

export type TEventName = "click" | "mousedown";

export type TCapitalizeName = "Click" | "Mousedown";

export interface IScaleData {
  min: number;
  max: number;
  divisionValue: number;
}
export interface IComponentOptions {
  listeners: TEventName[];
  name: string;
}
export interface IOptions {
  scaleData: IScaleData;
}
export interface IEvents {
  "update:optionValues"?: Function[];
}
