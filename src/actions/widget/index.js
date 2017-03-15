import * as types from "../../constants";

function changeIsMobile(isMobile) {
    return {
        type: types.INIT_IS_MOBILE,
        isMobile,
    };
}

function changeWidthAndHeight(height, width) {
    return {
        type: types.INIT_WIDTH_AND_HEIGHT,
        height,
        width,
    };
}

export function initEnv() {
    return dispatch => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB10|RIM Tablet OS|IEMobile|Opera Mini/i
            .test(navigator.userAgent);

        dispatch(changeIsMobile(isMobile));
        dispatch(changeWidthAndHeight(window.innerHeight, window.innerWidth));

        window.onresize = () => {
            dispatch(changeWidthAndHeight(window.innerHeight, window.innerWidth));
        };
    };
}
