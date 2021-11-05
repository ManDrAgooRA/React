import React from 'react'
import { useParams } from 'react-router-dom';

export default function MoviePage() {
    const params = useParams();
    console.log(params)
    return (
        <div>
            moveis page
        </div>
    )
}
