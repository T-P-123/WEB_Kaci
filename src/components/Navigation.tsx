import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isElevated = isScrolled || !isLandingPage;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  type NavItem =
    | { label: string; type: "scroll"; action: () => void }
    | { label: string; type: "route"; path: string };

  const navItems: NavItem[] = [
    { label: "Úvod", type: "scroll", action: () => scrollToTop() },
    { label: "O mně", type: "scroll", action: () => scrollToSection("about") },
    {
      label: "Moje lekce",
      type: "scroll",
      action: () => scrollToSection("moje-lekce"),
    },
    { label: "Kontakt", type: "scroll", action: () => scrollToSection("contact") },
    { label: "Blog", type: "route", path: "/blog" },
  ];

  const handleConsultationClick = (
    source: "navigation_cta" | "mobile_navigation_cta",
  ) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click_consultation", {
        action: source,
      });
    }

    window.open(
      "https://www.rezervace.zeuspowerhouse.cz/Calendar",
      "_blank",
      "noopener,noreferrer",
    );
    setIsOpen(false);
  };

  const spacerHeightClass = isElevated
    ? "h-20 md:h-20 lg:h-16"
    : "h-28 md:h-24 lg:h-20";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isElevated
            ? "bg-background/90 py-3 backdrop-blur-xl border-b border-primary/10"
            : "py-6"
        }`}
        style={{ boxShadow: isElevated ? "var(--shadow-soft)" : "none" }}
        aria-label="Hlavní navigace"
      >
        <div className="container mx-auto px-4 transition-all duration-500">
          <div
            className={`relative flex items-center justify-between gap-6 overflow-hidden border transition-all duration-500 ${
              isElevated
                ? "rounded-2xl border-primary/12 bg-background/95 px-6 py-3"
                : "rounded-full border-primary/15 bg-gradient-to-r from-secondary/70 via-background/90 to-secondary/70 px-8 py-4"
            }`}
            style={{
              boxShadow: isElevated
                ? "var(--shadow-soft)"
                : "var(--shadow-primary)",
            }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
            />

            <Link
              to="/"
              className="relative flex items-center gap-3 text-foreground transition-opacity duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-primary/10 font-heading text-xl font-semibold text-primary">
                K
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-heading text-2xl font-bold tracking-wide">
                  Kačí
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-muted-foreground/80">
                  Síla je v odvaze
                </span>
              </span>
            </Link>

            <div className="hidden items-center gap-2 md:flex">
              {navItems.map((item) =>
                item.type === "scroll" ? (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className={`group relative inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] transition-all duration-300 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      isElevated
                        ? "text-foreground/70 hover:text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                    <span className="pointer-events-none absolute left-4 right-4 -bottom-1 h-px origin-center scale-x-0 rounded-full bg-primary/60 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`group relative inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      isElevated
                        ? "text-foreground/70 hover:text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                    <span className="pointer-events-none absolute left-4 right-4 -bottom-1 h-px origin-center scale-x-0 rounded-full bg-primary/60 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </Link>
                ),
              )}
              <Button
                onClick={() => handleConsultationClick("navigation_cta")}
                className="rounded-full bg-primary px-6 py-2.5 font-semibold text-primary-foreground shadow-sm shadow-primary/25 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Domluvit konzultaci
              </Button>
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground md:hidden"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] sm:w-[360px] border-l border-primary/10 bg-gradient-to-b from-background via-background to-secondary/25"
              >
                <div className="mt-6 flex flex-col space-y-6">
                  <div className="rounded-2xl border border-primary/12 bg-secondary/60 p-6 text-center shadow-sm">
                    <h2 className="font-heading text-2xl font-bold text-foreground">
                      Kačí
                    </h2>
                    <p className="mt-2 text-sm italic text-muted-foreground">
                      "Síla je v odvaze"
                    </p>
                  </div>

                  {navItems.map((item) =>
                    item.type === "scroll" ? (
                      <button
                        key={item.label}
                        onClick={() => {
                          item.action();
                          setIsOpen(false);
                        }}
                        className="rounded-full px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.24em] text-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="rounded-full px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.24em] text-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ),
                  )}

                  <Button
                    onClick={() =>
                      handleConsultationClick("mobile_navigation_cta")
                    }
                    className="rounded-full bg-primary py-3 font-semibold text-primary-foreground shadow-sm shadow-primary/25 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                  >
                    Domluvit konzultaci
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      {isLandingPage && (
        <div
          aria-hidden="true"
          className={`transition-[height] duration-500 ease-out ${spacerHeightClass}`}
        />
      )}
    </>
  );
};

export default Navigation;
