import { ArrowRight } from "lucide-react";
import { LocalizedLink } from "@/components/i18n/LocalizedLink";
import { getHomeBlogPosts } from "@/content/blog";
import { getSiteContent } from "@/content/site";
import { contentLocales, type Locale } from "@/lib/i18n";
import { SectionEyebrow } from "../ui/SectionEyebrow";

type RecordsSectionProps = {
  locale: Locale;
  content: ReturnType<typeof getSiteContent>["records"];
};

export function RecordsSection({ locale, content }: RecordsSectionProps) {
  const posts = getHomeBlogPosts(locale);
  const pageLocale = contentLocales[locale];

  return (
    <section
      id="registros"
      aria-labelledby="records-title"
      className="relative border-t border-line py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionEyebrow index="05">{content.eyebrow}</SectionEyebrow>
            <h2
              id="records-title"
              className="mt-8 font-display text-3xl font-semibold uppercase leading-none text-foreground sm:text-4xl"
            >
              {content.title}
            </h2>
          </div>
          <LocalizedLink
            href="/blog"
            className="inline-flex min-h-11 w-fit items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-secondary transition-colors hover:text-foreground"
          >
            {content.viewAll}
            <ArrowRight size={14} aria-hidden="true" />
          </LocalizedLink>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => {
            const isFallback = post.locale !== pageLocale;
            return (
              <li key={post.slug}>
                <article
                  lang={isFallback ? post.locale : undefined}
                  className="group relative flex h-full flex-col border border-line bg-surface/80 p-6 transition-colors duration-300 focus-within:border-line-strong hover:border-line-strong"
                >
                  <div className="flex items-center justify-between gap-4 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold uppercase leading-tight text-foreground">
                    <LocalizedLink
                      href={`/blog/${post.slug}`}
                      className="after:absolute after:inset-0 after:content-['']"
                    >
                      {post.title}
                    </LocalizedLink>
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-secondary">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-foreground">
                      {content.read}
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                    {isFallback && content.translationNote && (
                      <span lang={pageLocale} className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted">
                        {content.translationNote}
                      </span>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
