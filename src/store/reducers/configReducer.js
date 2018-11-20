const initialState = {
    configs: []
};
const  configReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'UPDATE_CONFIG':
            return {
                ...state,
                config: action.config,
                update_msg: action.update_msg
            };
        case 'UPDATE_CONFIG_FAILED':
            return {
                ...state,
                update_msg: action.update_msg
            };
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
