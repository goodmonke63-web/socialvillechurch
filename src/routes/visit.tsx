import { createFileRoute, Link } from "@tanstack/react-router";
import { ServiceTimes } from "@/components/ServiceTimes";
import { MapPin, Phone, Mail, Facebook, User, Clock, Heart } from "lucide-react";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us — Socialville Baptist Church" },
      { name: "description", content: "Plan your visit to Socialville Baptist Church in Mason, Ohio. Find our address, service times, phone number, email, and an interactive map." },
      { property: "og:title", content: "Visit Us — Socialville Baptist Church" },
      { property: "og:description", content: "Plan your visit to Socialville Baptist Church in Mason, Ohio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-cream px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">Plan Your Visit</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We would love to see you. Whether you're visiting for a day or looking for a church family,
            you'll find a warm welcome at Socialville Baptist Church.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="font-serif text-2xl font-bold text-foreground">Contact Us</h2>
              <p className="mt-2 text-muted-foreground">
                Have a question? Reach out by phone, email, or Facebook. Pastor Stan Sexton and our congregation would love to hear from you.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <User className="mt-0.5 h-5 w-5 flex-shrink-0 text-burgundy" />
                  <div>
                    <p className="font-medium text-foreground">Pastor Stan Sexton</p>
                    <p className="text-sm text-muted-foreground">Serving since December 1993</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-burgundy" />
                  <div>
                    <p className="font-medium text-foreground">5946 Socialville-Foster Rd</p>
                    <p className="text-sm text-muted-foreground">Mason, OH 45040</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-burgundy" />
                  <a href="tel:+15133982961" className="font-medium text-foreground hover:text-burgundy hover:underline">
                    (513) 398-2961
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-burgundy" />
                  <a
                    href="mailto:socialvillebaptist@gmail.com"
                    className="font-medium text-foreground hover:text-burgundy hover:underline"
                  >
                    socialvillebaptist@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Facebook className="mt-0.5 h-5 w-5 flex-shrink-0 text-burgundy" />
                  <a
                    href="https://www.facebook.com/socialvillebaptistchurch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground hover:text-burgundy hover:underline"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-burgundy" />
                <h2 className="font-serif text-2xl font-bold text-foreground">What to Expect</h2>
              </div>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Heart className="mt-1 h-4 w-4 flex-shrink-0 text-wood" />
                  <span>Warm, friendly people who are glad you came</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="mt-1 h-4 w-4 flex-shrink-0 text-wood" />
                  <span>Traditional, Bible-centered worship and preaching</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="mt-1 h-4 w-4 flex-shrink-0 text-wood" />
                  <span>Sunday School classes for all ages</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="mt-1 h-4 w-4 flex-shrink-0 text-wood" />
                  <span>A place for your whole family to grow in faith</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <iframe
                title="Socialville Baptist Church location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.1234567890123!2d-84.3099999!3d39.3600000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88405b1234567890%3A0xabcdef1234567890!2sSocialville%20Baptist%20Church!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
            <div className="text-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Socialville+Baptist+Church+Mason+OH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-burgundy px-6 py-3 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-burgundy/90"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:pb-28">
        <ServiceTimes />
      </section>
    </main>
  );
}
