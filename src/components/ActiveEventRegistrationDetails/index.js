import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="no-active-event-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationsClosedView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosedView()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails

/* Write your code here

import './index.css'

const isEventRegisteredValues = {
  registered: 'REGISTERED',
  notYetRegistered: 'YET_TO_REGISTER',
  closed: 'REGISTRATIONS_CLOSED',
  notChecked: '',
}

const ActiveEventRegistrationDetails = props => {
  const {isChecking} = props
  console.log(isChecking)
  const REGISTRATIONS_CLOSED = () => {
    console.log('closed')
    return (
      <div className="active-event-container">
        <img
          alt="registrations closed"
          className="closed"
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        />
        <h1>Registrations Are Closed Now!</h1>
        <p>Stay tuned. We will reopen the registrations are very soon </p>
      </div>
    )
  }

  const REGISTER = () => {
    console.log('registered')
    return (
      <div className="active-event-container">
        <img
          alt="registered"
          className="registered"
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        />
        <h1>You have already registered for the event</h1>
      </div>
    )
  }

  const YET_TO_REGISTER = () => {
    console.log('Not yet')
    return (
      <div className="active-event-container">
        <img
          alt="yet to register"
          className="yet-to-register"
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        />
        <p>
          A live performance brings so much to your relationship with dance{' '}
        </p>
        <button type="button">Register Here</button>
      </div>
    )
  }

  const nothingIsClicked = () => (
    <div>
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  switch (isChecking) {
    case isEventRegisteredValues.registered:
      return REGISTER()
    case isEventRegisteredValues.notYetRegistered:
      return YET_TO_REGISTER()
    case isEventRegisteredValues.closed:
      return REGISTRATIONS_CLOSED()
    case isEventRegisteredValues.notChecked:
      return nothingIsClicked()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
*/
