import { SET_SITE } from '../actions/LoadedSiteActions';

const LoadedSiteReducer = (state = 'Home', action) => {
    switch (action.type) {
        case SET_SITE:
            return  action.payload;
        default:
            return state
    }

}

export default LoadedSiteReducer