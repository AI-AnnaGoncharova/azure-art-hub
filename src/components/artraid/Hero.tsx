import { ShieldCheck, Sparkles } from "lucide-react";

import productWear from "@/assets/product-wear.png.asset.json";
import video from "@/assets/artraid-video.mp4.asset.json";
import { Watchers } from "./Chrome";

export function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-soft">
            Ловушка привычных решений
          </p>
          <h1 className="mt-4 text-balance text-3xl font-extrabold leading-[1.1] text-primary-foreground sm:text-4xl lg:text-5xl">
            Капустный лист, мази и пиявки не убирают тяжесть в ногах. Это делает медицинская физика.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Повязка АРТРЕЙД возвращает собственное инфракрасное тепло тела к сосудам голени —
            кровоток разгоняется, ночной венозный застой уходит, а вместе с ним тяжесть, отёк и
            судороги.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#form"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3.5 text-sm font-bold text-brand-deep shadow-lift transition-transform hover:scale-[1.02]"
            >
              <Sparkles className="size-4" aria-hidden="true" />
              Получить консультацию и скидку 15%
            </a>
            <span className="inline-flex items-center gap-2 text-[13px] text-primary-foreground/75">
              <ShieldCheck className="size-4" aria-hidden="true" />
              Возврат 100% в течение 14 дней
            </span>
          </div>

          <div className="mt-7">
            <Watchers />
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[28px] border border-primary-foreground/15 bg-primary-foreground/5 shadow-lift">
            <img
              src={productWear.url}
              alt="Женщина с повязкой АРТРЕЙД на голени отдыхает на диване"
              className="aspect-4/5 w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="mt-4 overflow-hidden rounded-2xl border border-primary-foreground/15 bg-brand-deep/40">
            <video
              className="aspect-video w-full"
              src={video.url}
              controls
              playsInline
              preload="metadata"
            />
            <p className="px-4 py-3 text-[13px] text-primary-foreground/70">
              2 минуты: почему народные средства не работают
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
