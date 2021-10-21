import React from 'react'
import { changeHistory } from '../../actions';
import { useGameStore } from '../../context';
import MyButton from '../UI/Button/MyButton';

export default function HistorySteps() {
    const [{ history }, dispatch] = useGameStore();
    const historyShow = (item, i) => {
        dispatch(changeHistory(item))
    }

    return (
        <div className='history__lists'>
            {history.map((item, i) => {
                if (i) {
                    return <MyButton key={Date.now() + i} onClick={() => historyShow(item, i)}>Go to #{i}</MyButton>
                }
            })}
        </div>
    )
}
