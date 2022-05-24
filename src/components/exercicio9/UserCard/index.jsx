import './index.css'

const UserCard = ({ id, firstName, lastName, gender, profession, email }) => {
  return (
    <li className='userCard'>
      <div className='userCard__content'>
        <div className='userCard__content--front'>
          <img className='userCard__image' src={`https://robohash.org/${id}.png`} alt={`${firstName} ${lastName} profile picture`}></img>
          <div className='userCard__heading'>
            <h2 className='userCard__name'>{firstName} {lastName}</h2>
            <p className='userCard__gender'>{gender}</p>
          </div>
          <p className='userCard__profession'>{profession}</p>
        </div>
        <div className='userCard__content--back'>
          <div className='userCard__contact'>
            <h3 className='userCard__contact--title'>Contact</h3>
            <p className='userCard__email'>{email}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default UserCard