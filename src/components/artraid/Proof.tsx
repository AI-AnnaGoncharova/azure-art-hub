import { Award, FileCheck2, Microscope } from "lucide-react";

import { Countdown } from "./Chrome";

const proofs = [
  {
    icon: FileCheck2,
    title: "Регистрационное удостоверение Росздравнадзора",
    text: "№ РЗН 2024/24297. АРТРЕЙД зарегистрирован как медицинское изделие.",
  },
  {
    icon: Microscope,
    title: "Исследования физического факультета МГУ",
    text: "Исследовались свойства функционального наполнителя и его взаимодействие с инфракрасным излучением.",
  },
  {
    icon: Award,
    title: "Патент РФ № 2624381",
    text: "Техническое решение защищено патентом Российской Федерации.",
  },
];

export function Proof() {
  return (
    <section className="gradient-soft py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-3xl text-2xl font-extrabold leading-tight text-brand-deep sm:text-3xl">
          «А это вообще медицинское изделие?»
        </h2>
        <p className="mt-3 max-w-2xl text-base font-semibold text-brand-deep">
          Да. И документы можно посмотреть.
        </p>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Не верьте рекламе на слово. Посмотрите документы сами.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {proofs.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-3xl border border-border bg-card p-6 shadow-card"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-ice text-brand">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-bold text-brand-deep">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Регистрационное удостоверение",
            "Патент РФ № 2624381",
            "Товарный знак ARTRAID",
            "Ноу-хау АРТРЕЙД",
          ].map((label) => (
            <div
              key={label}
              className="flex aspect-3/4 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-brand-soft bg-ice p-5 text-center"
            >
              <FileCheck2 className="size-7 text-brand" aria-hidden="true" />
              <span className="text-sm font-semibold text-brand-deep">{label}</span>
              <span className="text-[11px] text-muted-foreground">скан документа</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Guarantee() {
  return (
    <section className="bg-brand-deep py-16 text-primary-foreground">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-soft">
          Полная финансовая безопасность
        </p>
        <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">
          «А если не поможет? Я попробую назад вернуть!»
        </h2>
        <p className="mt-4 text-base leading-relaxed text-primary-foreground/75">
          Мы знаем, сколько бесполезных кремов и таблеток вы уже купили. Поэтому мы берём весь риск
          на себя. Попробуйте АРТРЕЙД в течение 14 дней. Если облегчения не будет, тяжесть не уйдёт,
          а судороги продолжат беспокоить — наш генеральный директор гарантирует возврат 100%
          стоимости изделия без лишних вопросов.
        </p>
        <p className="mt-8 text-[13px] text-primary-foreground/60">
          Акционная цена действует ещё:
        </p>
        <div className="mt-3">
          <Countdown />
        </div>
      </div>
    </section>
  );
}
