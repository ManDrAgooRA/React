import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector, useDispatch } from 'react-redux';
import FilterByGener from './Filters/FilterByGener';
import FilterByLanguage from './Filters/FilterByLanguage';

export default function FilterContainer() {
    const { selectedGener } = useSelector((state) => state.movies)

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
                <FilterByGener />
                <FilterByLanguage />

            </Accordion>
        </>
    )
}
