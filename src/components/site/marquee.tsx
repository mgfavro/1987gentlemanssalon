const items = [
  "Precision Fades",
  "Hot Towel Shaves",
  "Beard Sculpting",
  "Classic Cuts",
  "Walk-ins Welcome",
  "Since 1987",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-primary/15 bg-secondary/40 py-4">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-condensed text-sm uppercase tracking-[0.3em] text-muted-foreground">
              {item}
            </span>
            <span className="text-primary/60">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
