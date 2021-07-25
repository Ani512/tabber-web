const addSection = ( sections ) => ( {
    type: 'ADD_SECTION',
    sections: sections
} );

const removeSection = ( sections ) => ( {
    type: 'ADD_SECTION',
    sections: sections
} );


const editSectionName = ( sections ) => ( {
    type: 'ADD_SECTION',
    sections: sections
} );

export { addSection, removeSection, editSectionName };
