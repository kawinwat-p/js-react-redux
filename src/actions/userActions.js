import axios from "axios";

const apiUrl = "https://684115dfd48516d1d35a2fc8.mockapi.io/user";

export const ActionTypes = {
    FETCH_USERS: "FETCH_USERS",
    FETCH_USER: "FETCH_USER",
    CREATE_USER: "CREATE_USER",
    EDIT_USER: "EDIT_USER",
    DELETE_USER: "DELETE_USER",
}

export const fetchUsers = () => async(dispatch) => {
    try {
        const response = await axios.get(apiUrl);
        dispatch({
            type: ActionTypes.FETCH_USERS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ActionTypes.FETCH_USERS_ERROR,
        });
    }
}


export const fetchUser = (userId) => async (dispatch) => {
  const response = await axios.get(`${apiUrl}/${userId}`);
  dispatch({ type: ActionTypes.FETCH_USER, payload: response.data });
};

export const createUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post(apiUrl, user);
    dispatch({ type: ActionTypes.CREATE_USER, payload: response.data });
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const editUser = (user) => async (dispatch) => {
  try {
    const response = await axios.put(`${apiUrl}/${user.id}`, user);
    dispatch({ type: ActionTypes.EDIT_USER, payload: response.data });
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  await axios.delete(`${apiUrl}/${userId}`);
  dispatch({ type: ActionTypes.DELETE_USER, payload: userId });
};