import FeatureIcon from "@/components/common/FeatureIcon";

const features = [
  {
    title: "Realistic Mock Tests",
    description: "Exam-like questions with detailed explanations.",
    icon: "ClipboardList",
  },
  {
    title: "Performance Analytics",
    description: "Track your progress and identify strong & weak areas.",
    icon: "ChartNoAxesColumnIncreasing",
  },
  {
    title: "Expert-Curated Content",
    description: "Concise notes, summaries and practice questions.",
    icon: "BookOpen",
  },
  {
    title: "Learn Anywhere",
    description: "Access on desktop, tablet or mobile.",
    icon: "Smartphone",
  },
];

export interface WhyChooseUsProps {
  heading?: string;
  subtitle?: string;
  eyebrow?: string;
}

export default function WhyChooseUs({
  heading = "Open doors to new opportunities",
  subtitle = "Everything you need to clear your certification exams in one place.",
  eyebrow = "WHY QUORZA",
}: WhyChooseUsProps) {
  return (
    <section
      aria-labelledby="why-choose-us-heading"
      className="section-sm section-blue w-full"
    >
      <div className="container">
        <header className="mb-3">
          <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#2878f5] sm:text-[11px]">
            {eyebrow}
          </span>

          <h2
            id="why-choose-us-heading"
            className="!mb-1 !mt-1 !text-[22px] !font-bold !leading-tight !tracking-[-0.035em] !text-[#142957] sm:!text-[26px]"
          >
            {heading}
          </h2>

          {subtitle && (
            <p className="!mb-0 !mt-1 !text-xs !leading-relaxed !text-[#536787] sm:!text-sm">
              {subtitle}
            </p>
          )}
        </header>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex min-w-0 items-center gap-3 rounded-lg border border-white/80 bg-white/90 p-3 transition-shadow duration-200 hover:shadow-[0_5px_18px_rgba(23,51,111,0.07)] sm:min-h-[68px] sm:gap-2.5 sm:p-2.5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#edf1ff] text-[#5368ff] [&_svg]:!h-6 [&_svg]:!w-6">
                <FeatureIcon name={feature.icon} />
              </div>

              <div className="min-w-0">
                <h3 className="!mb-1 !mt-0 !text-xs !font-bold !leading-snug !text-[#142957]">
                  {feature.title}
                </h3>

                <p className="!mb-0 !mt-0 !text-[10px] !leading-[1.45] !text-[#536787] sm:!text-[11px]">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
