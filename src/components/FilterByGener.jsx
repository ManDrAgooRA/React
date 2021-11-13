import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
// import { fetchFilterByGener } from '../store/thunk'



export default function FilterByGener({ page, setPage, checked, setChecked }) {
    const { genres } = useSelector((state) => state.movies)
    const dispatch = useDispatch();

    const handleToggle = (value) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked)
    }

    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Filters</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>By gener</Typography>
                    <hr />
                    {genres.map((gener) => {
                        return (
                            <FormControlLabel
                                key={uuidv4()}
                                control={
                                    <Checkbox
                                        onChange={() => handleToggle(gener.id)}
                                        checked={checked.indexOf(gener.id) === -1 ? false : true}
                                    />
                                }
                                label={gener.name}
                            />
                        )

                    })}
                </AccordionDetails>
            </Accordion>
        </>
    )
}

// FilterByGener.propTypes = {
//     setPage: PropTypes.func,
//     page: PropTypes.number,
//     searchValue: PropTypes.number,
//     setSearchValue: PropTypes.func,
// }

// FilterByGener.defaultProps = {
//     page: 1,
//     searchValue: 1,
//     setPage: () => { },
//     setSearchValue: () => { },
// }