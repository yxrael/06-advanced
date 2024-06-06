import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const asyncComponent = ( element ) => {

    const id1 = '5d86371f233c9f2425f16916';

    findHero( id1 )
        .then( name => element.innerHTML = name);
    
    
}

const findHero = async ( id ) => {

    const hero = heroes.find( hero => hero.id === id);
    
    if (!hero) return 'No existe';

    return hero.name;
}