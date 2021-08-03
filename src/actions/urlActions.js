import { database } from "../firebase/firebase";

const addURL = ( urls ) => (
    {
        type: 'ADD_URL',
        urls: urls
    }
);

const startAddURL = ( urlData = {} ) =>
{
    return ( dispatch, getState ) =>
    {
        const userId = getState().auth.uid;
        const {
            url = '',
            note = '',
            date = 0,
            sectionId = '',
        } = urlData;

        let secId = sectionId;
        let info = { url, note, date };
        database.ref( `users/${ userId }/sections/${ secId }/urls` ).push( info ).then( ( snapshot ) =>
        {
            dispatch( addURL( { id: snapshot.key, ...info } ) );
        } ).catch( ( err ) => console.log( err ) );
    };
};

const deleteURL = ( { id = undefined } = {} ) => (
    {
        type: 'DELETE_URL',
        urls: {
            id: id
        }
    }
);

const startDeleteURL = ( id, secId ) =>
{
    return ( dispatch, getState ) =>
    {
        const userId = getState().auth.uid;
        database.ref( `users/${ userId }/sections/${ secId }/urls/${ id }` ).remove().then( () =>
        {
            dispatch( deleteURL( { id: id } ) );
        } ).catch( ( err ) =>
        {
            console.log( err );
        } );
    };
};

const setURL = ( urls ) => (
    {
        type: 'SET_URL',
        urls: urls
    }
);

const startSetURL = ( secId ) =>
{
    let data = [];
    return ( dispatch, getState ) =>
    {
        const userId = getState().auth.uid;
        return database.ref( `users/${ userId }/sections/${ secId }/urls` ).once( 'value' ).then( ( snapshot ) =>
        {
            snapshot.forEach( ( child ) =>
            {
                data.push( {
                    id: child.key,
                    ...child.val()
                } );
            } );
            dispatch( setURL( data ) );
        } ).catch( ( err ) => console.log( err ) );
    };
};

export { startAddURL, startDeleteURL, startSetURL };