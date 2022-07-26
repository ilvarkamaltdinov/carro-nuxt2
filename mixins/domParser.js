import DOMParser from 'universal-dom-parser'

export default {
    methods: {
        addClass(arr, className) {
            arr.forEach(value => {
                if(value.innerHTML === '&nbsp;'){
                    value.remove()
                }
                value.classList.add(className)
            })
        },
        domParse(str){
            let parser = new DOMParser();
            let doc = parser.parseFromString(`${str}`, 'text/html');

            let p_array = doc.documentElement.querySelectorAll('p')
            let h2_array = doc.documentElement.querySelectorAll('h2')
            let ul_array = doc.documentElement.querySelectorAll('ul')
            let li_array = doc.documentElement.querySelectorAll('li')

            this.addClass(p_array, 'text__p')
            this.addClass(h2_array, 'heading--h2')
            this.addClass(h2_array, 'heading')
            this.addClass(ul_array, 'text__list')
            this.addClass(li_array, 'text__list-item')

            return doc.documentElement.outerHTML
        }
    },
}