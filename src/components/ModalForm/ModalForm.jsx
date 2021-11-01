import React, { useState, } from 'react'
import { Typography, Modal, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import MyButton from '../../components/UI/Button/MyButton';
import { addUser, changeModalState } from '../../actions';
import Timer from '../Timer/Timer'
import { parseTime } from '../../utils';
import { changeBtnDisabled } from '../../actions';

export default function ModalForm() {
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0, });
    const { isOpenModal, registerData, isDisabled } = useSelector((state) => state.users)
    const dispatch = useDispatch();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #bebebe',
        borderRadius: '14px',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };
    const addNewUser = () => {

        dispatch(addUser({
            id: registerData.id,
            name: registerData.firstName,
            secondName: registerData.secondName,
            competition: registerData.competition,
            time: `${parseTime(time.m)}:${parseTime(time.s)}:${parseTime(time.ms)}`
        }))
        dispatch(changeModalState(false))
        dispatch(changeBtnDisabled({ start: false, stop: true, reset: true }))
        setTime({ ms: 0, s: 0, m: 0 })
    }

    const closeModal = () => {
        dispatch(changeModalState(false))
        setTime({ ms: 0, s: 0, m: 0 })
    }

    return (
        <Modal
            open={isOpenModal}
            onClose={closeModal}
        >
            <Box sx={{ ...style, width: 400 }}>
                <Typography variant='h4' components='h4' sx={{ textAlign: 'center' }}>Paticipant</Typography>
                <p>ID : {registerData.id}</p>
                <p>Participant : {registerData.firstName} {registerData.secondName}</p>
                <p>contests : {registerData.competition}</p>
                <Timer time={time} setTime={setTime} />
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 4 }}>
                    <MyButton onClick={closeModal} disabled={isDisabled.cancel}>Cancel</MyButton>
                    <MyButton onClick={addNewUser} disabled={isDisabled.save}>Save</MyButton>
                </Box>
            </Box>
        </Modal>
    )
}
