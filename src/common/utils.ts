/**
 * 动态插入css
 */
const loadStyle = (url: string) => {
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = url
    const head = document.getElementsByTagName('head')[0]
    head.appendChild(link)
}


export default {
    loadStyle,
}

