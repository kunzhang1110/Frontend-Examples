import { Provider, useSelector, useDispatch } from "react-redux";
import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const fetchIp = createAsyncThunk("ip/fetchIp", async (format, thunkAPI) => {
  const url = `https://api.ipify.org/?format=${format}`;
  const response = await axios.get(url);
  return response.data.ip;
  // return thunkAPI.rejectWithValue("error"); //test for rejected
});

const ipSlice = createSlice({
  name: "ip",
  initialState: {
    address: "",
    loading: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchIp.pending, (state, action) => {
      state.loading = "loading";
    });
    builder.addCase(fetchIp.fulfilled, (state, action) => {
      state.address = action.payload;
      state.loading = null;
    });
    builder.addCase(fetchIp.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

const store = configureStore({
  reducer: {
    ip: ipSlice.reducer,
  },
});

function ReduxApp() {
  const { address, loading } = useSelector((state) => state.ip);
  const dispatch = useDispatch();

  return (
    <>
      <h2>CreateAsync Thunk Example</h2>
      <button onClick={() => dispatch(fetchIp("json"))}>Get IP Address</button>
      <h3>IP Address: {loading ?? address}</h3>
    </>
  );
}

export function CreateAsyncThunkExample() {
  return (
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  );
}
