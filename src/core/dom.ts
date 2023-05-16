// class Dom {
//     constructor(selector: string) {
//         this.$el = typeof selector === 'string'
//             ? document.querySelector(selector)
//             : selector;
//     }
// }
//
// export default function $(selector) {
//     return new Dom(selector);
// }
//
// $.create = (tagName, classes = '') => {
//     const el = document.createElement(tagName);
//     if (classes) {
//         el.classList.add(classes);
//     }
//     return $(el);
// }
