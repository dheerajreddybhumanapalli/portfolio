import logo from '../profile_image.jpg'
import '../styles/Home.css'
import Card from './Card'

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
            <div className='projects'>
                <Card 
                    title="Project 1"
                    designation="Tech Stack 1"
                    duration="xxx xxxx – xxx xxxx"
                    description={[
                        "Description point 1",
                        "Description point 2",
                        "Description point 3"
                    ]}
                />
                <Card 
                    title="Project 2"
                    designation="Tech Stack 2"
                    duration="xxx xxxx – xxx xxxx"
                    description={[
                        "Description point 1",
                        "Description point 2",
                        "Description point 3"
                    ]}
                />
                <Card 
                    title="Project 3"
                    designation="Tech Stack 3"
                    duration="xxx xxxx – xxx xxxx"
                    description={[
                        "Description point 1",
                        "Description point 2",
                        "Description point 3"
                    ]}
                />
            </div>
        </div>
    )
}