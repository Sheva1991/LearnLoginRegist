import { RootState } from 'app/store';
import { createSelector } from 'reselect';

export const selectData = (state: RootState) => state.posts.data
export const selectFetching = (state: RootState) => state.posts.fetching
export const selectTotalPosts = (state: RootState) => state.posts.pagination.total
export const selectPerPage = (state: RootState) => state.posts.pagination.per_page
export const selectTotalPages = createSelector(
    selectTotalPosts,
    selectPerPage,
    (total, perPage) => {
        const totalSize = total ? total : 1
        const perPageSize = perPage ? perPage : 1
        return Math.ceil(totalSize / perPageSize)
    }
)
