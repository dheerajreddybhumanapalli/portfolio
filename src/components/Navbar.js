import { useState, useEffect } from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'

export function Navbar(){
    const navigate = useNavigate()
    const [lightMode, setLightMode] = useState(false)
    useEffect(() => {
        document.body.classList.toggle("dark-mode", !lightMode);
        document.body.classList.toggle("light-mode", lightMode);
      }, [lightMode]);
    return (
        <div className="navbar">
            <div className="navbar-right">
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/experience')}>Experience</button>
                <button onClick={() => window.open(`${process.env.PUBLIC_URL}/resume.pdf`, '_blank')}>Resume</button>
                <button onClick={() => navigate('/contact')}>Contact</button>
                <label className="switch">
                <span className="label-text">Light</span>
                <input 
                    type="checkbox" 
                    checked={lightMode} 
                    onChange={() => setLightMode(!lightMode)} 
                />
                <span className="slider round"></span>
                </label>
            </div>
        </div>

    )
}