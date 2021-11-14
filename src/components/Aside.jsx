import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import MyButton from './UI/Button/MyButton';
import { setSortString, setSelecetdFilter } from '../store/actions'
import FilterContainer from './FilterContainer';
import Sort from './Sort';

export default function Aside() {
    const dispatch = useDispatch();
    const [searchDisabled, setSearchDisabled] = useState(true);
    const { sortString, selectedGener } = useSelector((state) => state.movies)

    useEffect(() => {
        setSearchDisabled(true)
        if (selectedGener.length || sortString) {
            setSearchDisabled(false)
        }

    }, [selectedGener, sortString])

    const handleReset = () => {
        dispatch(setSelecetdFilter([]))
        dispatch(setSortString(''))
    }

    return (
        <>
            <Sort />
            <FilterContainer />
            <MyButton fullWidth sx={{ my: 2 }} disabled={searchDisabled} onClick={handleReset}>Reset filters</MyButton>
        </>
    )
}