import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

export const PHONE = "8 804 333-41-47";
export const PHONE_HREF = "tel:+78043334147";

export function UrgencyBar() {
  return (
    <div className="bg-brand-deep text-primary-foreground">
      <p className="mx-auto max-w-6xl px-5 py-2.5 text-center text-[13px] font-medium">
        Акция только сегодня: скидка <strong className="font-extrabold">15%</strong> + бесплатная
        консультация специалиста
      </p>
    </div>
  );
}

export function TopBar() {
  return (
    <div className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <span className="font-extrabold tracking-[0.28em] text-brand-deep">АРТРЕЙД</span>
        <span className="hidden text-xs text-muted-foreground sm:inline">
          Официальное медицинское изделие · РЗН 2024/24297
        </span>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 rounded-full border border-brand-soft bg-ice px-3.5 py-1.5 text-sm font-semibold text-brand-deep transition-colors hover:bg-accent"
        >
          <Phone className="size-4" aria-hidden="true" />
          <span className="hidden xs:inline">{PHONE}</span>
        </a>
      </div>
    </div>
  );
}

export function FloatingCall() {
  return (
    <a
      href={PHONE_HREF}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-lift transition-transform hover:scale-[1.03]"
    >
      <Phone className="size-4" aria-hidden="true" />
      Позвонить бесплатно
    </a>
  );
}

export function Watchers() {
  const [count, setCount] = useState(17);

  useEffect(() => {
    setCount(13 + Math.floor(Math.random() * 9));
    const id = setInterval(() => {
      setCount((c) => Math.max(8, Math.min(26, c + (Math.random() < 0.5 ? -1 : 1))));
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/10 px-3.5 py-1.5 text-[13px] text-primary-foreground/85">
      <span className="size-2 animate-pulse rounded-full bg-primary-foreground" />
      <strong className="font-bold text-primary-foreground">{count}</strong> человек смотрят эту
      страницу прямо сейчас
    </p>
  );
}

export function Countdown() {
  const [left, setLeft] = useState(4 * 60 * 60 * 1000);

  useEffect(() => {
    const key = "artraid_lovushka_end";
    const stored = localStorage.getItem(key);
    const end = stored ? parseInt(stored, 10) : Date.now() + 4 * 60 * 60 * 1000;
    if (!stored) localStorage.setItem(key, String(end));
    const tick = () => setLeft(Math.max(0, end - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  const cells: Array<[string, string]> = [
    [pad(Math.floor(left / 3600000)), "ч"],
    [pad(Math.floor((left % 3600000) / 60000)), "мин"],
    [pad(Math.floor((left % 60000) / 1000)), "сек"],
  ];

  return (
    <div className="flex items-end justify-center gap-2">
      {cells.map(([value, label], i) => (
        <div key={label} className="flex items-end gap-2">
          {i > 0 && <span className="pb-3 text-xl font-bold text-brand-soft">:</span>}
          <div className="w-[74px] rounded-xl border border-primary-foreground/15 bg-primary-foreground/10 py-2 text-center">
            <div className="font-display text-2xl font-extrabold tabular-nums text-primary-foreground">
              {value}
            </div>
            <div className="text-[11px] uppercase tracking-wider text-primary-foreground/60">
              {label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
