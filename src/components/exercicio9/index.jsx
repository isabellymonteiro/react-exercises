import { useEffect, useState } from 'react'
import UserCard from './UserCard'
import './index.css'
import exercicios from '@/exercicios'

function Exercicio9() {
  const [userList, setUserList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchUsers = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('https://random-data-api.com/api/users/random_user?size=10')

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      
      const data = await response.json()
      
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
      }))
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

	return (
    <>
      <h1 className='title'>{exercicios[8]}</h1>
      <button className="fetch__button" onClick={fetchUsers}>Fetch Random</button>
      {isLoading && <p className='users--loading'>Loading...</p>}
      {!isLoading && !error && (
        <ul className='users'>
          {userList}
        </ul>
      )}
      {!isLoading && error && (
        <p className='users--error'>{error}</p>
      )}
    </>
  )
}

export default Exercicio9
