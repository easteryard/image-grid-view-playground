import { useEffect, useState } from 'react'

import GridData from '../data/GridData'

interface IResult<T> {
    data: T
    loading: boolean
    error: any
}

interface IImageData {
    title: string
    description: string
    imagePath: string
}

export default function useImageData (dependencies = [], shouldGet = true) {
    const [result, setResult] = useState<IResult<IImageData[]>>({ data: [], loading: true, error: null })

    function get () {
        setResult({
            data: GridData,
            loading: false,
            error: null
        })
    }

    useEffect(() => {
        if (shouldGet) get()
    }, [...dependencies])

    return { data: result.data, loading: result.loading, error: result.error }
}
