const initialState = {
    configs: []
};
const  configReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'UPDATE_CONFIG':
            return {
                ...state,
                config: action.config
            };
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
