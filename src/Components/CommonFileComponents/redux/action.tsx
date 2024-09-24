export const AddToCart = (id) => async dispatch => {
    dispatch({
        type: "ADD_TO_CART",
        payload: id
    })
}

export const ProductReduxData = (id) => async dispatch => {
    dispatch({
        type: "PRODUCT",
        payload: id
    })
}


export const SwitcherAction = (actionType)=> dispatch =>{
    dispatch({
        type: actionType
    })
}

export const changePrimaryColor = (value) => async dispatch => {
    dispatch({
        type: "lightPrimary",
        payload: value
    })
}

export const darkPrimaryColor = (value) => async dispatch => {
    dispatch({
        type: "darkPrimary",
        payload: value
    })
}

export const transparentPrimaryColor = (value) => async dispatch => {
    dispatch({
        type: "transparentPrimary",
        payload: value
    })
}

export const transparentBackground = (value) => async dispatch => {
    dispatch({
        type: "TransparentBackground",
        payload: value
    })
}

export const BGImagePrimaryColor = (value) => async dispatch => {
    dispatch({
        type: "BgImgPrimary",
        payload: value
    })
}

export const ResetAll = (value) => async dispatch => {
    dispatch({
        type: value,
    })
}

export const horizontalmenusticky = (value) => async dispatch => {
    dispatch({
        type: value,
    })
}