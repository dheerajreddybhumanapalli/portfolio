export default function Card({ title, designation, duration, description}){
    return (
        <div className="card">
            <h2>{ title }</h2>
            <div style={{ margin: '25px'}}>
                <h3>{ designation }</h3>
                <h4>{ duration }</h4>
                <ul>
                    {description.map((point, index) => (
                    <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}