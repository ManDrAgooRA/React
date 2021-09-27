import React, { useState, useMemo } from 'react'
import userData from './userData'
import UserList from './Components/UserList'
import Form from './Components/Form';
import MyInput from './Components/UI/input/MyInput';
import MySelect from './Components/UI/select/MySelect';
import MyModal from './Components/UI/modal/MyModal';

import './App.css';
import MyButton from './Components/UI/button/MyButton';

function App() {
  const [users, setUsers] = useState([...userData]);
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [modal, setModal] = useState(false);
  const [modalUser, setModalUser] = useState('')

  const createUser = (newUser) => {
    setUsers([...users, newUser])
  }

  const sortItems = (sort) => {
    setSelectedSort(sort)
    if (sort === 'ASD') {
      setUsers([...users].sort((a, b) => {
        return a['age'] - b['age']
      }))
    } else {
      setUsers([...users].sort((a, b) => {
        return b['age'] - a['age']
      }))
    }
  }


  const filteredItems = useMemo(() => {
    return (users.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase())))
  }, [searchQuery, users])

  const usersFiltered = filteredItems;

  const reset = () => {
    setSelectedSort('')
    setSearchQuery('')
    setUsers([...userData])
  }

  return (
    <div className="App">
      <MyModal visible={modal} setVisible={setModal} >
        {modalUser}
      </MyModal>
      <div className="header">
        <div className="container">
          <MyInput
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder='Поиск'
          />

          <MySelect
            value={selectedSort}
            onChange={sortItems}
            defaultValue='Сортировка по возрасту'
            options={[
              { value: 'ASD', name: 'По Возрастанию' },
              { value: 'DSA', name: 'По Убыванию' },
            ]}
          />

          <MyButton onClick={reset} name={'reset'} style={{ margin: '10px' }} />

        </div>
      </div>
      <div className="container">
        <Form formName={'Добавить пользователя'} create={createUser} />
        <UserList user={usersFiltered} setVisible={setModal} modalUser={setModalUser} />
      </div>
    </div >
  );
}

export default App;
