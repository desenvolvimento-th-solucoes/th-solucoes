export const features = {
    handleScrollTo: (href: string) => {
        const target = document.querySelector(href);
        if (target instanceof HTMLElement) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            })
        } else {
            console.warn(`Element with selector ${href} not found or not an HTMLElement`);
        }
    },
    hasNumber: (string: string) => /\d/.test(string),
    toCapitalize: (name: string) => {
        const words = name.split(" ");
        const result = words.map(word =>{
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();   
        })

        return result.join(" ");
    }
}