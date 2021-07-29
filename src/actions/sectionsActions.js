import { v4 as uuid } from 'uuid';

const addSection = ( { title = '' } = {} ) => ( {
    type: 'ADD_SECTION',
    section: {
        id: uuid(),
        title: title
    }
} );

const removeSection = ( { id = undefined } = {} ) => ( {
    type: 'REMOVE_SECTION',
    section: {
        id: id
    }
} );


const editSectionName = ( id = undefined, updates ) => ( {
    type: 'EDIT_SECTION',
    id: id,
    updates
} );

export { addSection, removeSection, editSectionName };
