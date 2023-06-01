export default abstract class AbstractDom {
  onMousedown(): void {}

  onClick(event: Event): void {
    console.log(event);
  }
}
