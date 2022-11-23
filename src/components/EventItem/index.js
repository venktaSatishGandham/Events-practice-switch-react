import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem

/* Write your code here
import './index.css'

const EventItem = props => {
  const {eachEventItem, onChangeLeftContainer} = props
  const {name, imageUrl, location, registrationStatus} = eachEventItem
  const onClickImage = () => {
    onChangeLeftContainer(registrationStatus)
  }
  return (
    <li className="single-event-item">
      <button type="button" className="button">
        <img
          src={imageUrl}
          alt="event"
          onClick={onClickImage}
          className="event-item-image"
        />
      </button>
      <p className="single-event-item-heading">{name}</p>
      <p className="single-event-item-location">{location}</p>
    </li>
  )
}

export default EventItem

//
*/
