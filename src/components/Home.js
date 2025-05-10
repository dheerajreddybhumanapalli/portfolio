import logo from '../profile_image.jpg'
import '../styles/Home.css'
import projects from '../data/Projects'
import CardList from './CardList'

export default function Home(){
    return (
        <div className="home">
            <header className="home-header">
                <img src={logo} className="home-logo" alt="logo" />
                <p>
                Hi, I'm Dheeraj Reddy Bhumanapalli
                </p>
                Software Engineer
            </header>
            <div className='projects'>
                <h1>Projects worked on</h1>
                <CardList cards={ projects } />
            </div>
        </div>
    )
}