

/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes";

export const promesasComponent = ( element ) => {

    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }

    const renderError = ( error ) => {
        element.innerHTML = `
        <h3>${ error }</h3>`
    }

    findHero( '5d86371f9f80b591f499df32' )
        .then( renderHero )
        .catch( renderError )

    // console.log('promesasComponent');
    // findHero ( '5d86371f9f80b591f499df32' );
    
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {

    return new Promise ( ( resolve, reject ) => {

        const hero = heroes.find( hero => hero.id === id );

        if ( hero ) {
            resolve( hero );
            return;
        }

        reject(`Hero with id ${ id } not found`);
    });
}