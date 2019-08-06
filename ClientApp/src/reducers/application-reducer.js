import { DisplayApplicationInfo } from '../actions/action-types';

const initialState = {
    items: [],
    loading: false,
    error: null
};
export default function EmployeeReducer(state = initialState, action) {
    switch (action.type) {
        case DisplayApplicationInfo.APPLICATION_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case DisplayApplicationInfo.APPLICATION_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.applications
            };
        case DisplayApplicationInfo.APPLICATION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        default:
            return state;
    }
}