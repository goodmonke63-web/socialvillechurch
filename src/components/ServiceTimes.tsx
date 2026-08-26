import { Clock, BookOpen, Sun, Moon, CalendarHeart } from "lucide-react";

const times = [
  { label: "Sunday School", time: "10:00 AM", icon: BookOpen },
  { label: "Sunday Worship", time: "11:00 AM", icon: Sun },
  { label: "Sunday Evening", time: "6:00 PM", icon: Moon },
  { label: "Wednesday", time: "7:00 PM", icon: CalendarHeart },
];

export function ServiceTimes({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
      {showTitle && (
        <div className="mb-6 flex items-center gap-2">
          <Clock className="h-5 w-5 text-burgundy" />
          <h2 className="font-serif text-2xl font-bold text-foreground">Service Times</h2>
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {times.map((service) => (
          <div
            key={service.label}
            className="rounded-lg bg-secondary p-4 text-center transition-transform hover:-translate-y-0.5"
          >
            <service.icon className="mx-auto mb-2 h-5 w-5 text-burgundy" />
            <p className="text-sm font-medium text-muted-foreground">{service.label}</p>
            <p className="font-serif text-lg font-bold text-foreground">{service.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
