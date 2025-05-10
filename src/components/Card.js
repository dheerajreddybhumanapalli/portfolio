import { useState } from "react"
import '../styles/Card.css'

export default function Card({ title, roles}){
    const [open, setOpen] = useState(false)
    return (
        <div className="card" onClick={() => setOpen(!open)}>
            <h2>{ title }</h2>
            {open &&
            <ul>
            {roles.map((role, role_index) => (
                <div key={role_index} style={{ margin: '25px'}}>
                    <h3>{ role.designation }</h3>
                    <h4>{ role.duration }</h4>
                    <ul>
                        {role.description.map((point, description_index) => (
                        <li key={description_index}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
            </ul>
            }
        </div>
    )
}