let sectionsReducerState = [];
const sectionsReducer = ( state = sectionsReducerState, action ) =>
{
    switch ( action.type )
    {
        case 'ADD_SECTION':
            return [
                ...state,
                action.section
            ];
        case 'REMOVE_SECTION':
            return state.filter( ( section ) => ( section.id !== action.section.id ) );
        case 'EDIT_SECTION':
            return state.map( ( section ) =>
            {
                if ( section.id === action.id )
                {
                    return {
                        ...section,
                        ...action.updates
                    };
                }
                else
                {
                    return section;
                }
            } );
        default:
            return state;
    }
};

export default sectionsReducer;