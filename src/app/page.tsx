
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "BazarDor",
    category: "Price Tracking Platform",
    description:
      "A product price-tracking platform that helps people explore products and compare price changes over time.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "API"],
    image: "/projects/bazardor.png",
    href: "https://bazardor-delta-seven.vercel.app/",
    accent: "from-lime-300/20 via-emerald-400/5 to-transparent",
  },
  {
    number: "02",
    title: "Fit Log",
    category: "Workout Management",
    description:
      "A workout library and fitness tracking experience designed to help users discover workouts and organize their training.",
    tags: ["Next.js", "TypeScript", "React", "API"],
    image: "/projects/fit-log.png",
    href: "https://fit-log-rho-six.vercel.app/",
    accent: "from-cyan-300/20 via-blue-400/5 to-transparent",
  },
  {
    number: "03",
    title: "Dev Stack Builder",
    category: "Interactive Web App",
    description:
      "An interactive tool for exploring development technologies and building a personalized tech stack.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    image: "/projects/dev-stack-builder.png",
    href: "https://dev-stack-two-flame.vercel.app/",
    accent: "from-violet-300/20 via-fuchsia-400/5 to-transparent",
  },
];

const skills = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
  },
  {
    title: "Frameworks",
    items: ["Next.js", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "REST APIs", "Vercel"],
  },
];

