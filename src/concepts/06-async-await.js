import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */



export const asyncAwaitComponent = async( element ) => {

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f25a058e5b1c8a65e';

    try {
        const { name: name1 } = await findHero( id1 );
        const hero2 = await findHero( id1 );

        element.innerHTML = `${name1} / ${hero2.name}`;
    } catch (error) {
        element.innerHTML = error;
    }

    
    
    
}

const findHero = async ( id ) => {
    const hero = heroes.find( hero => hero.id === id );

    if (!hero)
        throw `El heroe con id ${id} no existe`;

    return hero;
}