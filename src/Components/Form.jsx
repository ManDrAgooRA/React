import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';


function MyForm({ formName, create }) {

    const [formValue, setFormValue] = useState({
        name: '',
        age: '',
        balance: '',
        gender: 'male',
        picture: '',
    })

    const addNewUser = (e) => {
        e.preventDefault();

        if (formValue.name && formValue.age && formValue.balance && formValue.picture) {
            const newUser = {
                ...formValue,
                balance: `$${formValue.balance}`,
                id: Date.now()
            }

            create(newUser)
            setFormValue({
                name: '',
                age: '',
                gender: 'male',
                balance: '',
                picture: '',
            })
        } else {
            alert('Заполни форму полностью');
        }
    }

    return (
        <form className='myForm'>
            <h2>{formName}</h2>
            <MyInput
                value={formValue.name}
                onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
                type='text'
                placeholder='Enter name'
                required
            />
            <MyInput
                required
                value={formValue.age}
                onChange={(e) => setFormValue({ ...formValue, age: e.target.value })}
                type='number'
                placeholder='Enter age'
            />
            <MyInput
                required
                value={formValue.balance}
                onChange={(e) => setFormValue({ ...formValue, balance: e.target.value })}
                type='number'
                placeholder='Enter balance'
            />
            <MyInput
                required
                value={formValue.picture}
                onChange={(e) => setFormValue({ ...formValue, picture: e.target.value })}
                type='text'
                placeholder='Enter img'
            />

            <label>
                <MyInput
                    onChange={(e) => setFormValue({ ...formValue, gender: e.target.value })}
                    type='radio'
                    placeholder='Enter gender'
                    name='gender' value='male'
                    checked
                />
                Male
            </label>
            <label>
                <MyInput
                    onChange={(e) => setFormValue({ ...formValue, gender: e.target.value })}
                    type='radio'
                    placeholder='Enter gender'
                    name='gender'
                    value='female'
                />
                Female
            </label>

            <MyButton name={formName} onClick={addNewUser} />
        </form>
    )
}

export default MyForm