function ArrowUpRight({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M7 7h10v10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.31-3.76-1.31-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.8 2.24 3.2 1.7.1-.73.39-1.23.7-1.52-2.48-.28-5.09-1.24-5.09-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.27-2.62 5.21-5.11 5.49.4.35.75 1.03.75 2.08v3.33c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual relative mx-auto aspect-square w-full max-w-[490px]">
      <div className="absolute inset-[9%] rounded-full border border-white/[0.08]" />
      <div className="absolute inset-[19%] rounded-full border border-white/[0.07]" />
      <div className="absolute inset-[29%] rounded-full border border-white/[0.06]" />

      <div className="hero-orbit absolute inset-[9%] rounded-full border border-dashed border-lime-200/20" />

      <div className="hero-glow absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/10 blur-[65px]" />

      <div className="hero-orb absolute left-1/2 top-1/2 flex h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-lime-100/20 bg-gradient-to-br from-lime-200 via-lime-400 to-emerald-800 shadow-[0_0_90px_rgba(190,242,100,0.18)]">
        <div className="absolute inset-[8%] rounded-full border border-white/20" />
        <div className="absolute -left-[15%] top-[5%] h-[65%] w-[65%] rounded-full bg-white/30 blur-2xl" />
        <div className="absolute bottom-[5%] right-[5%] h-[70%] w-[70%] rounded-full bg-emerald-950/50 blur-2xl" />

        <span className="relative text-5xl font-semibold tracking-tighter text-[#10130b] sm:text-6xl">
          M.
        </span>
      </div>

      <div className="float-card absolute left-[1%] top-[19%] rounded-2xl border border-white/10 bg-[#111315]/90 p-4 shadow-2xl backdrop-blur-xl sm:left-0">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(190,242,100,0.8)]" />
          <span className="text-xs text-neutral-300">Building for the web</span>
        </div>
      </div>

      <div className="float-card-delayed absolute bottom-[19%] right-0 rounded-2xl border border-white/10 bg-[#111315]/90 p-4 shadow-2xl backdrop-blur-xl">
        <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
          Current focus
        </p>
        <p className="text-sm font-medium text-white">Next.js + TypeScript</p>
        <div className="mt-3 h-1 w-36 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[72%] rounded-full bg-lime-300" />
        </div>
      </div>

      <div className="absolute right-[13%] top-[13%] h-3 w-3 rounded-full bg-lime-200 shadow-[0_0_25px_rgba(190,242,100,0.8)]" />
      <div className="absolute bottom-[13%] left-[15%] h-2 w-2 rounded-full bg-lime-200/70" />
      <div className="absolute left-[15%] top-[52%] h-1.5 w-1.5 rounded-full bg-white/70" />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#08090b] text-[#f5f5f5]">
      {/* Navigation */}
      <header className="relative z-50 border-b border-white/[0.07]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-3"
            aria-label="Mahdi home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300 text-lg font-bold text-[#10130b]">
              M.
            </span>
            <span className="text-sm font-semibold tracking-wide">
              MAHDI<span className="text-lime-300">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-link" href="#skills">
              Skills
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-lime-300 hover:bg-lime-300 hover:text-[#10130b]"
            >
              Let&apos;s talk <span className="ml-2">↗</span>
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-xl md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#0c0d0f] px-5 py-5 shadow-2xl md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {[
                ["About", "#about"],
                ["Projects", "#projects"],
                ["Skills", "#skills"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm text-neutral-300 transition hover:bg-white/[0.05] hover:text-lime-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
  id="home"
  className="relative grid min-h-[calc(100vh-80px)] items-center gap-12 overflow-hidden px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12"
>
  {/* Left column: Intro, buttons, and stats */}
  <div className="relative z-10">
    {/* Keep your existing hero heading and description here */}

    {/* Keep your existing buttons here */}
    <div className="flex flex-wrap items-center gap-4">
      {/* Keep your existing Explore My Work button here */}

      <a
        href="/resume.pdf"
        download
        className="inline-flex items-center gap-2 rounded-full border border-lime-300/30 bg-lime-300 px-6 py-3.5 text-sm font-medium text-black transition hover:bg-lime-200"
      >
        <Download size={17} />
        Download Resume
      </a>

      <a
        href="https://github.com/mdmahdi-dev"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white transition hover:border-white/35 hover:bg-white/[0.04]"
      >
        <GithubIcon />
        GitHub
      </a>
    </div>

    {/* Stats */}
    <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/[0.08] pt-6">
      <div>
        <p className="text-2xl font-medium tracking-tight">03</p>
        <p className="mt-1 text-xs text-neutral-500">Featured projects</p>
      </div>

      <div className="h-12 w-px bg-white/10" />

      <div>
        <p className="text-2xl font-medium tracking-tight">React</p>
        <p className="mt-1 text-xs text-neutral-500">Core technology</p>
      </div>

      <div className="h-12 w-px bg-white/10" />

      <div>
        <p className="text-2xl font-medium tracking-tight">Next.js</p>
        <p className="mt-1 text-xs text-neutral-500">Building full-stack</p>
      </div>
    </div>
  </div>

  {/* Right column: Hero visual */}
  <div className="relative mx-auto w-full max-w-[510px] lg:justify-self-end">
    <HeroVisual />

    <p className="mt-1 text-center text-[10px] uppercase tracking-[0.3em] text-neutral-600">
      Creative thinking · Clean code · Continuous growth
    </p>
  </div>

  {/* Scroll indicator */}
  <a
    href="#about"
    className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-neutral-600 transition hover:text-lime-300 lg:flex"
  >
    Scroll to explore
  </a>
</section>

      {/* About */ }
  <section
    id="about"
    className="border-y border-white/[0.06] bg-[#0c0d0f] px-5 py-24 sm:px-8 lg:px-12"
  >
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
      <div>
        <p className="section-label">01 / ABOUT ME</p>
        <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl">
          Curious by nature.
          <br />
          <span className="text-neutral-500">Builder by practice.</span>
        </h2>
      </div>

      <div className="max-w-3xl">
        <p className="text-lg leading-8 text-neutral-300">
          I&apos;m a web developer focused on creating useful, accessible,
          and visually polished digital experiences. My journey began
          with the fundamentals of HTML, CSS, and JavaScript and has
          grown into building applications with React and Next.js.
        </p>
        <p className="mt-5 leading-8 text-neutral-500">
          I learn by building real projects, solving problems, and
          improving my code with every iteration. My current focus is
          strengthening my frontend skills and growing toward full-stack
          development.
        </p>

        <a
          href="https://linkedin.com/in/md-mahdi-16b825443"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm text-lime-300 transition hover:text-lime-200"
        >
          Connect on LinkedIn <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  </section>

  {/* Projects */ }
  <section
    id="projects"
    className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
  >
    <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <p className="section-label">02 / SELECTED WORK</p>
        <h2 className="mt-5 text-4xl font-medium tracking-[-0.06em] sm:text-6xl">
          Things I&apos;ve built<span className="text-lime-300">.</span>
        </h2>
      </div>
      <p className="max-w-sm text-sm leading-7 text-neutral-500">
        Real projects, real learning. Each one is an opportunity to solve
        a problem and improve my development skills.
      </p>
    </div>

    <div className="grid gap-7 md:grid-cols-2">
      {projects.map((project, index) => (
        <article
          key={project.number}
          className={`project-card group overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0c0d0f] transition duration-500 hover:-translate-y-1 hover:border-lime-200/30 ${index === 0 ? "md:col-span-2" : ""
            }`}
        >
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="block"
            aria-label={`Open ${project.title}`}
          >
            <div
              className={`relative overflow-hidden bg-gradient-to-br ${project.accent} ${index === 0
                  ? "aspect-[16/8] sm:aspect-[16/7]"
                  : "aspect-[16/10]"
                }`}
            >
              <Image
                src={project.image}
                alt={`${project.title} website screenshot`}
                fill
                priority={index === 0}
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 90vw"
                    : "(max-width: 768px) 100vw, 50vw"
                }
                className="object-cover object-top transition duration-700 group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />

              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur-md">
                {project.category}
              </div>

              <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-lime-300 text-[#10130b] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </a>

          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                  PROJECT {project.number}
                </p>
                <h3 className="text-2xl font-medium tracking-tight transition group-hover:text-lime-300 sm:text-3xl">
                  {project.title}
                </h3>
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.title}`}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition hover:border-lime-300 hover:text-lime-300"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.09] px-3 py-1.5 text-xs text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>

  {/* Skills */ }
  <section
    id="skills"
    className="border-y border-white/[0.06] bg-[#0c0d0f] px-5 py-24 sm:px-8 lg:px-12 lg:py-28"
  >
    <div className="mx-auto max-w-7xl">
      <p className="section-label">03 / MY TOOLKIT</p>
      <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <h2 className="text-4xl font-medium tracking-[-0.06em] sm:text-6xl">
          Tools for turning
          <br />
          ideas into reality<span className="text-lime-300">.</span>
        </h2>
        <p className="max-w-sm text-sm leading-7 text-neutral-500">
          The technologies I use to build, test, and ship modern web
          experiences — and the skills I continue to develop.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {skills.map((group, index) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/[0.08] bg-[#08090b] p-6 transition hover:border-lime-200/25 sm:p-8"
          >
            <p className="text-xs text-neutral-600">
              0{index + 1} / TOOLKIT
            </p>
            <h3 className="mt-4 text-xl font-medium">{group.title}</h3>

            <div className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-white/[0.045] px-3 py-2 text-sm text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Contact */ }
  <section
    id="contact"
    className="relative overflow-hidden px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
  >
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/[0.07] blur-[120px]" />

    <div className="relative mx-auto max-w-4xl text-center">
      <p className="section-label">04 / WHAT&apos;S NEXT?</p>
      <h2 className="mt-6 text-5xl font-medium leading-[1.05] tracking-[-0.07em] sm:text-7xl">
        Have an idea?
        <br />
        <span className="text-lime-300">Let&apos;s build it.</span>
      </h2>
      <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-neutral-400">
        I&apos;m always interested in connecting with developers,
        collaborating on meaningful projects, and exploring new
        opportunities.
      </p>

      <a
        href="mailto:mdmahdi.dev@gmail.com"
        className="mt-9 inline-flex items-center gap-3 rounded-full bg-lime-300 px-7 py-4 text-sm font-semibold text-[#10130b] transition hover:-translate-y-1 hover:bg-lime-200"
      >
        Get in touch <ArrowUpRight size={18} />
      </a>

      <p className="mt-4 text-xs text-neutral-600">
        Replace the example email with your real contact email.
      </p>
    </div>
  </section>

  {/* Footer */}
      <footer className="border-t border-white/[0.07] px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <a href="#home" className="text-sm font-semibold tracking-wide">
            MAHDI<span className="text-lime-300">.</span>
          </a>

          <p className="text-center text-xs text-neutral-600">
            Designed with intention. Built with code.
          </p>

          <div className="flex items-center gap-5 text-neutral-400">
            <a
              href="https://github.com/mdmahdi-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition hover:text-lime-300"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com/in/md-mahdi-16b825443"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-sm transition hover:text-lime-300"
            >
              in
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="transition hover:text-lime-300"
            >
              ↑
            </a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 24px;
        }

        body {
          background: #08090b;
        }

        .section-label {
          color: #bef264;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.24em;
        }

        .nav-link {
          color: #a3a3a3;
          font-size: 13px;
          transition: color 200ms ease;
        }

        .nav-link:hover {
          color: #bef264;
        }

        .hero-orbit {
          animation: orbit 32s linear infinite;
        }

        .hero-orb {
          animation: orb-float 7s ease-in-out infinite;
        }

        .hero-glow {
          animation: glow-pulse 5s ease-in-out infinite;
        }

        .float-card {
          animation: float 6s ease-in-out infinite;
        }

        .float-card-delayed {
          animation: float 7s ease-in-out -2s infinite;
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orb-float {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, calc(-50% - 10px)) scale(1.025);
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            opacity: 0.55;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-9px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
