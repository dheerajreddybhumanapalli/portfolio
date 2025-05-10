const projects = [
    {
        title: "Compliance Platform on Political Contributions",
        roles: [
            {
                designation: "Django, React, AWS, Postgres, Elastic Search, Celery, Redis, RabbitMQ, Scrapy, Selenium",
                duration: "Feb 2025 – Present",
                description: [
                    "Resolved critical production issues and documented key workflows in a legacy Django-React application with no prior documentation.",
                    "Maintained and debugged a custom web scraping pipeline that collected political contribution data from public websites into Elasticsearch.",
                    "Enforced data synchronization from Elasticsearch to AWS RDS triggered by platform object creation, improving data availability and consistency."
                ]
            }
        ]
    },
    {
        title: "Intelligent Tutoring System with Adaptive Learning",
        roles: [
            {
                designation: "Langchain, Ollama, Scrapy, Guardrails, FastAPI, Streamlit",
                duration: "Oct 2024 – Dec 2024",
                description: [
                    "Developed an educational chatbot using RAG architecture with Chroma DB, custom Scrapy pipelines, and Guardrails to ensure safe, relevant content.",
                    "Enhanced LLM response quality with React Agents and Chain of Thought Self-Consistency, and built automated quiz generation for learning assessment.",
                    "Designed scalable RESTful APIs with FastAPI and built a user-friendly Streamlit interface for seamless interaction between backend and frontend."
                ]
            }
        ]
    },
    {
        title: "LLM-Powered Data Pipeline with Observability and Monitoring in a Containerized Environment",
        roles: [
            {
                designation: "Pyspark, Flask, Langchain, OpenLIT, Jaeger, Prometheus, Grafana",
                duration: "Mar 2024 – Jul 2024",
                description: [
                    "Built an AWS-based Flask data pipeline using PySpark to process data and generate RAG-based LLM reports.",
                    "Applied observability with OpenTelemetry (OpenLIT), Jaeger for tracing, and Prometheus-Grafana for real-time metrics and dashboards.",
                    "Containerized and orchestrated multi-service architecture using Docker for scalable deployment."
                ]
            }
        ]
    }
]

export default projects