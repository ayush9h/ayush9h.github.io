export function GET() {
  const content = `
    # Ayush Kumar

> Backend Engineer focused on agentic AI systems, RAG pipelines, workflow automation, and scalable backend infrastructure.

- [Github](https://github.com/ayush9h) 
- [Linkedin](https://www.linkedin.com/in/ayush-kumar-88b883239/) 
- [LeetCode](https://leetcode.com/u/ayukr_2002/) 
- [Codeforces](https://codeforces.com/profile/ayush2025/)


## About

Backend engineer building:
- Agentic AI systems
- RAG pipelines
- Multi-agent workflows
- Enterprise automation systems
- Backend APIs and infrastructure

Experienced with:
- Python
- FastAPI
- LangGraph
- LangChain
- Redis
- PostgreSQL
- Celery
- ReactJS

Focus areas:
- AI workflow orchestration
- Retrieval-augmented generation (RAG)
- Enterprise AI assistants
- Backend scalability
- Automation systems
- LLM integrations

Currently contributing to an enterprise AI assistant under the Office of the CIO for:
- Finance workflows
- HR workflows
- Legal workflows
- CXO analytics
- Enterprise automation


## Work Experience

## Larsen & Toubro Technology Services
Role: Backend Developer
Duration: July 2025 – Present

Work:
- Building enterprise agentic AI systems
- Backend APIs and workflow orchestration
- Automation pipelines
- Analytics integrations

## Centific Global Technologies
Role: Associate Application Engineer Intern
Duration: October 2024 – June 2025

Work:
- AI engineering
- Backend development
- Workflow automation
- Hackathon-based innovation projects


## Certifications & Achievements

- MLH Hackhound Winner (AI/ML Category)
- Docker Certification
- DeepLearning.AI Agentic AI Certification
- Selected as Application Engineer Intern at Centific after hackathon evaluation


## Projects

## LinkedIn Post Automator
Repository:
- https://github.com/ayush9h/linkedin-post-automater

Tech Stack:
- ReactJS
- AutoGen
- Redis
- Celery

Description:
Automates LinkedIn content generation and posting workflows using AI agents.

---

## Stable SAM
Repository:
- https://github.com/sankadash/StableSAM

Tech Stack:
- Python
- Stable Diffusion
- Segment Anything Model (SAM)
- Streamlit

Description:
Image segmentation and generative AI experimentation platform.

---

## Legal Digest
Repository:
- https://github.com/ayush9h/LegalDigest

Tech Stack:
- Python
- NLTK
- LLMs
- Data Visualization
- Streamlit

Description:
Legal document summarization and digest generation system using NLP and LLM pipelines.

---

# Skills

## Backend
- FastAPI
- REST APIs
- Celery
- Redis
- PostgreSQL

## AI Engineering
- LangGraph
- LangChain
- RAG
- Multi-Agent Systems
- LLM Applications

## Frontend
- ReactJS
- Next.js

## Infrastructure
- Docker
- Deployment
- Workflow orchestration


# Interests

- Agentic AI
- AI infrastructure
- Workflow automation
- Retrieval systems
- Scalable backend systems
- Product engineering
`;

  return new Response(content.trim(), {
    headers: { "Content-Type": "text/plain" },
  });
}
