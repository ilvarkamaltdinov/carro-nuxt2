if (process.client) {
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
        // reset scrollRestoration to auto when leaving page, allowing page reload
        // and back-navigation from other pages to use the browser to restore the
        // scrolling position.
        window.addEventListener('beforeunload', () => {
            window.history.scrollRestoration = 'auto'
        })
        // Setting scrollRestoration to manual again when returning to this page.
        window.addEventListener('load', () => {
            window.history.scrollRestoration = 'manual'
        })
    }
}

export default function (to, from, savedPosition) {
    let position;
    //Your Code Starts Here
    position = savedPosition || {x: 0, y: 0};
    const nuxt = window.$nuxt;


    if (from.name === 'category-mark-model-car') {
        setTimeout(() => {
            nuxt.$nextTick(() => window.scrollTo(0, position.y));
        }, 1)
    }


    // triggerScroll is only fired when a new component is loaded
    if (to.path === from.path && to.hash !== from.hash) {
        nuxt.$nextTick(() => nuxt.$emit('triggerScroll'))
    }

    return new Promise((resolve) => {
        // wait for the out transition to complete (if necessary)
        nuxt.$once('triggerScroll', () => {
            // coords will be used if no selector is provided,
            // or if the selector didn't match any element.
            if (to.hash) {
                let hash = to.hash
                // CSS.escape() is not supported with IE and Edge.
                if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
                    hash = '#' + window.CSS.escape(hash.substr(1))
                }
                try {
                    if (document.querySelector(hash)) {
                        // scroll to anchor by returning the selector
                        position = {selector: hash}
                    }
                } catch (e) {
                    console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
                }
            }
            resolve(position);
        })
    });
}