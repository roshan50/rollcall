const initialState = {
    configs: []
};
const  configReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'CREATE_CONFIG':
            console.log('created config', action.config)
            break;
        case 'FETCH_CONFIG':
            return {
                ...state,
                configs: action.configs
            };
        default:
            return state;
    }
}
export default configReducer
