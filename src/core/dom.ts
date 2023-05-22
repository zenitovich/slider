export class Dom{
    $el: HTMLElement | null

    constructor(selector: string | HTMLElement) {
        if (typeof selector === 'string') {
            this.$el = document.querySelector(selector)
        } else {
            this.$el = selector
        }
    }

    html(html: string = '') {
        if (typeof html === 'string' && this.$el !== null) {
            this.$el.innerHTML = html
            return this
        }
        //трим удаляет лишние пробелы вначале и в конце
        return this.$el?.outerHTML.trim()
    }

    clear() {
        this.html('')
        return this
    }

    append(node: HTMLElement | null) {
        if (node) {
            this.$el?.append(node)
        }
    }

}

export function $(selector: HTMLElement) {
    return new Dom(selector);
}

$.create = (tagName: string, classes = ''): Dom => {
    const el: HTMLElement = document.createElement(tagName);
    if (classes) {
        el.classList.add(classes);
    }
    return $(el)
}
