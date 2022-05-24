import Image from 'next/image'
import profilepic from '../temp/profilepic.jpeg'
import { BsPerson } from 'react-icons/bs'
const style = {
    wrapper: `h-20 w-screen bg-blue-600 flex md:justify-around items-center px-60 fixed z-20`,
    leftmenu: `flex gap-3`,
    logo: `text-black italic text-sans text-4xl`,
    menuitem: `text-white bg-black text-2xl p-3 rounded-full flex items-center mx-4 cursor-pointer`,
    rightmenu: `flex gap-3 items-center`,
    profilepic: `h-10 w-10 rounded-full`,
    name: `italic text-sans text-2xl`

}
const currentAccount = ''


const Navbar = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.leftmenu}>
            <div className={style.logo}>WEBER</div>
            <div className={style.menuitem}>Ride</div>
            <div className={style.menuitem}>Drive</div>
            <div className={style.menuitem}>More</div>
        </div>
        <div className={style.rightmenu}>
            <div className={style.menuitem}>Ride</div>
            
            <div className={style.menuitem}>More</div>
            <div className={style.name}>Siddharth</div>
            <div className={style.profilepicture}>
                <Image
                className={style.profilepic}
                src={profilepic}
                height={40}
                width={40}/>
            </div>
            {currentAccount ? (
          <div>
            {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
          </div>
        ) : (
          <div className={style.loginButton} onClick={() => connectWallet()}>
            <BsPerson />
            <span className={style.loginText}>Log in</span>
          </div>
        )}
         </div>  
         
         </div>  
         
    
  )
}

export default Navbar