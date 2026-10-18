"use client";

import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FeatureIconProps = {
  name: string;
  size?: number;
  className?: string;
};

export default function FeatureIcon({
  name,
  size = 28,
  className,
}: FeatureIconProps) {
  const pascalCaseName = name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  const Icon = (LucideIcons as unknown as Record<string, LucideIcon>)[
    pascalCaseName
  ];

  if (!Icon) {
    console.warn(`Lucide icon not found: ${name}`);
    return null;
  }

  return (
    <Icon
      size={size}
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    />
  );
}
