import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'contents' }
]



const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsAdded(state, action) {
            state.unshift(action.payload)
        }
    }
})


export const { postsAdded } = postsSlice.actions
export default postsSlice.reducer