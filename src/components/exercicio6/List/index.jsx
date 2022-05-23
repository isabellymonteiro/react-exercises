import './index.css'

const List = ({ listData }) => {
  const listItems = listData.map((item, index) => {
    return (
      <tr key={index} className="exercise6__list__item__container">
        <td className="exercise6__list__item">{item.icon} {item.name}</td>
      </tr>
    )
  })

  return (
    <table className="exercise6__list">
      <tbody className="exercise6__listBody">
        {listItems}
      </tbody>
    </table>
  )
}

export default List