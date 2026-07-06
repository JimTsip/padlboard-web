# padlboard-web

The coming-soon landing page for [padlboard.ai](https://padlboard.ai) — a padel companion for Apple Watch, iPhone, and web.

Static site (no build step), deployed via GitHub Pages. The email waitlist form posts directly to a Supabase table (`waitlist_signups`, insert-only for the public `anon` key — see the `padlboard` app repo's `supabase/migrations` for the schema).

This will grow into the full Next.js web app described in the main repo's `docs/padlboard-master-plan.md` once that track starts; for now it's just the placeholder.
