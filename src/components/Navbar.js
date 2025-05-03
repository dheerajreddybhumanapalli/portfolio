import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'

export function Navbar(){
    const navigate = useNavigate()
    return (
        <div className="navbar">
            <div className="navbar-right">
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/experience')}>Experience</button>
                <button onClick={() => window.open(`${process.env.PUBLIC_URL}/resume.pdf`, '_blank')}>Resume</button>
                <button onClick={() => navigate('/contact')}>Contact</button>
            </div>
        </div>

    )
}