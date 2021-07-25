const setFilterText = (
    { text = '' } = {}
) => ( {
    type: 'SET_FILTER_TEXT',
    text: text
} );

export { setFilterText };