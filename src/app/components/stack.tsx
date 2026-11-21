import StackIcon from "../elements/stack-icon";
import { type StackIconName } from "../elements/stack-icons";
import {
  SectionDivider,
  SectionHeader,
  SectionWrapper,
} from "../elements/compstruct";

const stack: {
  label: string;
  items: { name: string; icon?: StackIconName }[];
}[] = [
  {
    label: "Languages",
    items: [
      { name: "Python", icon: "python" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "js" },
      { name: "C++", icon: "c++" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Angular", icon: "angular" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "shadcn/ui", icon: "shadcnui" },
    ],
  },
  {
    label: "Backend & Database",
    items: [
      { name: "Flask", icon: "flask" },
      { name: "Node", icon: "nodejs" },
      { name: "Express", icon: "expressjs" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "Prisma", icon: "prisma" },
      { name: "Elasticsearch", icon: "elastic" },
      { name: "PyTest", icon: "pytest" },
    ],
  },
  {
    label: "AI & Agents",
    items: [
      { name: "LangChain", icon: "langchain" },
      { name: "LangGraph & MCP", icon: "langgraph" },
      { name: "AutoGen", icon: "azureai" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "Tensorflow", icon: "tensorflow" },
      { name: "Scikit-Learn", icon: "scikitlearn" },
    ],
  },
  {
    label: "Infra & Cloud",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "AWS", icon: "aws" },
      { name: "Azure", icon: "azure" },
      { name: "Render", icon: "render" },
    ],
  },
  {
    label: "Tooling",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Playwright & BeautifulSoup", icon: "playwright" },
      { name: "Claude", icon: "claude" },
      { name: "PostHog", icon: "posthog" },
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
                    className="group flex items-center gap-1.5 rounded-full border border-stone-200 dark:border-stone-800 px-3 py-1 font-mont text-xs text-stone-600 dark:text-stone-300"
                  >
                    {item.icon && (
                      <StackIcon
                        name={item.icon}
                        className="w-3.5 h-3.5 grayscale group-hover:grayscale-0 transition-[filter] duration-300"
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
