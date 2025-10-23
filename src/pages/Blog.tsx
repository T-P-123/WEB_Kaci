import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type BlogPost = {
  title: string;
  summary: string;
  date: string;
  category: string;
  readTime: string;
};

const featuredPost: BlogPost = {
  title: "Jak začít se silovým tréninkem s lehkostí",
  summary:
    "Praktický průvodce pro začátečnice, jak si vybudovat jistotu v posilovně, vyhnout se častým chybám a užít si každý krok své nové rutiny.",
  date: "1. října 2025",
  category: "Silový trénink",
  readTime: "6 minut čtení",
};

const recentPosts: BlogPost[] = [
  {
    title: "5 ranních návyků pro energický start dne",
    summary:
      "Krátká ranní rutina, která probudí tělo i mysl, a zabere méně než 15 minut.",
    date: "18. září 2025",
    category: "Lifestyle",
    readTime: "4 minuty",
  },
  {
    title: "Co jíst před a po tréninku, aby tělo prosperovalo",
    summary:
      "Jednoduché tipy na svačiny a timing, které podpoří regeneraci i růst svalů.",
    date: "5. září 2025",
    category: "Výživa",
    readTime: "7 minut",
  },
  {
    title: "Mindset: jak zůstat motivovaná i ve slabších dnech",
    summary:
      "Strategie, které ti pomohou budovat zdravý vztah k pohybu a nevyhořet.",
    date: "24. srpna 2025",
    category: "Psychika",
    readTime: "5 minut",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-28 pb-16 sm:pt-32">
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/8 via-background to-background py-16 sm:py-20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-10 xl:px-0">
            <div className="max-w-3xl">
              <Badge className="bg-primary/15 text-primary hover:bg-primary/20">
                Novinky z Kačí světa
              </Badge>
              <h1 className="mt-6 font-heading text-4xl font-bold text-foreground sm:text-5xl">
                Blog plný inspirace pro tvou silnější verzi
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/75">
                Najdeš tu tipy z tréninku, mindsetu i výživy, které ti pomohou
                cítit se sebevědomě, mít energii na to, co miluješ, a udržet si
                radost z pohybu každý den.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-5 py-12 sm:px-6 lg:px-10 xl:px-0">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <Card className="overflow-hidden border-primary/10 shadow-[var(--shadow-primary)]">
              <CardContent className="space-y-6 bg-background/95 p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span>{featuredPost.date}</span>
                  <span aria-hidden="true">•</span>
                  <span>{featuredPost.category}</span>
                  <span aria-hidden="true">•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                  {featuredPost.title}
                </h2>
                <p className="text-base leading-relaxed text-foreground/70 sm:text-lg">
                  {featuredPost.summary}
                </p>
                <Button
                  className="rounded-full bg-primary px-6 py-2.5 text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).gtag) {
                      (window as any).gtag("event", "click_blog_featured", {
                        action: "blog_featured_cta",
                      });
                    }
                    window.open(
                      "https://www.instagram.com/kaci.trenerka",
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }}
                >
                  Číst článek
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/10 bg-secondary/40 shadow-[var(--shadow-soft)]">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  Přihlaš se k odběru
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  Jednou za měsíc posílám dávku motivace, tipů do tréninku a
                  zdravé recepty přímo do tvé schránky.
                </p>
                <form
                  className="mt-6 space-y-4"
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (typeof window !== "undefined" && (window as any).gtag) {
                      (window as any).gtag("event", "submit_blog_newsletter", {
                        action: "blog_newsletter_form",
                      });
                    }
                  }}
                >
                  <input
                    type="email"
                    required
                    placeholder="tvůj@email.cz"
                    className="w-full rounded-full border border-primary/20 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                  />
                  <Button className="w-full rounded-full bg-primary py-3 text-primary-foreground hover:bg-primary/90">
                    Chci novinky
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="border-t border-primary/10 bg-background/70 px-8 py-5 text-sm text-muted-foreground">
                Slibuji, že ti budu psát jen smysluplné věci a kdykoli se můžeš
                odhlásit.
              </CardFooter>
            </Card>
          </div>

          <div className="mt-16 space-y-10">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <h3 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                Nejnovější články
              </h3>
              <Button
                variant="outline"
                className="rounded-full border-primary/30 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary hover:bg-primary/10"
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/kaci.trenerka",
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
              >
                Všechny příběhy
              </Button>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {recentPosts.map((post) => (
                <Card
                  key={post.title}
                  className="group flex h-full flex-col border-primary/10 bg-background/95 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-primary)]"
                >
                  <CardContent className="flex h-full flex-col space-y-5 p-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                      <span>{post.category}</span>
                      <span aria-hidden="true">•</span>
                      <span>{post.date}</span>
                    </div>
                    <h4 className="font-heading text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-foreground/70">
                      {post.summary}
                    </p>
                    <div className="mt-auto text-sm font-semibold text-primary">
                      {post.readTime}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
