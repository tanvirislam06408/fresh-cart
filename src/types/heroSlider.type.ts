export interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  icon?: string;
}

export interface SlideStat {
  label: string;
  value: string;
}

export interface HeroSlide {
  id: string;
  videoSrc: string;
  badge: {
    text: string;
    icon?: string;
  };
  title: {
    main: string;
    highlight: string;
  };
  description: string;
  primaryCta: CTAButton;
  secondaryCta?: CTAButton;
  stats?: SlideStat[];
}
