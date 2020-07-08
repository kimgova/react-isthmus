import React from 'react';

function reducer (state = { name: ''}, action) {
    switch (action.type) {
        case 'update':
            return{
                name: action.value
            }
        case 'delete':
            return{
                name: ''
            }
        default:
            return{
                name: 'Rex'
            }
    }
    
    
};
export default reducer;