import { database } from '../firebase/firebase';

const addSection = ( section ) => ( {
    type: 'ADD_SECTION',
    sections: section
} );

const startAddSection = ( sectionData = {} ) =>
{
    return ( dispatch, getState ) =>
    {
        const userId = getState().auth.uid;
        const {
            title = ''
        } = sectionData;

        let section = { title };
        database.ref( `users/${ userId }/sections` ).push( section ).then( ( snapshot ) =>
        {
            dispatch( addSection( { id: snapshot.key, ...section } ) );
        } ).catch( ( err ) => console.log( err ) );
    };
};

const setSection = ( section ) => (
    {
        type: 'SET_SECTION',
        sections: section
    } );

const startSetSection = () =>
{
    let sections = [];
    return ( dispatch, getState ) =>
    {
        const userId = getState().auth.uid;
        return database.ref( `users/${ userId }/sections` ).once( 'value' ).then( ( snapshot ) =>
        {
            snapshot.forEach( ( child ) =>
            {
                sections.push( {
                    id: child.key,
                    ...child.val()
                } );
            } );
            dispatch( setSection( sections ) );
        } ).catch( ( err ) => console.log( err ) );
    };
};

const removeSection = ( { id = undefined } = {} ) => ( {
    type: 'REMOVE_SECTION',
    section: {
        id: id
    }
} );

const startRemoveSection = ( { id } ) =>
{
    return ( dispatch, getState ) =>
    {
        const userId = getState().auth.uid;
        database.ref( `users/${ userId }/sections/${ id }` ).remove().then( () => 
        {
            dispatch( removeSection( { id: id } ) );
        } ).catch( ( err ) => console.log( err ) );
    };
};


const editSectionName = ( id = undefined, updates ) => ( {
    type: 'EDIT_SECTION',
    id: id,
    updates
} );

const startEditSectionName = ( id, sectionData ) =>
{
    return ( dispatch, getState ) =>
    {
        const userId = getState().auth.uid;
        const {
            title = '',
        } = sectionData;

        let section = { title };

        database.ref( `users/${ userId }/sections/${ id }` ).update( section ).then( () =>
        {
            dispatch( editSectionName( id, section ) );
        } ).catch( ( err ) =>
        {
            console.log( err );
        } );
    };
};

export { startRemoveSection, startAddSection, startSetSection, startEditSectionName };
