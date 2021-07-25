let sectionsReducerState = [];

const sectionsReducer = ( state = sectionsReducerState, action ) =>
{
    switch ( action.type )
    {
        case 'ADD_SECTION':
            return 'add';
        case 'REMOVE_SECTION':
            return 'remove';
        case 'EDIT_SECTION':
            return 'edit';
        default:
            return 'chicken';
    }
};

export default sectionsReducer;