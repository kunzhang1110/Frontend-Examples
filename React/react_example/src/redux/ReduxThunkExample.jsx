import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ipSlice = createSlice({
  name: "ip",
  initialState: {
    address: "",
  },
  reducers: {
    success: (state, action) => {
      state.address = action.payload;
    },
  },
});

const { success } = ipSlice.actions;

const store = configureStore({
  reducer: {
    ip: ipSlice.reducer,
  },
});

export function ReduxThunkExample() {
  return (
    <Provider store={store}>
      <ReduxThunkApp />
    </Provider>
  );
}

function actionCreator(format) {
  const url = `https://api.ipify.org/?format=${format}`;
  return (dispatch, getState) => {
    //thunk
    axios.get(url).then((resp) => dispatch(success(resp.data.ip)));
  };
}

function ReduxThunkApp() {
  const ipAddress = useSelector((state) => state.ip.address);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Redux Thunk Example</h2>
      <button onClick={() => dispatch(actionCreator("json"))}>
        Get IP Address
      </button>
      <h3>IP Address: {ipAddress}</h3>
    </>
  );
}
