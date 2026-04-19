type SectionStreakProps = {
  className?: string;
};

/**
 * Thin horizontal magenta line for section breaks (soft fade at the ends, no glow).
 */
const SectionStreak = ({ className = "" }: SectionStreakProps) => {
  return (
    <div className={className} aria-hidden>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </div>
  );
};

export default SectionStreak;
