import { createFileRoute } from "@tanstack/react-router";
import { Globe, HeartHandshake, Users, Shield, Wheat } from "lucide-react";

export const Route = createFileRoute("/ministries")({
  head: () => ({
    meta: [
      { title: "Ministries — Socialville Baptist Church" },
      { name: "description", content: "Discover the ministries of Socialville Baptist Church in Mason, Ohio, including outreach, nursing home ministry, youth detention ministry, military prayer support, and our food pantry." },
      { property: "og:title", content: "Ministries — Socialville Baptist Church" },
      { property: "og:description", content: "Outreach, nursing home, youth detention, military prayer, and food pantry ministries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MinistriesPage,
});

const ministries = [
  {
    title: "Great Commission Outreach",
    tagline: "Where no one is too far away",
    verse: "Mark 16:15",
    icon: Globe,
    description:
      "We believe the Gospel is for every nation, tribe, and tongue. Through our Great Commission Outreach, we support missionaries and evangelistic efforts around the world, sharing the good news of Jesus Christ to the ends of the earth.",
  },
  {
    title: "Nursing Home Ministry",
    tagline: "Where no one is forgotten",
    verse: "Psalm 71:9",
    icon: HeartHandshake,
    description:
      "Our nursing home ministry brings worship, fellowship, and the Word of God to residents who may not be able to join us on Sunday mornings. We sing, pray, and remind each one that they are deeply loved and never forgotten.",
  },
  {
    title: "Youth & Juvenile Detention Ministry",
    tagline: "Where no one is beyond help",
    verse: "Matthew 25:36",
    icon: Users,
    description:
      "We minister to young people in juvenile detention, sharing hope and pointing them to the transforming power of Jesus. Every young person is precious to God, and no one is beyond His redeeming grace.",
  },
  {
    title: "Military Prayer Support",
    tagline: "Where everyone is serving",
    verse: "2 Corinthians 13:13",
    icon: Shield,
    description:
      "Our military prayer support ministry lifts up the men and women who serve our country. We pray for their safety, strength, families, and spiritual wellbeing, standing with them from home.",
  },
  {
    title: "Heavenly Harvest Food Pantry",
    tagline: "Feeding our neighbors with love",
    verse: null,
    icon: Wheat,
    description:
      "The Heavenly Harvest Food Pantry provides groceries and practical help to families in our community. We serve with compassion, meeting physical needs while sharing the hope found in Christ.",
  },
];

function MinistriesPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-cream px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">Our Ministries</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Socialville Baptist Church currently supports 18 foreign, home, and evangelistic ministries.
            From our own community to the far corners of the world, we seek to live out the command to love God and love our neighbor.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {ministries.map((ministry) => (
            <div
              key={ministry.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <ministry.icon className="h-6 w-6 text-burgundy" />
                </div>
                {ministry.verse && (
                  <span className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-stone">
                    {ministry.verse}
                  </span>
                )}
              </div>
              <h2 className="mt-5 font-serif text-2xl font-bold text-foreground">{ministry.title}</h2>
              <p className="mt-1 font-serif text-base italic text-burgundy">{ministry.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{ministry.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 text-center sm:px-6 lg:pb-28">
        <p className="font-serif text-lg italic text-stone">
          “Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.”
          <span className="mt-1 block text-sm font-sans font-medium not-italic text-muted-foreground">
            — Matthew 28:19
          </span>
        </p>
      </section>
    </main>
  );
}
