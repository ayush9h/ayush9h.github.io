import { Icon } from "@iconify/react";
import {
  SectionDivider,
  SectionHeader,
  SectionWrapper,
} from "../elements/compstruct";

// dark: logo is hardcoded black, so flip it to white on a dark background
type Item = { name: string; icon?: string; dark?: boolean };

const stack: { label: string; items: Item[] }[] = [
  {
    label: "Languages",
    items: [
      { name: "Python", icon: "logos:python" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "C++", icon: "logos:c-plusplus" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Angular", icon: "logos:angular-icon" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "shadcn/ui", icon: "hugeicons:shadcn" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "FastAPI", icon: "logos:fastapi-icon" },
      { name: "Flask", icon: "logos:flask", dark: true },
      { name: "Node", icon: "logos:nodejs-icon" },
      { name: "Express", icon: "devicon:express", dark: true },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Redis", icon: "logos:redis" },
      { name: "Prisma", icon: "logos:prisma", dark: true },
      { name: "Elasticsearch", icon: "logos:elasticsearch" },
      { name: "Logstash", icon: "logos:logstash" },
      { name: "PyTest", icon: "devicon:pytest" },
    ],
  },
  {
    label: "AI & Agents",
    items: [
      { name: "LangChain", icon: "logos:langchain-icon", dark: true },
      {
        name: "LangGraph",
        icon: "thesvg-color:langgraph",
      },
      { name: "CrewAI", icon: "thesvg-color:crewai" },
      { name: "AzureAI", icon: "thesvg-color:azureai" },
      { name: "MCP", icon: "bxl:mcp" },
      { name: "Langfuse", icon: "logos:langfuse-icon" },
      { name: "Ragas", icon: "thesvg-color:ragas", dark: true },
      { name: "PyTorch", icon: "logos:pytorch-icon" },
      { name: "Tensorflow", icon: "logos:tensorflow" },
      { name: "Scikit-Learn", icon: "devicon:scikitlearn" },
    ],
  },
  {
    label: "Infra & Cloud",
    items: [
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Azure", icon: "logos:microsoft-azure" },
      {
        name: "Render",
        icon: "vscode-icons:file-type-light-render",
        dark: true,
      },
      { name: "Kubernetes", icon: "logos:kubernetes" },
      { name: "AWS", icon: "logos:aws", dark: true },
    ],
  },
  {
    label: "Tooling",
    items: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon", dark: true },
      { name: "Playwright", icon: "logos:playwright" },
      { name: "Claude", icon: "logos:claude-icon" },
      { name: "Gemini", icon: "devicon:gemini" },
      { name: "Solarwind", icon: "logos:solarwinds", dark: true },
      { name: "PostHog", icon: "logos:posthog-icon" },
      { name: "Celery", icon: "thesvg-color:celery" },
    ],
  },
];

export default function Stack() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader title="Stack" id="stack" className="py-1" />
      </SectionWrapper>

      <SectionWrapper>
        <div>
          {stack.map((group, i) => (
            <div
              key={group.label}
              className="flex flex-col md:flex-row border-b border-stone-200/50 dark:border-stone-900"
            >
              <div className="md:w-60 shrink-0 flex items-start gap-3 px-4 pt-4 md:py-4 md:border-r border-stone-200/50 dark:border-stone-900">
                <span className="font-mont text-sm tabular-nums text-stone-400 dark:text-stone-600">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="font-mont text-sm text-stone-950 dark:text-stone-100">
                  {group.label}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 p-4">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="flex items-center gap-1.5 rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 px-3 py-1 font-mont text-xs text-stone-600 dark:text-stone-300"
                  >
                    {item.icon && (
                      <Icon
                        icon={item.icon}
                        aria-hidden="true"
                        // height-locked so wide wordmarks keep their shape
                        className={`h-3.5 w-auto max-w-[2.75rem] shrink-0 ${item.dark ? "dark:brightness-0 dark:invert" : ""}`}
                      />
                    )}

                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionDivider />
    </>
  );
}
