import styles from './Header.module.css'

function Header() {
    const myStyle = {color:"green", backgroundColor:"yellow"}

    return <> 
        {/* With inline style */}
        <h1 style={{color:"red", backgroundColor:"blue"}}>Hello styling with inline style</h1>

        {/* Style with const value  */}
        <h1 style={myStyle}>Hello styling with const value style</h1> 

        <h1 className={styles.bigBlue}>Hello styling with module level css style</h1>

        <p>Add a little style</p>
    </>
}
export default Header;