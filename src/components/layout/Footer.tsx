import Link from "next/link";
import { koreanHubConfig } from "@/config/koreanHub";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-porcelain-dim">
      <div className="container-hub grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg">{koreanHubConfig.brand.name}</p>
          <p className="mt-3 max-w-[26ch] text-sm text-ink/70">
            {koreanHubConfig.brand.description}
          </p>
        </div>

        <nav aria-label="Site">
          <p className="text-sm font-medium text-ink/50">Site</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/lessons" className="hover:text-celadon-700">Lessons</Link></li>
            <li><Link href="/teacher" className="hover:text-celadon-700">Teacher</Link></li>
            <li><Link href="/for-students" className="hover:text-celadon-700">For Students</Link></li>
            <li><Link href="/book" className="hover:text-celadon-700">Register Now</Link></li>
          </ul>
        </nav>

        <div>
          <p className="text-sm font-medium text-ink/50">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>{koreanHubConfig.contact.email}</li>
            <li>{koreanHubConfig.contact.phone}</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-ink/50">Follow</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={koreanHubConfig.socialMedia.instagram} className="hover:text-celadon-700">Instagram</a></li>
            <li><a href={koreanHubConfig.socialMedia.facebook} className="hover:text-celadon-700">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="brush-divider" />

      <div className="container-hub flex flex-col gap-2 py-6 text-xs text-ink/50 sm:flex-row sm:justify-between">
        <p>© {year} {koreanHubConfig.site.legalName}. All rights reserved.</p>
        <p>Registration is a request — your schedule is confirmed personally.</p>
      </div>
    </footer>
  );
}
