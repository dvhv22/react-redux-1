import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', name: 'A', age: '25' },
    { id: '2', name: 'B', age: '26' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}

})
export default usersSlice.reducer;