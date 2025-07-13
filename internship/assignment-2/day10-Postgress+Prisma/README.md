<head>
  <meta charset="UTF-8">
</head>
<body>

  <h1>📅 Day 10 – Prisma + PostgreSQL Integration</h1>

  <h2>✅ Overview</h2>
  <p>
    On <strong>Day 10</strong>, I successfully integrated <strong>Prisma ORM</strong> with a <strong>PostgreSQL</strong> database using the <strong>Prisma Data Platform</strong>. 
    This task involved initializing Prisma, configuring the schema, generating the Prisma client, and running database migrations. 
    I also explored tools like <strong>TablePlus</strong> to visualize and inspect the database.
  </p>

  <h2>🚀 What I Accomplished</h2>
  <ul>
    <li>Installed Prisma and initialized a new Prisma project:
      <pre><code>npx prisma init</code></pre>
    </li>
    <li>Generated a <code>DATABASE_URL</code> using Prisma Data Platform</li>
    <li>Configured the <code>.env</code> file:
      <pre><code>DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=..."</code></pre>
    </li>
    <li>Defined models in <code>schema.prisma</code></li>
    <li>Generated Prisma Client:
      <pre><code>npx prisma generate</code></pre>
    </li>
    <li>Ran database migrations:
      <pre><code>npx prisma migrate dev --name init</code></pre>
    </li>
  </ul>

  <h2>⚒️ Tools & Tech Stack</h2>
  <ul>
    <li>Prisma ORM</li>
    <li>PostgreSQL</li>
    <li>Prisma Accelerate (Data Proxy)</li>
    <li>TablePlus – GUI for DB inspection</li>
    <li>Node.js & VS Code Terminal</li>
  </ul>

  <h2>🧩 Challenges Faced</h2>
  <ul>
    <li>Encountered <code>P1010: User was denied access</code> error due to API key issues</li>
    <li>Resolved incorrect <code>.env</code> configuration</li>
    <li>Clarified correct order of Prisma CLI operations</li>
    <li>Tested Prisma-Postgres connection using TablePlus</li>
  </ul>

  <h2>🧠 Key Learnings</h2>
  <ul>
    <li>How to securely connect Prisma to PostgreSQL using Data Proxy</li>
    <li>Understanding and securing environment variables</li>
    <li>Mastered Prisma CLI commands and troubleshooting</li>
    <li>Used GUI tools like TablePlus to verify DB operations</li>
  </ul>

  <h2>📁 Folder Structure</h2>
  <pre>
prisma-connections/
├── prisma/
│   └── schema.prisma
├── .env
├── package.json
├── node_modules/
└── ...
  </pre>

  <h2>✅ Current Status</h2>
  <p><strong>Prisma + PostgreSQL integration completed successfully.</strong> Ready for queries and further development.</p>

</body>
