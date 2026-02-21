import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Zap, Smartphone, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

// Sections tracked by the scroll-spy (must match section `id` attributes)
const ANCHOR_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

const SECTION_IDS = ANCHOR_LINKS.map((l) => l.href.replace("#", ""));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSec, setActiveSec] = useState<string>("");

  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  // ── Scroll-state (blur effect) ──────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── IntersectionObserver scroll-spy ─────────────────────────────────────
  // Only active on the home page; clears when navigating away.
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSec("");
      return;
    }

    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSec(id);
        },
        {
          // Fire when the section top is 25-75% of the viewport
          rootMargin: "-20% 0px -60% 0px",
          threshold: 0,
        },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [location.pathname]);

  // ── Smooth scroll helper ─────────────────────────────────────────────────
  const scrollTo = (href: string) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 350);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ── Derived colours for light/dark navbar background ────────────────────
  const navBg =
    theme === "dark"
      ? scrolled
        ? "rgba(7,7,17,0.88)"
        : "transparent"
      : scrolled
        ? "rgba(244,244,251,0.92)"
        : "transparent";

  const navBorder = scrolled
    ? `1px solid ${theme === "dark" ? "rgba(108,59,255,0.22)" : "rgba(91,46,240,0.18)"}`
    : "1px solid transparent";

  const navShadow = scrolled
    ? `0 4px 32px rgba(108,59,255,${theme === "dark" ? "0.14" : "0.08"})`
    : "none";

  const mobileMenuBg =
    theme === "dark" ? "rgba(7,7,17,0.97)" : "rgba(244,244,251,0.97)";

  return (
    <header
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.35s ease",
        background: navBg,
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: navBorder,
        boxShadow: navShadow,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "70px",
        }}
      >
        {/* ── Logo ── */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: "10px",
              background: "linear-gradient(135deg, #6C3BFF, #00D4C8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(108,59,255,0.45)",
            }}
          >
            <Zap size={20} color="#fff" fill="#fff" />
          </div>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            <span className="gradient-text">Neuro</span>
            <span style={{ color: "var(--text-primary)" }}>Track</span>
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav
          className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: "28px" }}
        >
          {ANCHOR_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = location.pathname === "/" && activeSec === id;
            return (
              <a
                key={label}
                href={href}
                className={`nav-link${isActive ? " active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(href);
                }}
              >
                {label}
              </a>
            );
          })}

          {/* Screenshots route link */}
          <Link
            to="/screenshots"
            className={`nav-link${location.pathname === "/screenshots" ? " active" : ""}`}
            style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}
          >
            <Smartphone size={13} />
            Screenshots
          </Link>
        </nav>

        {/* ── Right controls ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Theme toggle */}
          <button
            id="theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={toggleTheme}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            style={{
              width: 40,
              height: 40,
              borderRadius: "10px",
              border: `1.5px solid var(--border-card)`,
              background: "var(--bg-surface)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--text-secondary)",
              transition: "all 0.25s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--primary)";
              el.style.color = "var(--accent)";
              el.style.boxShadow = "0 0 12px var(--primary-glow)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--border-card)";
              el.style.color = "var(--text-secondary)";
              el.style.boxShadow = "none";
            }}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Download CTA — hidden on mobile, visible on md+ */}
          <a
            href="#download"
            className="btn-primary nav-download-btn"
            style={{ padding: "10px 22px", fontSize: "14px" }}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#download");
            }}
          >
            Download Free
          </a>

          {/* Hamburger */}
          <button
            id="menu-toggle"
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "var(--bg-surface)",
              border: "1.5px solid var(--border-card)",
              borderRadius: "10px",
              width: 40,
              height: 40,
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--text-primary)",
            }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div
          style={{
            background: mobileMenuBg,
            backdropFilter: "blur(24px)",
            borderTop: "1px solid var(--border-subtle)",
            padding: "20px 24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {ANCHOR_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = location.pathname === "/" && activeSec === id;
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(href);
                }}
                style={{
                  padding: "13px 16px",
                  borderRadius: "10px",
                  color: isActive
                    ? "var(--primary-light)"
                    : "var(--text-secondary)",
                  textDecoration: "none",
                  fontWeight: isActive ? 700 : 600,
                  fontSize: "15px",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: isActive ? "rgba(108,59,255,0.1)" : "transparent",
                  borderLeft: isActive
                    ? "3px solid var(--primary)"
                    : "3px solid transparent",
                }}
              >
                {label}
              </a>
            );
          })}

          {/* Screenshots */}
          <Link
            to="/screenshots"
            onClick={() => setMenuOpen(false)}
            style={{
              padding: "13px 16px",
              borderRadius: "10px",
              color:
                location.pathname === "/screenshots"
                  ? "var(--accent)"
                  : "var(--text-secondary)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Smartphone size={15} /> Screenshots
          </Link>

          {/* Theme toggle row */}
          <button
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            style={{
              padding: "13px 16px",
              borderRadius: "10px",
              background: "var(--bg-surface)",
              border: "1.5px solid var(--border-card)",
              color: "var(--text-secondary)",
              fontWeight: 600,
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              width: "100%",
              marginTop: "4px",
            }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            Switch to {theme === "dark" ? "Light" : "Dark"} Mode
          </button>

          <a
            href="#download"
            className="btn-primary"
            style={{ marginTop: "12px", justifyContent: "center" }}
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#download");
            }}
          >
            Download Free
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav      { display: none !important; }
          .menu-btn         { display: flex !important; }
          .nav-download-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
