import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote, ThumbsUp, Share2 } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Socialville Baptist Church" },
      { name: "description", content: "Read what visitors are saying about Socialville Baptist Church in Mason, Ohio." },
      { property: "og:title", content: "Reviews — Socialville Baptist Church" },
      { property: "og:description", content: "Read what visitors are saying about Socialville Baptist Church." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  {
    name: "Kevin Hockman",
    badge: "Local Guide",
    stats: "375 reviews · 1,004 photos",
    rating: 5,
    date: "7 years ago",
    text: "Good folks",
  },
  {
    name: "Mike Brown",
    badge: "Local Guide",
    stats: "111 reviews · 2 photos",
    rating: 5,
    date: "6 months ago",
    text: null,
  },
  {
    name: "Beth S",
    badge: "Local Guide",
    stats: "27 reviews · 9 photos",
    rating: 5,
    date: "a year ago",
    text: null,
  },
];

function ReviewsPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-cream px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">What People Are Saying</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We are grateful for the kind words shared by visitors and members of our community.
            Every review reminds us that hospitality and love are at the heart of what we do.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? "fill-gold text-gold" : "text-muted"
                    }`}
                  />
                ))}
              </div>

              {review.text && (
                <blockquote className="mt-4 flex-1 font-serif text-lg italic text-foreground">
                  “{review.text}”
                </blockquote>
              )}

              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-serif font-bold text-burgundy">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {review.badge} · {review.stats}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
                <span>{review.date}</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 transition-colors hover:text-burgundy"
                    aria-label={`Like ${review.name}'s review`}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    Like
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 transition-colors hover:text-burgundy"
                    aria-label={`Share ${review.name}'s review`}
                  >
                    <Share2 className="h-4 w-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card p-6 text-center shadow-sm sm:p-8">
          <Quote className="mx-auto h-8 w-8 text-burgundy" />
          <p className="mt-4 font-serif text-lg italic text-stone">
            “A new commandment I give unto you, That ye love one another; as I have loved you, that ye also love one another.”
          </p>
          <p className="mt-2 text-sm font-medium text-muted-foreground">— John 13:34</p>
        </div>
      </section>
    </main>
  );
}
