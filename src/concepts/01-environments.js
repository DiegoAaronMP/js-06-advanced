


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentsConcepts = ( element ) => {
    const html =`
        Dev: ${import.meta.env.DEV} <br/>
        Prod: ${import.meta.env.PROD} <br/>
        Api Key: ${import.meta.env.VITE_API_KEY} <br/>
        Base url: ${import.meta.env.VITE_BASE_URL} <br/>
    `;

    element.innerHTML = html;
}