import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch';

const apiUrl = import.meta.env.VITE_APP_API_URL

export const ComponentWithLoading = () => {
    const { loading } = useJsonFetch(apiUrl, 'loading');
  
    return (
        <div>
            {loading && (
                <div className='container'>
                    <h3>Индикатор загрузки</h3>
                    <p>Loading...</p>
                </div>
            )}
        </div>
    )
}

export default ComponentWithLoading