export default abstract class AbstractDom {
    onMousedown(): void {
        console.log(event)
    }
    onClick(event: Event): void {
        console.log(event)
    }
}
