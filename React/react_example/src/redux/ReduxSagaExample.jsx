import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
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
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    ip: ipSlice.reducer,
  },
  middleware: [sagaMiddleware],
});

function* getIpAddress(action) {
  const url = `https://api.ipify.org/?format=${action.format}`;
  const resp = yield call(axios.get, url); //API call
  console.log(resp);
  yield put(success(resp.data.ip)); //dispatch stockSlice.actions.success action and execute success reducer function
}

function* watchGetIpAddress() {
  yield takeEvery("Get IP Address", getIpAddress); //take "GET PRICE" action
}

sagaMiddleware.run(watchGetIpAddress);

const ReduxSagaApp = () => {
  const ipAddress = useSelector((state) => state.ip.address);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Redux Saga Example</h2>
      <button
        onClick={() => dispatch({ type: "Get IP Address", format: "json" })}
      >
        Get IP Address
      </button>
      <h3>IP Address: {ipAddress}</h3>
    </>
  );
};

export const ReduxSagaExample = () => {
  return (
    <Provider store={store}>
      <ReduxSagaApp />
    </Provider>
  );
};
