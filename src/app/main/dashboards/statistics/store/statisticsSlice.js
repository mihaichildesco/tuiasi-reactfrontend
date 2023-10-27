import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const getStatistics = createAsyncThunk('statisticsDashboardApp/statistics', async () => {
    const response = await axios.get('/api/dashboards/statistics');
    return await response.data;
});

const statisticsSlice = createSlice({
    name: 'statisticsDashboardApp/statistics',
    initialState: null,
    reducers: {},
    extraReducers: {
        [getStatistics.fulfilled]: (state, action) => action.payload,
    },
});

export const selectStatistic = ({statisticsDashboardApp}) => statisticsDashboardApp.statistics;

export default statisticsSlice.reducer;
