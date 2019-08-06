import { DisplayApplicationInfo } from './action-types';

export const ApplicationsBegin = () => ({
    type: DisplayApplicationInfo.APPLICATION_LOG_REQUEST
});

export const ApplicationsSuccess = applications => ({
    type: DisplayApplicationInfo.APPLICATION_LOG_SUCCESS,
    payload: { applications }
});

export const ApplicationsFailure = error => ({
    type: DisplayApplicationInfo.APPLICATION_LOG_FAILURE,
    payload: { error }
});

export function ApplicationDetails() {
    return dispatch => {
        dispatch(ApplicationsBegin());
        return fetch("data/listofApplications.json")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(ApplicationsSuccess(json));
                return json;
            })
            .catch(error => dispatch(ApplicationsFailure(error)));
    };
}

// Handle HTTP errors since login won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}