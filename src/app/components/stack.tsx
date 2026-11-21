import { Icon } from "@iconify/react";
import {
  SectionDivider,
  SectionHeader,
  SectionWrapper,
} from "../elements/compstruct";

type Item = { name: string; icon?: string; dark?: "invert" | "white" };

const stack: { label: string; items: Item[] }[] = [
  {
    label: "Languages",
    items: [
      { name: "Python", icon: "logos:python", dark: "white" },
      { name: "TypeScript", icon: "logos:typescript-icon", dark: "white" },
      { name: "JavaScript", icon: "logos:javascript", dark: "white" },
      { name: "C++", icon: "logos:c-plusplus", dark: "white" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", icon: "logos:react", dark: "white" },
      { name: "Next.js", icon: "logos:nextjs-icon", dark: "white" },
      { name: "Angular", icon: "logos:angular-icon", dark: "white" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", dark: "white" },
      { name: "shadcn/ui", icon: "hugeicons:shadcn", dark: "white" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "FastAPI", icon: "logos:fastapi-icon", dark: "white" },
      { name: "Flask", icon: "logos:flask", dark: "white" },
      { name: "Node", icon: "logos:nodejs-icon", dark: "white" },
      { name: "Express", icon: "devicon:express", dark: "white" },
      { name: "PostgreSQL", icon: "logos:postgresql", dark: "white" },
      { name: "MongoDB", icon: "logos:mongodb-icon", dark: "white" },
      { name: "Redis", icon: "logos:redis", dark: "white" },
      { name: "Prisma", icon: "logos:prisma", dark: "white" },
      { name: "Elasticsearch", icon: "logos:elasticsearch", dark: "white" },
      { name: "Logstash", icon: "logos:logstash", dark: "white" },
      { name: "PyTest", icon: "devicon:pytest", dark: "white" },
    ],
  },
  {
    label: "AI & Agents",
    items: [
      { name: "LangChain", icon: "logos:langchain-icon", dark: "white" },
      {
        name: "LangGraph",
        icon: "thesvg-color:langgraph",
        dark: "white",
      },
      { name: "CrewAI", icon: "thesvg-color:crewai", dark: "white" },
      { name: "AzureAI", icon: "thesvg-color:azureai", dark: "white" },
      { name: "MCP", icon: "bxl:mcp", dark: "white" },
      { name: "PyTorch", icon: "logos:pytorch-icon", dark: "white" },
      { name: "Tensorflow", icon: "logos:tensorflow", dark: "white" },
      { name: "Scikit-Learn", icon: "devicon:scikitlearn", dark: "white" },
    ],
  },
  {
    label: "Infra & Cloud",
    items: [
      { name: "Docker", icon: "logos:docker-icon", dark: "white" },
      { name: "Azure", icon: "logos:microsoft-azure", dark: "white" },
      {
        name: "Render",
        icon: "vscode-icons:file-type-light-render",
        dark: "white",
      },
      { name: "Kubernetes", icon: "logos:kubernetes", dark: "white" },
      { name: "AWS", icon: "logos:aws", dark: "white" },
    ],
  },
  {
    label: "Tooling",
    items: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon", dark: "invert" },
      { name: "Playwright", icon: "logos:playwright" },
      { name: "Claude", icon: "logos:claude-icon" },
      { name: "PostHog", icon: "logos:posthog-icon" },
      { name: "Celery", icon: "thesvg-color:celery" },
    ],
  },
];

const darkClass = (dark: Item["dark"]) =>
  dark === "invert"
    ? "dark:invert"
    : dark === "white"
      ? "dark:brightness-0 dark:invert"
      : "";

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
                    className="group flex items-center gap-1.5 rounded-full border border-stone-200 dark:border-stone-800 px-3 py-1 font-mont text-xs text-stone-600 dark:text-stone-300"
                  >
                    {item.icon && (
                      <Icon
                        icon={item.icon}
                        aria-hidden="true"
                        // height-locked so wide wordmarks keep their shape
                        className={`h-3.5 w-auto max-w-[2.75rem] shrink-0 grayscale group-hover:grayscale-0 transition-[filter] duration-300 ${darkClass(
                          item.dark,
                        )}`}
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
