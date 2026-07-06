export interface Role {
  designation: string;
  duration: string;
  description: string[];
}

export interface CardItem {
  title: string;
  roles: Role[];
}

export const projects: CardItem[] = [
  {
    title: "Compliance Platform on Political Contributions",
    roles: [
      {
        designation:
          "Django, React, AWS, Postgres, Elastic Search, Celery, Redis, RabbitMQ, Scrapy, Selenium",
        duration: "Feb 2025 – Present",
        description: [
          "Resolved critical production issues and documented key workflows in a legacy Django-React application with no prior documentation.",
          "Maintained and debugged a custom web scraping pipeline that collected political contribution data from public websites into Elasticsearch.",
          "Enforced data synchronization from Elasticsearch to AWS RDS triggered by platform object creation, improving data availability and consistency.",
        ],
      },
    ],
  },
  {
    title: "Intelligent Tutoring System with Adaptive Learning",
    roles: [
      {
        designation:
          "Langchain, Ollama, Scrapy, Guardrails, FastAPI, Streamlit",
        duration: "Oct 2024 – Dec 2024",
        description: [
          "Developed an educational chatbot using RAG architecture with Chroma DB, custom Scrapy pipelines, and Guardrails to ensure safe, relevant content.",
          "Enhanced LLM response quality with React Agents and Chain of Thought Self-Consistency, and built automated quiz generation for learning assessment.",
          "Designed scalable RESTful APIs with FastAPI and built a user-friendly Streamlit interface for seamless interaction between backend and frontend.",
        ],
      },
    ],
  },
  {
    title:
      "LLM-Powered Data Pipeline with Observability and Monitoring in a Containerized Environment",
    roles: [
      {
        designation:
          "Pyspark, Flask, Langchain, OpenLIT, Jaeger, Prometheus, Grafana",
        duration: "Mar 2024 – Jul 2024",
        description: [
          "Built an AWS-based Flask data pipeline using PySpark to process data and generate RAG-based LLM reports.",
          "Applied observability with OpenTelemetry (OpenLIT), Jaeger for tracing, and Prometheus-Grafana for real-time metrics and dashboards.",
          "Containerized and orchestrated multi-service architecture using Docker for scalable deployment.",
        ],
      },
    ],
  },
];

export const experiences: CardItem[] = [
  {
    title: "PalTech Consulting Pvt. Ltd.",
    roles: [
      {
        designation: "Associate Software Engineer",
        duration: "Jan 2025 – Present",
        description: [
          "Conducted detailed client demos for NVIDIA NIM agents, showcasing their functionality and explaining the workflow. Presented a hands-on example utilizing browser agents for web scraping, highlighting practical use cases and benefits.",
          "Currently leading the development of a project titled Compliance Platform on Political Contributions focusing on fixing production bugs and preparing documentations for the existing blackbox project.",
        ],
      },
      {
        designation: "Software Engineer Trainee",
        duration: "Jul 2024 – Jan 2025",
        description: [
          "Mastered full-stack development with frameworks including Flask and Django with React as frontend through intensive training programs, applying learned concepts to internal projects.",
          "Led fine-tuning implementations of Large Language Models (including MiniCPM) for client projects, and conducted technical training sessions to upskill team members on model optimization techniques.",
          "Developed and implemented Proof of Concepts (POCs) for internal projects utilizing ReAct agents and Advanced RAG concepts.",
        ],
      },
    ],
  },
  {
    title: "Ericsson",
    roles: [
      {
        designation: "Data Scientist Intern",
        duration: "Jan 2024 – Jul 2024",
        description: [
          "Assessed fairness and robustness in LLMs and ML/DL models using prompt engineering techniques and tools like Langchain.",
          "Implemented evaluation frameworks such as Langfuse and OpenLIT to generate and analyze fairness metrics.",
          "Contributed to ethical AI development in an industry setting and built a Grafana dashboard with Prometheus and Jaeger for system monitoring and tracing.",
        ],
      },
    ],
  },
];
