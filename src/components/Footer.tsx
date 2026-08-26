import { Link } from "@tanstack/react-router";
import { Facebook, MapPin, Phone, Mail, Clock, Cross } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-warm-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Church info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Cross className="h-5 w-5 text-burgundy" />
              <h3 className="font-serif text-lg font-bold text-foreground">Socialville Baptist Church</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A family of believers faithfully serving the Mason, Ohio area since 1962.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 flex-shrink-0 text-burgundy" />
              <span>5946 Socialville-Foster Rd, Mason, OH 45040</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 flex-shrink-0 text-burgundy" />
              <a href="tel:+15133982961" className="hover:text-burgundy hover:underline">(513) 398-2961</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 flex-shrink-0 text-burgundy" />
              <a href="mailto:socialvillebaptist@gmail.com" className="hover:text-burgundy hover:underline">
                socialvillebaptist@gmail.com
              </a>
            </div>
          </div>

          {/* Service times */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-burgundy" />
              <h3 className="font-serif text-lg font-bold text-foreground">Service Times</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Sunday School</span>
                <span className="font-semibold text-foreground">10:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday Worship</span>
                <span className="font-semibold text-foreground">11:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday Evening</span>
                <span className="font-semibold text-foreground">6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday</span>
                <span className="font-semibold text-foreground">7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Quick links & social */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-burgundy hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-burgundy hover:underline">Our History</Link>
              </li>
              <li>
                <Link to="/ministries" className="hover:text-burgundy hover:underline">Ministries</Link>
              </li>
              <li>
                <Link to="/visit" className="hover:text-burgundy hover:underline">Plan Your Visit</Link>
              </li>
            </ul>
            <a
              href="https://www.facebook.com/socialvillebaptistchurch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-burgundy hover:text-primary-foreground"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="h-4 w-4" />
              Follow us on Facebook
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Socialville Baptist Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
