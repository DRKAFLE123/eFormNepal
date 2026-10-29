import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { SERVICES, VERIFIED_CONTACT } from "@/data/services";
import ServiceDetailClient from "./ServiceDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    return {
      title: "Service Not Found | E-Form Nepal",
    };
  }

  return {
    title: `${service.titleEn} — Requirements & Application Guide`,
    description: service.shortDescEn,
    openGraph: {
      title: `${service.titleEn} | E-Form Nepal`,
      description: service.shortDescEn,
      url: `https://eformnepal.com/services/${service.id}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
