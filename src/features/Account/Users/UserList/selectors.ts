import { RootState } from 'app/store';
import { createSelector } from 'reselect'

export const selectData = (state: RootState) => state.users.data
export const selectFetching = (state: RootState) => state.users.fetching
export const selectTotalUsers = (state: RootState) => state.users.meta?.total
export const selectPerPage = (state: RootState) => state.users.meta?.per_page
export const selectTotalPages = createSelector(
    selectTotalUsers,
    selectPerPage,
    (total, perPage) => {
        const totalSize = total ? total : 1
        const perPageSize = perPage ? perPage : 1
        return Math.ceil(totalSize / perPageSize)
    }
)
