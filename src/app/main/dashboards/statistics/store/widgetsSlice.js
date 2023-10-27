import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const getWidgets = createAsyncThunk('statisticsDashboardApp/widgets/getWidgets', async () => {
  const response = await axios.get('/api/dashboards/project/widgets');
  return await response.data;
});

const widgetsSlice = createSlice({
  name: 'statisticsDashboardApp/widgets',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getWidgets.fulfilled]: (state, action) => action.payload,
  },
});

export const selectWidgets = ({statisticsDashboardApp}) => statisticsDashboardApp.widgets;

export default widgetsSlice.reducer;
