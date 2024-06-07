import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

const apiUrl = import.meta.VITE_APP_API_URL

export const ComponentWithData = () => {
    const { data } = useJsonFetch(apiUrl, 'data')

    return (
        <>
            {data && (
                <div className='container'>
                <h3>Успешное получение данных</h3>
                <p>{JSON.stringify(data)}</p>
                </div>
            )}
        </>
    )
}

export default ComponentWithData;

//{loading ? 'Loading...' : error ? `Error: ${error}` : data && `${JSON.stringify(data)}`}