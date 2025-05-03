import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'

export function Navbar(){
    const navigate = useNavigate()
    return (
        <div className="navbar">
            <div className="navbar-right">
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/experience')}>Experience</button>
                <button onClick={() => window.open('resume.pdf', '_blank')}>Resume</button>
                {/* <a href="src/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <button>Resume</button>
                </a> */}
                {/* <button onClick={() => <Document file={'/Users/dheerajbhumanapalli/portfolio/src/resume.pdf'}></Document>}>Resume</button> */}
                {/* <button onClick={() => <iframe src='/Users/dheerajbhumanapalli/portfolio/src/resume.pdf'></iframe>}>Resume</button> */}
                <button onClick={() => navigate('/contact')}>Contact</button>
            </div>
        </div>

    )
}