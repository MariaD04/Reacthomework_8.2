import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

const apiUrl = import.meta.env.VITE_APP_API_URL

export const ComponentWithData = () => {
    const { data } = useJsonFetch(apiUrl, 'data')

    return (
        <div className='container'>
            <h3>Успешное получение данных</h3>
            <p>{data}</p>
        </div>
    )
}

export default ComponentWithData