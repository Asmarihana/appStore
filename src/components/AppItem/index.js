import './index.css'

const AppItem = props => {
  const {details} = props
  const {appName, imageUrl} = details
  return (
    <li className="AppCard">
      <img src={imageUrl} alt={appName} className="appSize" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
