import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch';

const apiUrl = import.meta.env.VITE_APP_API_URL

export const ComponentWithError = () => {
    const { error } = useJsonFetch(apiUrl, 'error');
  
    return (
        <div className='container'>
            <h3>Получение 500 ошибки</h3>
            <p>
                { error && `{status: ${error}}` }
            </p>
        </div>
    )
}

export default ComponentWithError