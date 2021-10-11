import React, { useState, useRef, useContext, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Context } from '../context';
import Form from './Form';
import { Box } from '@material-ui/system';
import MyInput from './UI/MyInput/MyInput';
import MyButton from './UI/MyButton/MyButton';
import FormContainer from './FormContainer';
import BtnContainer from './BtnContainer';

function Step3({ children, ...props }) {
    const { dispatch, state } = useContext(Context);
    const fileInputRef = useRef('input');
    const [image, setImage] = useState();

    const { handleSubmit } = useForm({
        mode: 'onBlur',
    })

    const onSubmit = (data) => {
        dispatch({
            type: 'increment',
        })
    };

    const nextStep = () => {
        dispatch({
            type: 'increment',
        })
    };

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                dispatch({
                    type: 'setImage',
                    payload: reader.result,
                })

            };
            reader.readAsDataURL(image);
        } else {
        }
    }, [image]);

    const imageHandler = (e) => {
        const file = e.target.files[0];
        if (file && file.type.substr(0, 5) === "image") {

            dispatch({
                type: 'setImage',
                payload: file
            })

            dispatch({
                type: 'setDisabledPhoto',
            })

            setImage(file);

        } else {

            dispatch({
                type: 'setImage',
                payload: null
            })
            setImage(null);

        }
    }

    return (
        <>
            <FormContainer
                sx={{
                    display: 'flex',
                    width: '300px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    mx: "auto", borderRadius: '20px', border: 1,
                    p: '15px',
                    minHeight: '300px'
                }}
            >

                <Box Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, }}>
                    <img src={state.image} alt="img" accept="image/*" style={{ width: '150px', height: '150px', }} />
                </Box>

                <MyButton sx={{ margin: 'auto', width: '200px', my: 2 }} onClick={(event) => {
                    event.preventDefault();
                    fileInputRef.current.click();
                }}>Upload photo</MyButton>

                <Form onSubmit={handleSubmit(onSubmit)}>

                    <MyInput
                        ref={fileInputRef}
                        id='file'
                        type='file'
                        name='file'
                        accept="image/*"
                        onChange={(e) => {
                            imageHandler(e)
                        }}
                        style={{ display: "none" }}
                    />
                </Form>

                <BtnContainer>
                    <MyButton onClick={() => {
                        dispatch({
                            type: 'decrement'
                        })
                    }}>Prev</MyButton>

                    <MyButton type='submit'
                        disabled={state.isDisabledPhoto}
                        onClick={nextStep}
                    >Next</MyButton>
                </BtnContainer>


            </FormContainer>
        </>
    )
}

export default Step3
