import { createFileRoute, Link } from "@tanstack/react-router";
import { ServiceTimes } from "@/components/ServiceTimes";
import { Heart, MapPin, ArrowRight } from "lucide-react";
import { assetUrl } from "@/lib/asset-url";
import churchHeroAsset from "@/assets/church-hero.png.asset.json";

const churchHeroUrl = assetUrl(churchHeroAsset.url);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Socialville Baptist Church — Mason, Ohio" },
      { name: "description", content: "Welcome to Socialville Baptist Church in Mason, Ohio. Faithfully serving our community since 1962. Join us for worship, fellowship, and ministry." },
      { property: "og:title", content: "Socialville Baptist Church — Mason, Ohio" },
      { property: "og:description", content: "Welcome to Socialville Baptist Church. Faithfully serving our community since 1962." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: churchHeroUrl },
      { name: "twitter:image", content: churchHeroUrl },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={churchHeroUrl}
            alt=""
            aria-hidden="true"
            loading="eager"
            className="h-full w-full object-cover"
          />
          {/* Warm overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-cream/85 via-cream/75 to-cream/90" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-warm-white/90 px-4 py-1.5 text-sm font-medium text-stone shadow-sm backdrop-blur-sm">
            <Heart className="h-4 w-4 text-burgundy" />
            Faithfully serving the Mason area since 1962
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground drop-shadow-sm sm:text-5xl lg:text-6xl">
            Socialville Baptist Church
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg italic leading-relaxed text-stone sm:text-xl">
            “This is the Lord's doing; it is marvellous in our eyes.”
            <span className="mt-2 block text-base font-sans font-medium not-italic text-muted-foreground">
              — Psalm 118:23
            </span>
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/visit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-burgundy px-6 py-3 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-burgundy/90"
            >
              Plan Your Visit
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-md border border-border bg-warm-white/90 px-6 py-3 text-base font-medium text-foreground shadow-sm backdrop-blur-sm transition-colors hover:bg-warm-white"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome intro */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">We'd Love to See You</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Whether you're new to the area, just passing through, or searching for a church home, you are welcome here.
            At Socialville Baptist Church, you'll find a warm congregation, faithful preaching, and a place to grow in Christ.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <h3 className="font-serif text-xl font-bold text-foreground">Visit Us</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Come as you are. Our doors are open every Sunday and Wednesday.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <h3 className="font-serif text-xl font-bold text-foreground">Grow With Us</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Sunday School, worship, and Bible-centered teaching for every age.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <h3 className="font-serif text-xl font-bold text-foreground">Serve With Us</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Join a ministry that reaches our community and the world with the Gospel.
            </p>
          </div>
        </div>
      </section>

      {/* Service times */}
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:pb-24">
        <ServiceTimes />
        <div className="mt-8 text-center">
          <Link
            to="/visit"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-warm-white px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <MapPin className="h-4 w-4 text-burgundy" />
            Get Directions
          </Link>
        </div>
      </section>
    </main>
  );
}
