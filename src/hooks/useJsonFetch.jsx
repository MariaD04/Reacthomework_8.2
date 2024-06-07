import React, { useEffect, useState } from 'react'

export const useJsonFetch = (url, opts) => {

    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        fetch(`${url}${opts}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.statusText}`)
                }
                return response.json()
            })
            .then(data => setData(data.status))
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false))

    }, [url, opts])


    return {data, error, loading}
}

export default useJsonFetch
