import { createFileRoute } from "@tanstack/react-router";
import { Church, Hammer, Heart, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Socialville Baptist Church" },
      { name: "description", content: "Learn about the history of Socialville Baptist Church in Mason, Ohio, founded in 1962. Discover our pastors, milestones, and mission." },
      { property: "og:title", content: "About — Socialville Baptist Church" },
      { property: "og:description", content: "Our history, pastors, and mission since 1962." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const pastors = [
  "Bro. Howard Carter",
  "Bro. James Pelfrey",
  "Bro. Paul McGhee",
  "Bro. Larry D. Gray",
  "Bro. Richard McGhee",
  "Bro. Jerry D. Gray",
  "Bro. James H. Sexton",
  "Pastor Stan Sexton",
];

const timeline = [
  {
    decade: "1960s",
    icon: Church,
    items: [
      "Organized May 9, 1962",
      "Incorporated June 9, 1962",
      "First pastor: Bro. Howard Carter",
      "Original building purchased from a former flexography plant",
    ],
  },
  {
    decade: "1970s",
    icon: Heart,
    items: [
      "Church continued to grow in faith and number",
      "Original building paid off in 1974",
    ],
  },
  {
    decade: "1980s",
    icon: Hammer,
    items: [
      "Groundbreaking for new sanctuary in 1981",
      "Sanctuary dedication in 1982",
      "Building paid off in 1988",
    ],
  },
  {
    decade: "1990s",
    icon: Users,
    items: [
      "Pastor Stan Sexton began serving in December 1993",
      "Continued outreach and community ministry",
    ],
  },
  {
    decade: "2000s–Today",
    icon: Church,
    items: [
      "Facility renovations and improvements",
      "Support for 18 foreign, home, and evangelistic ministries",
      "Active food pantry, nursing home, youth, and military prayer ministries",
    ],
  },
];

function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-cream px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">Our History</h1>
          <p className="mt-6 font-serif text-lg italic leading-relaxed text-stone sm:text-xl">
            “Therefore my beloved brethren, be ye steadfast, unmovable, always abounding in the work of the Lord...”
            <span className="mt-2 block text-base font-sans font-medium not-italic text-muted-foreground">
              — 1 Corinthians 15:58
            </span>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="prose prose-lg mx-auto max-w-none text-center text-muted-foreground">
          <p>
            Socialville Baptist Church was organized on May 9, 1962, and incorporated just one month later on June 9, 1962.
            From the beginning, our congregation has been a place of faithful worship, warm fellowship, and steadfast commitment to God's Word.
          </p>
          <p>
            Our first building was purchased from a former flexography plant and became a place where generations have gathered to pray,
            sing, study Scripture, and serve their neighbors. Over the decades, the Lord has blessed our church with growth,
            a new sanctuary, and the privilege of supporting missions near and far.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
        <h2 className="text-center font-serif text-3xl font-bold text-foreground sm:text-4xl">A Timeline of Faithfulness</h2>
        <div className="relative mt-12">
          <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-px" />
          <div className="space-y-10">
            {timeline.map((era, index) => (
              <div
                key={era.decade}
                className={`relative flex flex-col gap-4 sm:flex-row ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="sm:w-1/2" />
                <div className="absolute left-4 top-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-warm-white shadow-sm sm:left-1/2">
                  <era.icon className="h-4 w-4 text-burgundy" />
                </div>
                <div className="pl-10 sm:w-1/2 sm:pl-0">
                  <div
                    className={`rounded-xl border border-border bg-card p-6 shadow-sm ${
                      index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
                    }`}
                  >
                    <h3 className="font-serif text-xl font-bold text-burgundy">{era.decade}</h3>
                    <ul className="mt-3 space-y-2">
                      {era.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-wood" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pastors */}
      <section className="mx-auto max-w-4xl px-4 py-12 pb-20 sm:px-6 lg:pb-28">
        <h2 className="text-center font-serif text-3xl font-bold text-foreground sm:text-4xl">Our Pastors Through the Years</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          We are grateful for every shepherd the Lord has sent to lead our congregation.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {pastors.map((pastor, index) => (
            <div
              key={pastor}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-sm"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-xs font-bold text-burgundy">
                {index + 1}
              </span>
              <span className="font-medium text-foreground">{pastor}</span>
              {pastor === "Pastor Stan Sexton" && (
                <span className="ml-auto text-xs font-medium text-burgundy">Since 1993</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
