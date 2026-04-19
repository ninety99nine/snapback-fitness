type Props = {
  /** Background color of the NEXT section (fills the slant triangle) */
  fill: string;
  /** Flip the slant direction — false = /, true = \ */
  flip?: boolean;
  /** Height of the slant area in px (default 80) */
  height?: number;
};

/**
 * Absolutely-positioned SVG slant placed at the bottom of a relative/overflow-hidden section.
 * Makes the transition into the next section look diagonal rather than straight.
 */
const SlantDivider = ({ fill, flip = false, height = 80 }: Props) => (
  <div
    className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-10"
    aria-hidden
  >
    <svg
      viewBox={`0 0 1440 ${height}`}
      preserveAspectRatio="none"
      style={{ display: "block", width: "100%", height: `${height}px` }}
    >
      <polygon
        points={
          flip
            ? `0,0 1440,${height} 0,${height}`
            : `0,${height} 1440,0 1440,${height}`
        }
        fill={fill}
      />
    </svg>
  </div>
);

export default SlantDivider;
