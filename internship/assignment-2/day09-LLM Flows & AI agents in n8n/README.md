
# Day 9 – n8n Agents: Learning & Implementation

## ✅ What I Did

Today I focused on mastering the usage of **n8n Agents** with a variety of tools, by watching video tutorials and performing hands-on experimentation. My learning and practice revolved around the following areas:

### 👨‍💼 Agents I Created & Tested:

- **Supervisor Agent**
  - Controls and delegates tasks to other agents
- **Email Agent**
  - Sends, reads, and replies to emails using Gmail API
- **Contacts Agent**
  - Finds existing contacts by name
  - Creates new contacts with structured info
- **Calendar Agent**
  - Retrieves events from Google Calendar
  - Creates new events dynamically based on prompt data
- **RAG Agent (Retrieval-Augmented Generation)**
  - Fetches context or documents from an internal/external source
  - Provides smarter, context-aware answers by grounding the prompt in retrieved data

---

## 🔧 Tools & Integrations Used

- ✅ **n8n (Self-Hosted)** — Local instance without time limits
- ✅ **Google APIs** — Gmail, Calendar, and Contacts (OAuth 2.0)
- ✅ **Grok Agent** — LLM-powered assistant to interpret natural prompts
- ✅ **Function Nodes** — Transform and map structured JSON
- ✅ **RAG** — To query document context and pass to agents for accurate responses

---

## 🧠 Key Learnings & Capabilities

- Seamless agent orchestration via Supervisor agent
- Prompt-based JSON generation that powers tool actions
- Error handling for OAuth permissions (`403`, `access_denied`)
- RAG usage to provide factual context into agent-driven flows
- Building multi-tool workflows using:
  - Gmail API (send/read/reply)
  - Contacts API (search/create)
  - Calendar API (get/create events)
- Learned how to resolve tool connection issues and improve agent-tool communication flow

---

## 🧪 Results

- 💬 Agents were successfully able to **read emails**, **reply with context**, **create contacts**, and **manage calendar events**
- ✅ Successfully ran **multiple prompts through RAG** to enrich agent responses
- 🧠 Gained deeper understanding of agent structure, prompt templating, and error flows
- 🛠️ Built modular, reusable workflows using Grok + Function + Tool patterns

---

## 🧭 Challenges Faced

- Delay during local save and execution (resolved)
- OAuth 403 error for Gmail (resolved via proper redirect URI + consent)
- Grok Agent failed to pass data to tools initially (fixed by prompt adjustment)
- RAG caused failed generations — solved by switching model and fixing formatting


## 🚀 Next Steps

- Build a **Meeting Scheduler** by chaining Calendar + Email agents
- Integrate **external APIs** using HTTP Request node + Grok
- Extend RAG to support file-based search
- Explore error recovery and fallback responses in agent flows
