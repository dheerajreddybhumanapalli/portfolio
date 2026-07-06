import type { CardItem } from "@/data/portfolio";

interface ExperienceTimelineProps {
  experiences: CardItem[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative space-y-12">
      <div
        aria-hidden
        className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[11px]"
      />

      {experiences.map((company) => (
        <div key={company.title} className="relative pl-8 sm:pl-12">
          <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background sm:h-5 sm:w-5" />

          <h3 className="text-xl font-semibold">{company.title}</h3>

          <div className="mt-6 space-y-8">
            {company.roles.map((role) => (
              <div
                key={`${company.title}-${role.designation}-${role.duration}`}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-medium">{role.designation}</p>
                  <p className="font-mono text-sm text-muted">{role.duration}</p>
                </div>
                <ul className="mt-4 space-y-2">
                  {role.description.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
