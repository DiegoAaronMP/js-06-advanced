import { heroes } from "../data/heroes"
// * Async await erradican el problema del callback/promise hell

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async( element ) => {
    
    const id1 = '5d86371fd55e2e2a30fe1cc4';
    const id2 = '5d86371f9f80b591f499df32';
    
    try {
        const hero1 = await findHero(id1);
        const hero2 = await findHero(id2);
    
        element.innerHTML = `${hero1.name} / ${hero2.name}`;
        
    } catch (error) {
        element.innerHTML = error;        
    }
}



const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    if (!hero) {
        throw `Hero not found`;
    }
    return hero;
}


