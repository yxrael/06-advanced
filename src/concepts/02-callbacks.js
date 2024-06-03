

/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes";

export const callBacksComponent = ( element ) => {

    const id = '5d86371f25a058e5b1c8a65e';
    // findHero( id, console.log );

    findHero( id, ( error, hero ) => {

        // element.innerHTML = hero?.name || 'No existe';

        if ( error ) {
            element.innerHTML = error;
            return;
        }
        element.innerHTML = hero?.name || 'No existe';
    })
    
    
}


/**
 * 
 * @param {String} id 
 * @param { (error: String|null, hero: Object)=> void } callback 
 */
const findHero = ( id, callback ) => {
    
    const hero = heroes.find( hero => hero.id === id );

    if ( !hero ) {
        callback(`Hero with id ${ id } not found`);
        return; // undefined
    }

    callback( null, hero );
}