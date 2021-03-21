import { getSliceByPageSize } from './helperMethods'
import GridData from '../data/GridData'

it('getSliceByPageSize should return 3 elements when pageSize is 3', () => {
    expect(getSliceByPageSize(GridData, 0, 3)).toHaveLength(3)
})
