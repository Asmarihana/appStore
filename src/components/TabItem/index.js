import './index.css'

const TabItem = props => {
  const {details, ButtonType, isActive} = props
  const {tabId, displayText} = details
  const selectButton = () => {
    ButtonType(tabId)
  }
  const buttonStyle = isActive ? 'button' : 'buttons'
  return (
    <li>
      <button className={buttonStyle} type="button" onClick={selectButton}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
