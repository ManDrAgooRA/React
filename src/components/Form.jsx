import React, { useContext } from 'react';
import { Context } from '../context';

function Form({ children, ...props }) {
    const { state } = useContext(Context);

    return (
        <form className={state.darkTheme ? 'active' : ''} {...props}>
            {children}
        </form>
    )
}

export default Form
