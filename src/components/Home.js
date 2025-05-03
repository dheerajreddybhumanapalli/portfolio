import logo from '../profile_image.jpg'
import '../styles/Home.css'

export default function Home(){
    return (
        <div className="home">
            <header className="home-header">
                <img src={logo} className="home-logo" alt="logo" />
                <p>
                Dheeraj Reddy Bhumanapalli
                </p>
                Software Engineer
        </header>
        </div>
    )
}