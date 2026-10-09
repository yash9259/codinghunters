/**
 * The logo PNG is a 1024px square with the artwork in the middle and a lot of
 * empty padding (artwork spans x 225-800, y 320-680). Rendering it as-is forced
 * a very tall navbar. This crops to the artwork so it can sit at a normal size.
 * It is a white-on-transparent mark, so use it on ink backgrounds.
 */
const BrandLogo = ({ className = "w-32" }: { className?: string }) => (
  <span
    className={`relative block overflow-hidden ${className}`}
    style={{ aspectRatio: "575 / 360" }}
  >
    <img
      src="/logo.png"
      alt="CodingHunters"
      width={1024}
      height={1024}
      className="absolute max-w-none"
      style={{ width: "178.087%", left: "-39.13%", top: "-88.89%" }}
    />
  </span>
);

export default BrandLogo;
