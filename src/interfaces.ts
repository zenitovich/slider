import Ruler from '@modules/view/components/Ruler.ts';
import Point from '@modules/view/components/Point.ts';
import SecondPoint from '@modules/view/components/SecondPoint.ts';

export type TComponent = typeof Ruler | typeof Point | typeof SecondPoint;

export type TMethodName = 'onClick' | 'onMousedown';

export type TEventName = 'click' | 'mousedown';

export type TCapitalizeName = 'Click' | 'Mousedown';

export interface IScaleData {
  min: number;
  max: number;
  divisionValue: number;
}
export interface IPointData {
  value: number;
  secondValue: number;
  pointPositionPercent: number;
  secondPointPositionPercent: number;
}

export interface IRulerData {
  length: number;
  coordsX: number;
  coordsRight: number;
}

export interface IComponentOptions {
  listeners: TEventName[];
  name: string;
}
export interface IOptions {
  scaleData: IScaleData;
  initValue?: number;
  pointPositionPX?: string | undefined;
  isRange?: boolean;
}
export interface IEvents {
  'update:optionValues'?: Function[];
  'update:pointData'?: Function[];
  'update:secondPointData'?: Function[];
  'update:pointZIndex'?: Function[];
  'update:secondPointZIndex'?: Function[];
  'update: valueButtonChecked'?: Function[];
  'update: rangeButtonChecked'?: Function[];
  'update: progressBar'?: Function[];
  'update: secondProgressBar'?: Function[];
  'update: stepValue'?: Function[];
}
