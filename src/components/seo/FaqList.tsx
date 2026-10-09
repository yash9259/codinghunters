import { Plus } from "lucide-react";
import { FaqItem } from "@/seo/siteData";

/**
 * Native <details>: the answer text is always present in the HTML (so search
 * engines and AI crawlers can read it) while staying collapsible for users.
 */
const FaqList = ({ items }: { items: FaqItem[] }) => (
  <div className="ruled border-y border-border">
    {items.map((f) => (
      <details key={f.q} className="group py-1">
        <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-4 [&::-webkit-details-marker]:hidden">
          <h3 className="font-display text-lg font-semibold leading-snug text-foreground md:text-xl">
            {f.q}
          </h3>
          <Plus
            className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45"
            aria-hidden="true"
          />
        </summary>
        <p className="max-w-3xl pb-5 leading-relaxed text-muted-foreground">{f.a}</p>
      </details>
    ))}
  </div>
);

export default FaqList;
