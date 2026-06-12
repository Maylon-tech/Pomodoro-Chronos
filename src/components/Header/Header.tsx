import './Heading.css'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Chronos</div>
      
      <ul className="nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className={styles.iconContent}>
        SOCIAL
      </div>
    </div>
  )
}

export default Header
