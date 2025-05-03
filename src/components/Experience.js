import '../styles/Experience_Contact.css'
// import ExperienceTimeline from './Timeline'
import Card from './Card'

export default function Experience(){
    return (
        <>
            <div className='base'>
                <h1>Experience</h1>
            </div>
            <div className='card-wrapper'>
                <Card 
                title="PalTech Consulting Services Pvt. Ltd."
                designation="Associate Software Engineer"
                duration="Jan 2025 – Present"
                description={[
                    "Description point 1",
                    "Description point 2",
                    "Description point 3"
                ]}
                />
                <Card 
                // title="PalTech Consulting Services Pvt. Ltd."
                designation="Software Engineer Trainee"
                duration="Jul 2024 – Jan 2025"
                description={[
                    "Description point 1",
                    "Description point 2",
                    "Description point 3"
                ]}
                />
                <Card 
                title="Ericsson"
                designation="Data Scientist Intern"
                duration="Jan 2024 – Jul 2024"
                description={[
                    "Description point 1",
                    "Description point 2",
                    "Description point 3"
                ]}
                />
            </div>
        </>
    )
}