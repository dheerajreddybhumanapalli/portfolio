import experiences from '../data/Experiences.js'
import '../styles/Experience_Contact.css'
import CardList from './CardList.js'

export default function Experience(){
    return (
        <>
            <div className='base'>
                <h1>Experience</h1>
            </div>
            <div className='card-wrapper'>
                <CardList cards={ experiences }/>
            </div>
        </>
    )
}