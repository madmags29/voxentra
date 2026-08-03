import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "primary" | "horizontal" | "icon" | "white" | "dark" | "app-icon";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const heights = {
    sm: 32,
    md: 44,
    lg: 56,
    xl: 76,
  };

  const currentHeight = heights[size];
  
  if (variant === "icon" || variant === "app-icon") {
    return (
      <div className={`relative ${className}`} style={{ height: currentHeight, width: currentHeight }}>
        <Image
          src="/images/voxentra-icon.svg"
          alt="Voxentra Solutions Icon"
          fill
          className="object-contain"
        />
      </div>
    );
  }

  const isDarkBg = variant === "white";
  const logoSrc = isDarkBg ? "/images/voxentra-logo-dark.svg" : "/images/voxentra-logo-light.svg";
  const aspectRato = 5.0; // The viewBox is 500x100

  return (
    <div className={`relative ${className} flex items-center cursor-pointer`} style={{ height: currentHeight, width: currentHeight * aspectRato }}>
      <Image
        src={logoSrc}
        alt="Voxentra Solutions Logo"
        fill
        className="object-contain object-left"
        priority
      />
    </div>
  );
};
