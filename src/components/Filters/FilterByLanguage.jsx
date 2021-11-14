import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLangaugeList } from '../../store/thunk'

export default function FilterByLanguage() {
    const { languageList } = useSelector((state) => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLangaugeList())
    }, [dispatch])

    console.log(languageList)
    return (
        <div>

        </div>
    )
}
