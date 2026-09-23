"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  Maximize2,
  X,
  Gauge,
  Layers,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ProjectCaseStudy, Industry } from "@/types";

interface ProjectsGalleryViewProps {
  projects: ProjectCaseStudy[];
  industries: Industry[];
}

interface GalleryPhoto {
  src: string;
  title: string;
  projectSlug: string;
  capacity: string;
  location: string;
  category: string;
}

export function ProjectsGalleryView({
  projects,
  industries,
}: ProjectsGalleryViewProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  // Filter projects by industry
  const filteredProjects =
    selectedIndustry === "all"
      ? projects
      : projects.filter((p) => p.industry === selectedIndustry);

  // Collect all gallery photos for the installation gallery section
  const allPhotos: GalleryPhoto[] = [
    {
      src: "/images/projects/riverside-multispecialty-hospital.jpg",
      title: "2 x 250 kVA Synchronized N+1 Standby Setup",
      projectSlug: "riverside-multispecialty-hospital",
      capacity: "2 x 250 kVA",
      location: "Pune, Maharashtra",
      category: "Healthcare Critical Care",
    },
    {
      src: "/images/projects/greenfield-it-park-data-hall.jpg",
      title: "1,010 kVA Containerized Rental Genset & Cabling",
      projectSlug: "greenfield-it-park-data-hall",
      capacity: "1 x 1,010 kVA",
      location: "Hinjewadi IT Park",
      category: "Data Center Bridge Power",
    },
    {
      src: "/images/projects/auto-components-plant-expansion.jpg",
      title: "500 kVA Industrial Unit with Overhead LV Busduct",
      projectSlug: "auto-components-plant-expansion",
      capacity: "1 x 500 kVA",
      location: "Chakan Industrial Area",
      category: "Automotive Manufacturing",
    },
    {
      src: "/images/projects/ats-synchronizing-panel.jpg",
      title: "Custom ATS & Synchronizing Switchgear Panel",
      projectSlug: "riverside-multispecialty-hospital",
      capacity: "Digital AMF / DSE",
      location: "Control Room Installation",
      category: "Automation & Switchgear",
    },
    {
      src: "/images/projects/highway-toll-plaza-network.jpg",
      title: "Standardized 62 kVA Acoustic Canopy Installation",
      projectSlug: "highway-toll-plaza-network",
      capacity: "12 x 62 kVA",
      location: "Maharashtra State Highway",
      category: "Government Infrastructure",
    },
    {
      src: "/images/projects/on-site-commissioning.jpg",
      title: "Load Bank Testing & On-Site Engineering Commissioning",
      projectSlug: "auto-components-plant-expansion",
      capacity: "Diagnostic & Load Bank",
      location: "Industrial Client Facility",
      category: "Field Engineering",
    },
    {
      src: "/images/projects/agri-biogas-processing-unit.jpg",
      title: "250 kVA Biogas Gas Generator with Methane Piping",
      projectSlug: "agri-biogas-processing-unit",
      capacity: "1 x 250 kVA",
      location: "Nashik Agricultural Belt",
      category: "Renewable & Gas Power",
    },
    {
      src: "/images/projects/boutique-resort-noise-retrofit.jpg",
      title: "125 kVA Ultra-Silent Canopy Retrofit (14 dB(A) Drop)",
      projectSlug: "boutique-resort-noise-retrofit",
      capacity: "1 x 125 kVA",
      location: "Lonavala Hill Station",
      category: "Hospitality Acoustic Retrofit",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Industry Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border pb-6">
        <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Filter by Sector:
        </span>
        <button
          onClick={() => setSelectedIndustry("all")}
          className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
            selectedIndustry === "all"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
          }`}
        >
          All Installations ({projects.length})
        </button>
        {industries.map((ind) => {
          const count = projects.filter((p) => p.industry === ind.slug).length;
          if (count === 0) return null;
          const isActive = selectedIndustry === ind.slug;
          return (
            <button
              key={ind.slug}
              onClick={() => setSelectedIndustry(ind.slug)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              <span>{ind.name}</span>
              <span
                className={`ml-1 rounded-full px-1.5 py-0.2 font-data text-[10px] ${
                  isActive
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Project Cards Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {filteredProjects.map((project) => {
          const industry = industries.find((i) => i.slug === project.industry);

          return (
            <div
              key={project.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              {/* Card Photo Banner */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Overlay Badges */}
                <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                  {industry && (
                    <Badge
                      variant="secondary"
                      className="bg-background/90 font-medium backdrop-blur-md"
                    >
                      {industry.name}
                    </Badge>
                  )}
                  <span className="rounded-full bg-black/60 px-3 py-0.5 font-data text-xs text-white/90 backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>

                {/* Zoom Photo Button */}
                <button
                  type="button"
                  onClick={() =>
                    setActivePhoto({
                      src: project.image,
                      title: project.title,
                      projectSlug: project.slug,
                      capacity: project.capacity,
                      location: project.location,
                      category: industry?.name || "Power Installation",
                    })
                  }
                  className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-black/60 text-white/90 backdrop-blur-md transition-transform hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                  title="Click to view full installation image"
                >
                  <Maximize2 className="size-4" />
                </button>

                {/* Bottom Overlay Capacity & Location */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-1.5 font-medium drop-shadow-sm">
                    <MapPin className="size-4 text-primary" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-lg bg-primary/95 px-2.5 py-1 font-data font-semibold text-primary-foreground shadow-md backdrop-blur-sm">
                    <Gauge className="size-3.5" />
                    <span>{project.capacity}</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Client:</span>
                  <span>{project.clientType}</span>
                </div>

                <h3 className="mt-2 text-xl font-bold leading-snug tracking-tight text-foreground group-hover:text-primary transition-colors">
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>

                {/* Scope of Work Pills */}
                {project.scope && project.scope.length > 0 && (
                  <div className="mt-4">
                    <span className="font-data text-[11px] uppercase tracking-wider text-muted-foreground">
                      Scope Delivered:
                    </span>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.scope.map((item, idx) => (
                        <span
                          key={idx}
                          className="rounded-md border border-border/80 bg-secondary/50 px-2.5 py-1 text-xs text-foreground/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Verified Results */}
                {project.results && project.results.length > 0 && (
                  <div className="mt-5 border-t border-dashed border-border pt-4">
                    <span className="font-data text-[11px] uppercase tracking-wider text-muted-foreground">
                      Verified Result:
                    </span>
                    <ul className="mt-2 space-y-1.5">
                      {project.results.slice(0, 2).map((res, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-foreground/90"
                        >
                          <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Footer Action */}
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Layers className="size-3.5" />
                    {project.gallery ? `${project.gallery.length} photos available` : "Verified Project"}
                  </span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:underline"
                  >
                    View Case Study & Photos{" "}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Installation Work Photo Gallery Section */}
      <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-sm">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="size-3.5" />
              <span>Installation & Field Work Showcase</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Real Site Work & Commissioning Gallery
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Direct photographic documentation from our client installations — including heavy genset placement, acoustic canopies, busduct connections, synchronizing panels, and load bank verification.
            </p>
          </div>
          <span className="rounded-full border border-border bg-secondary/60 px-4 py-1.5 font-data text-xs font-medium text-foreground">
            {allPhotos.length} High-Res Photos
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {allPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setActivePhoto(photo)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-border bg-muted shadow-sm transition-all hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />

              {/* Floating Zoom Icon */}
              <div className="absolute right-2.5 top-2.5 flex size-7 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100">
                <Maximize2 className="size-3.5" />
              </div>

              {/* Tag */}
              <div className="absolute left-2.5 top-2.5">
                <span className="rounded bg-black/60 px-2 py-0.5 font-data text-[10px] text-white/90 backdrop-blur-sm">
                  {photo.category}
                </span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="font-data text-[11px] font-semibold text-primary">
                  {photo.capacity}
                </p>
                <h4 className="line-clamp-2 text-xs font-medium leading-snug text-white/95">
                  {photo.title}
                </h4>
                <span className="mt-1 flex items-center gap-1 text-[10px] text-white/75">
                  <MapPin className="size-3" />
                  {photo.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl w-full overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border bg-card px-6 py-4">
              <div>
                <span className="rounded bg-primary/20 px-2 py-0.5 font-data text-xs font-semibold text-primary">
                  {activePhoto.category}
                </span>
                <h3 className="mt-1 text-lg font-bold text-foreground">
                  {activePhoto.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="flex size-9 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-destructive hover:text-destructive-foreground"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <Image
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border bg-card px-6 py-4">
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1 font-medium">
                  <MapPin className="size-4 text-primary" />
                  {activePhoto.location}
                </span>
                <span className="flex items-center gap-1 font-medium font-data text-primary">
                  <Gauge className="size-4" />
                  Capacity: {activePhoto.capacity}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  render={<Link href={`/projects/${activePhoto.projectSlug}`} />}
                >
                  View Case Study
                  <ArrowUpRight className="size-3.5" />
                </Button>
                <Button
                  size="sm"
                  render={<Link href="/quote" />}
                >
                  Request Similar Sizing
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
