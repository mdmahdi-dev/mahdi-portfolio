
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";

function GithubIcon({ size = 23 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
      />
    </svg>
  );
}

function LinkedinIcon({ size = 23 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.96V9h2.97v9.45ZM6.45 7.71a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.74h-2.96v-4.6c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.68H9.2V9h2.85v1.29h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.57v5.13Z" />
    </svg>
  );
}

const projects = [
  {
    number: "01",
    title: "BazarDor",
    category: "Full-Stack Web Application",
    description:
      "A modern marketplace platform for exploring products, tracking prices, and discovering useful market information.",
    image: "/projects/bazardor.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "API"],
    live: "https://bazardor-delta-seven.vercel.app/",
    github: "https://github.com/mdmahdi-dev",
  },
  {
    number: "02",
    title: "Fit Log",
    category: "Fitness Tracking Application",
    description:
      "A workout library and fitness tracking experience designed to help users organize training and manage workout plans.",
    image: "/projects/fit-log.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://fit-log-rho-six.vercel.app/",
    github: "https://github.com/mdmahdi-dev",
  },
  {
    number: "03",
    title: "Dev Stack Builder",
    category: "React Web Application",
    description:
      "An interactive technology collection app where users can explore technologies and build their own development stack.",
    image: "/projects/dev-stack-builder.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://dev-stack-two-flame.vercel.app/",
    github: "https://github.com/mdmahdi-dev",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "REST APIs",
];

function HeroVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="relative aspect-square w-[90%] max-w-[440px]">
        {/* Green glow */}
        <div className="absolute inset-[15%] rounded-full bg-lime-300/10 blur-[75px]" />

        {/* Orbit rings */}
        <div className="absolute inset-[7%] rounded-full border border-lime-300/15" />
        <div className="absolute inset-[15%] rounded-full border border-lime-300/20" />

        <div className="absolute inset-[7%] animate-[spin_25s_linear_infinite] rounded-full border border-transparent border-t-lime-300/80 border-r-lime-300/20" />

        {/* Orbit dots */}
        <span className="absolute left-[10%] top-[25%] h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_15px_#bef264]" />
        <span className="absolute right-[9%] top-[48%] h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_15px_#bef264]" />
        <span className="absolute bottom-[14%] left-[25%] h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_15px_#bef264]" />

        {/* Coding logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-lime-300/20 bg-neutral-950/70 shadow-[0_0_70px_rgba(190,242,100,0.12)]">
            <Code2
              size={76}
              strokeWidth={1.3}
              className="text-lime-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.25em] text-lime-300">
      <span>{number}</span>
      <span className="h-px w-16 bg-lime-300/50" />
      <span className="text-neutral-500">{children}</span>
    </div>
  );
}

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen scroll-smooth bg-[#080a09] text-white">


      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080a09]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="#home" className="flex items-center gap-3">
            <Code2 size={34} className="text-lime-300" />
            <span className="text-2xl font-bold tracking-tight">
              Mahdi<span className="text-lime-300">.</span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-9 text-sm text-neutral-400 md:flex">
            <Link className="transition hover:text-lime-300" href="#home">Home</Link>
            <Link className="transition hover:text-lime-300" href="#about">About</Link>
            <Link className="transition hover:text-lime-300" href="#projects">Projects</Link>
            <Link className="transition hover:text-lime-300" href="#skills">Skills</Link>
            <Link className="transition hover:text-lime-300" href="#contact">Contact</Link>
          </div>

          {/* DESKTOP LET'S TALK */}
          <Link
            href="#contact"
            className="hidden rounded-full border border-lime-300/40 px-5 py-2.5 text-sm text-lime-300 transition hover:bg-lime-300 hover:text-black md:inline-flex"
          >
            Let's Talk
          </Link>

          {/* MOBILE HAMBURGER */}
          <div className="relative md:hidden">
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-controls="mobile-navigation-menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-lime-300 transition hover:bg-lime-300/10"
            >
              {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>

            {menuOpen && (
              <div
                id="mobile-navigation-menu"
                className="absolute right-0 top-14 w-56 rounded-xl border border-white/10 bg-[#101411] p-3 shadow-2xl"
              >
                {[
                  { label: "Home", href: "#home" },
                  { label: "About", href: "#about" },
                  { label: "Projects", href: "#projects" },
                  { label: "Skills", href: "#skills" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm text-neutral-300 transition hover:bg-lime-300/10 hover:text-lime-300"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="my-2 border-t border-white/10" />

                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg bg-lime-300 px-4 py-3 text-center text-sm font-semibold !text-black transition hover:bg-lime-200"
                >
                  Let's Talk
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>



      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 overflow-hidden px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-20"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-lime-300/[0.04] blur-[120px]" />

        {/* LEFT: INTRODUCTION */}
        <div className="relative z-10">
          <div className="mb-7 inline-flex rounded-full border border-lime-300/50 px-5 py-2 text-sm text-lime-300">
            Hello, I'm
          </div>

          <h1 className="text-6xl font-bold tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            <span className="text-lime-300">M</span>ahdi
          </h1>

          <h2 className="mt-3 text-4xl font-light tracking-tight sm:text-5xl">
            Web <span className="font-semibold text-lime-300">Developer</span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-8 text-neutral-400 sm:text-lg">
            I build modern, responsive and user-friendly web applications.
            I'm passionate about turning ideas into real products using
            modern technologies.
          </p>

          {/* HERO BUTTONS */}
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full bg-lime-300 px-6 py-4 text-sm font-semibold !text-black transition hover:-translate-y-1 hover:bg-lime-200"
            >
              <Code2 size={18} />
              Explore My Work
              <ArrowRight size={18} />
            </Link>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 rounded-full border border-lime-300/60 px-6 py-4 text-sm font-medium text-white transition hover:bg-lime-300/10"
            >
              <Download size={18} />
              Download Resume
            </a>

            <Link
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm font-medium text-white transition hover:border-lime-300 hover:text-lime-300"
            >
              <Mail size={18} />
              Get in Touch
            </Link>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-10 flex items-center gap-5 text-neutral-400">
            <a
              href="https://github.com/mdmahdi-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition hover:text-lime-300"
            >
              <GithubIcon size={23} />
            </a>

            <span className="h-6 w-px bg-white/15" />

            <a
              href="https://linkedin.com/in/mdmahdi-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-lime-300"
            >
              <LinkedinIcon size={23} />
            </a>

            <span className="h-6 w-px bg-white/15" />

            <a
              href="#contact"
              aria-label="Email"
              className="transition hover:text-lime-300"
            >
              <Mail size={23} />
            </a>
          </div>
        </div>

        {/* RIGHT: LOGO + PORTRAIT */}
        <div className="relative mx-auto flex w-full max-w-[540px] flex-col items-center lg:justify-self-end">
          <div className="relative aspect-square w-full">
            <HeroVisual />

            <div className="absolute inset-x-0 bottom-0 z-10 mx-auto h-[96%] w-full max-w-[470px]">
              <Image
                src="/mahdi.png"
                alt="Mahdi - Web Developer"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 470px"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          <p className="relative z-20 mt-3 text-center text-[10px] uppercase tracking-[0.2em] text-neutral-400 sm:text-xs">
            Creative thinking
            <span className="mx-2 text-lime-300">·</span>
            Clean code
            <span className="mx-2 text-lime-300">·</span>
            Continuous growth
          </p>
        </div>

        <Link
          href="#about"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-neutral-500 transition hover:text-lime-300 lg:flex"
        >
          Scroll to explore <ArrowDown size={14} />
        </Link>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/[0.07] px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About <span className="text-lime-300">Me</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-neutral-400">
              I'm a passionate web developer who enjoys building clean,
              efficient and scalable web applications. I love learning
              new technologies and solving real-world problems with code.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-neutral-400">
              My journey is driven by curiosity, consistent practice and
              a commitment to becoming a better developer every day.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {/* EDUCATION CARD */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-lime-300/40">
              <GraduationCap size={32} className="text-lime-300" />

              <h3 className="mt-5 text-lg font-semibold">Education</h3>

              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Master's Student in Economics
                <br />
                at MC College
              </p>
            </div>

            {/* GOALS CARD */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-lime-300/40">
              <Code2 size={32} className="text-lime-300" />

              <h3 className="mt-5 text-lg font-semibold">Goals</h3>

              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Full-Stack Software Developer
                <br />
                <span className="text-lime-300">→</span> Machine Learning Expert
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-t border-white/[0.07] px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="02">WHAT I'VE BUILT</SectionLabel>

          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Featured <span className="text-lime-300">Projects</span>
            </h2>

            <a
              href="https://github.com/mdmahdi-dev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-lime-300"
            >
              More on GitHub <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:-translate-y-2 hover:border-lime-300/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-lime-300">
                    {project.number} / {project.category}
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-3 min-h-20 text-sm leading-7 text-neutral-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutral-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-5 border-t border-white/10 pt-5">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-lime-300 transition hover:text-lime-200"
                    >
                      Live Preview <ExternalLink size={15} />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-white"
                    >
                      <GithubIcon size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
<section
  id="skills"
  className="border-t border-white/[0.07] px-5 py-24 sm:px-8 lg:px-12"
>
  <div className="mx-auto max-w-7xl">
    <SectionLabel number="03">MY TOOLKIT</SectionLabel>

    <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
      Skills & <span className="text-lime-300">Technologies</span>
    </h2>

    <p className="mt-5 max-w-xl leading-8 text-neutral-400">
      Technologies, frameworks and tools I use to build modern,
      responsive and full-stack web applications.
    </p>

    {[
      {
        category: "Frontend Development",
        description: "Building responsive and interactive user interfaces",
        technologies: [
          { name: "HTML5", icon: "html5/html5-original", color: "text-orange-400" },
          { name: "CSS3", icon: "css3/css3-original", color: "text-blue-400" },
          { name: "JavaScript", icon: "javascript/javascript-original", color: "text-yellow-300" },
          { name: "TypeScript", icon: "typescript/typescript-original", color: "text-blue-400" },
          { name: "React", icon: "react/react-original", color: "text-cyan-300" },
          { name: "Next.js", icon: "nextjs/nextjs-original", color: "text-white" },
          { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original", color: "text-cyan-400" },
          { name: "Vite", icon: "vitejs/vitejs-original", color: "text-purple-400" },
        ],
      },
      {
        category: "Backend & Database",
        description: "Working with APIs, server-side logic and databases",
        technologies: [
          { name: "Node.js", icon: "nodejs/nodejs-original", color: "text-green-400" },
          { name: "MongoDB", icon: "mongodb/mongodb-original", color: "text-green-500" },
          { name: "PostgreSQL", icon: "postgresql/postgresql-original", color: "text-blue-400" },
          { name: "REST API", icon: "api/api-original", color: "text-lime-300" },
          { name: "JSON", icon: "json/json-original", color: "text-yellow-300" },
        ],
      },
      {
        category: "UI & Styling",
        description: "Creating clean layouts and polished user experiences",
        technologies: [
          { name: "DaisyUI", icon: "daisyui/daisyui-original", color: "text-pink-400" },
          { name: "Flexbox", icon: "css3/css3-original", color: "text-blue-400" },
          { name: "CSS Grid", icon: "css3/css3-original", color: "text-purple-400" },
          { name: "Responsive Design", icon: "html5/html5-original", color: "text-orange-400" },
        ],
      },
      {
        category: "Development Tools",
        description: "Tools I use for development, version control and deployment",
        technologies: [
          { name: "Git", icon: "git/git-original", color: "text-orange-400" },
          { name: "GitHub", icon: "github/github-original", color: "text-white" },
          { name: "VS Code", icon: "vscode/vscode-original", color: "text-blue-400" },
          { name: "Vercel", icon: "vercel/vercel-original", color: "text-white" },
          { name: "npm", icon: "npm/npm-original-wordmark", color: "text-red-400" },
        ],
      },
    ].map((group) => (
      <div key={group.category} className="mt-12">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white">
            {group.category}
          </h3>
          <p className="mt-2 text-sm text-neutral-500">
            {group.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {group.technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition duration-300 hover:-translate-y-1 hover:border-lime-300/40 hover:bg-lime-300/[0.04]"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}.svg`}
                alt={`${tech.name} logo`}
                className="h-9 w-9 shrink-0 object-contain"
              />
              <span className={`text-sm font-medium ${tech.color} transition group-hover:text-lime-300`}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.07] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/[0.07] blur-[120px]" />

        <div className="relative mx-auto max-w-3xl">
          <SectionLabel number="04">GET IN TOUCH</SectionLabel>

          <h2 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">
            Send a Direct <span className="text-lime-300">Message</span>
          </h2>

          <p className="mt-5 leading-8 text-neutral-400">
            Fill out the form below and I'll respond as soon as possible.
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault();

              const form = event.currentTarget;
              const formData = new FormData(form);

              const name = String(formData.get("name"));
              const email = String(formData.get("email"));
              const subject = String(formData.get("subject") || "Portfolio Contact");
              const message = String(formData.get("message"));

              const emailSubject = encodeURIComponent(subject);
              const emailBody = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
              );

              window.location.href =
                `mailto:mdmahdi.dev@gmail.com?subject=${emailSubject}&body=${emailBody}`;
            }}
            className="mt-10 space-y-6"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                Your name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-neutral-600 focus:border-lime-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                Email address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-neutral-600 focus:border-lime-300"
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-white">
                Subject / role
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="e.g. Project Collaboration"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-neutral-600 focus:border-lime-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                Your message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Write your message here..."
                className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-neutral-600 focus:border-lime-300"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-3 rounded-full bg-lime-300 px-7 py-4 text-sm font-semibold !text-black transition hover:-translate-y-1 hover:bg-lime-200"
            >
              <Mail size={18} />
              Send Message
              <ArrowUpRight size={18} />
            </button>
          </form>

          <p className="mt-6 text-sm text-neutral-500">
            This opens your email app with your message ready to send.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.07] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <Link href="#home" className="text-lg font-bold">
            Mahdi<span className="text-lime-300">.</span>
          </Link>

          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Mahdi. Built with Next.js & Tailwind CSS.
          </p>

          <Link
            href="#home"
            className="inline-flex items-center gap-2 text-xs text-neutral-400 transition hover:text-lime-300"
          >
            Back to top <ArrowUpRight size={14} />
          </Link>
        </div>
      </footer>
    </main>
  );
}
