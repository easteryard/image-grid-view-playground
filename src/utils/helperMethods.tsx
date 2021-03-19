export function getSliceByPageSize<T> (data: T[], page: number, pageSize: number) {
    const startIdx = page * pageSize
    const endIdx = startIdx + pageSize
    return data.slice(startIdx, endIdx)
}
