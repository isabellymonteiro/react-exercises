import UserCard from './UserCard'
import './index.css'
import { useEffect, useState } from 'react'

function Exercicio9() {
  const [userList, setUserList] = useState('')

  const fetchUsers = () => {
    fetch('https://random-data-api.com/api/users/random_user?size=10')
    .then(response => {
      return response.json()
    }).then(data => {
      setUserList(data.map(user => {
        return (
          <UserCard 
            key={user.id}
            id={user.id}
            firstName={user.first_name}
            lastName={user.last_name}
            gender={user.gender}
            profession={user.employment.title}
            email={user.email}
          />
        )
      })
    )})
  }

  useEffect(() => {
    fetchUsers()
  }, [])

	return (
    <>
      <h1 className='title'>Exercicio9</h1>
      <button className="fetch__button" onClick={fetchUsers}>Fetch Random</button>
      <ul className='users'>
        {userList}
      </ul>
    </>
  )
}

export default Exercicio9
