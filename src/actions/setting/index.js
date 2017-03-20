import axios from "axios";
import * as types from "../../constants";
import {Config} from "../../config";

export function getSetting() {
    return dispatch => {

        const request = axios.get(`${Config.api}/setting`);

        request
            .then(({data}) => {
                const {setting} = data;
                dispatch({
                    type: types.GET_SETTING,
                    payload: setting
                });

            })
            .catch(({response}) => {
                console.log(response);
            })
    }
}