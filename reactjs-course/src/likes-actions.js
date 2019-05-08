import Axios from "axios";

export const DO_LIKE = "DO_LIKE";

export const doLike = id => async dispatch => {
    try {
        await Axios.post(`/rest/rules/${id}/likes`)
        dispatch({
            type: DO_LIKE,
            payload: id
        })
    } catch(err) {
        console.log("LikeException", err);
    }
}

export const DO_DISLIKE = "DO_DISLIKE";

export const doLikeDislike = (type, id) => {
    return {
        type: "up" ? DO_LIKE : DO_DISLIKE,
        payload: {
            id: id,
            currentState: 0
        }
    }
}

export const doDislike = id => async dispatch => {
    try {
        await Axios.post(`/rest/rules/${id}/dislikes`)
        dispatch ({
            type: DO_DISLIKE,
            payload: id
        })
    } catch(err) {
        console.log("DislikeException", err);
    }
}