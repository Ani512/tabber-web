let urlsReducerState = [];
const urlsReducer = ( state = urlsReducerState, action ) =>
{
    switch ( action.type )
    {
        case 'ADD_URL':
            return [
                ...state,
                action.urls
            ];
        case 'DELETE_URL':
            return state.filter( ( url ) => ( url.id !== action.urls.id ) );
        case 'SET_URL':
            return action.urls;
        default:
            return state;
    }
};

export default urlsReducer;