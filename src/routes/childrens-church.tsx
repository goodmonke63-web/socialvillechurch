import { createFileRoute, Link } from "@tanstack/react-router";
import { Baby, Clock, Heart, BookOpen, Sparkles, MapPin } from "lucide-react";
import { ServiceTimes } from "@/components/ServiceTimes";
import leaderAsset from "@/assets/childrens-church-leader.png.asset.json";
import { assetUrl } from "@/lib/asset-url";

export const Route = createFileRoute("/childrens-church")({
  head: () => ({
    meta: [
      { title: "Children's Church — Socialville Baptist Church" },
      {
        name: "description",
        content:
          "Children's Church at Socialville Baptist Church in Mason, Ohio, meets every Sunday at 11:00 AM. Led by Katie McGee, where kids learn God's Word in a warm, loving environment.",
      },
      { property: "og:title", content: "Children's Church — Socialville Baptist Church" },
      {
        property: "og:description",
        content: "Children's Church meets every Sunday at 11:00 AM. Led by Katie McGee.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChildrensChurchPage,
});

function ChildrensChurchPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-cream px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
            <Baby className="h-8 w-8 text-burgundy" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">Children's Church</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A warm, joyful place where children learn about God's love through His Word —
            tailored just for them during our Sunday morning worship service.
          </p>
        </div>
      </section>

      {/* Leader */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm sm:p-10">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
            <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-full border-4 border-secondary shadow-sm sm:h-40 sm:w-40">
              <img
                src={leaderAsset.url}
                alt="Katie McGee, Children's Church Leader"
                width={160}
                height={160}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium uppercase tracking-wide text-burgundy">Children's Church Leader</p>
              <h2 className="font-serif text-3xl font-bold text-foreground">Katie McGee</h2>
              <p className="mt-2 text-muted-foreground">
                Katie lovingly leads our Children's Church, guiding the youngest members of our
                congregation as they grow in their knowledge of Scripture and the love of Jesus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When & where */}
      <section className="mx-auto max-w-5xl px-4 pb-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-burgundy" />
              <h3 className="font-serif text-xl font-bold text-foreground">When We Meet</h3>
            </div>
            <p className="mt-3 text-muted-foreground">
              Children's Church is held every Sunday at{" "}
              <span className="font-semibold text-foreground">11:00 AM</span>, during the morning
              worship service.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Children are welcome to join their families for the start of worship and will be
              dismissed to Children's Church before the message.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-burgundy" />
              <h3 className="font-serif text-xl font-bold text-foreground">Where We Meet</h3>
            </div>
            <p className="mt-3 text-muted-foreground">
              Children's Church meets in our Sunday School classrooms at Socialville Baptist Church.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">5946 Socialville-Foster Rd, Mason, OH 45040</p>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
        <h2 className="text-center font-serif text-3xl font-bold text-foreground sm:text-4xl">What to Expect</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          A safe, loving environment where children encounter God's Word in ways they can understand.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <BookOpen className="h-6 w-6 text-burgundy" />
            </div>
            <h3 className="mt-4 font-serif text-lg font-bold text-foreground">Bible Teaching</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Age-appropriate lessons rooted in God's Word, helping children know and trust Jesus.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Sparkles className="h-6 w-6 text-burgundy" />
            </div>
            <h3 className="mt-4 font-serif text-lg font-bold text-foreground">Joyful Learning</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Songs, stories, and activities that make learning about faith fun and memorable.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Heart className="h-6 w-6 text-burgundy" />
            </div>
            <h3 className="mt-4 font-serif text-lg font-bold text-foreground">Caring Leaders</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Dedicated, loving volunteers who care for each child as part of our church family.
            </p>
          </div>
        </div>
      </section>

      {/* Verse */}
      <section className="mx-auto max-w-3xl px-4 pb-8 text-center sm:px-6">
        <p className="font-serif text-lg italic text-stone">
          “Suffer the little children to come unto me, and forbid them not: for of such is the kingdom of God.”
          <span className="mt-1 block text-sm font-sans font-medium not-italic text-muted-foreground">
            — Mark 10:14
          </span>
        </p>
      </section>

      {/* CTA + service times */}
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:pb-28">
        <div className="rounded-xl border border-border bg-cream p-8 text-center shadow-sm sm:p-10">
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Bring Your Family This Sunday</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            We'd love to welcome your children to Children's Church. Plan your visit and join us this
            Sunday at 11:00 AM.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/visit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-burgundy px-6 py-3 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-burgundy/90"
            >
              <MapPin className="h-4 w-4" />
              Plan Your Visit
            </Link>
            <Link
              to="/ministries"
              className="inline-flex items-center justify-center rounded-md border border-border bg-warm-white px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Explore Our Ministries
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <ServiceTimes />
        </div>
      </section>
    </main>
  );
}
