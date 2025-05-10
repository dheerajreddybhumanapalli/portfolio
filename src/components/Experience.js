import '../styles/Experience_Contact.css'
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
                roles={[
                    {
                        designation:"Associate Software Engineer",
                        duration: "Jan 2025 – Present",
                        description: [
                            "Conducted detailed client demos for NVIDIA NIM agents, showcasing their functionality and explaining the workflow. Presented a hands-on example utilizing browser agents for web scraping, highlighting practical use cases and benefits.",
                            "Currently leading the development of a project titled Compliance Platform on Political Contributions focusing on (fixing production bugs and preparing documentations for the existing blackbox project)."
                        ]
                    },
                    {
                        designation: "Software Engineer Trainee",
                        duration: "Jul 2024 – Jan 2025",
                        description: [
                            "Mastered full-stack development with frameworks including Flask and Django with React as frontend through intensive training programs, applying learned concepts to internal projects.",
                            "Led fine-tuning implementations of Large Language Models (including MiniCPM) for client projects, and conducted technical training sessions to upskill team members on model optimization techniques.",
                            "Developed and implemented Proof of Concepts (POCs) for internal projects utilizing ReAct agents and Advanced RAG concepts."
                        ]
                    }
                ]}
                />
                <Card 
                title="Ericsson"
                roles = {[
                    {
                        designation: "Data Scientist Intern",
                        duration: "Jan 2024 – Jul 2024",
                        description: [
                            "Assessed fairness and robustness in LLMs and ML/DL models using prompt engineering techniques and tools like Langchain.",       
                            "Implemented evaluation frameworks such as Langfuse and OpenLIT to generate and analyze fairness metrics.",
                            "Contributed to ethical AI development in an industry setting and built a Grafana dashboard with Prometheus and Jaeger for system monitoring and tracing."
                        ]
                    }
                ]}
                />
            </div>
        </>
    )
}