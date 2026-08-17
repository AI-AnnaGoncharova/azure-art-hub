import howItWorks from "@/assets/how-it-works.png.asset.json";
import relief from "@/assets/relief.png.asset.json";

const steps = [
  {
    n: "01",
    title: "Тело излучает тепло",
    text: "Это происходит постоянно — даже когда вы просто отдыхаете.",
  },
  {
    n: "02",
    title: "Материал АРТРЕЙД взаимодействует с тепловым излучением",
    text: "Внутри слоя с микросферами оно многократно рассеивается.",
  },
  {
    n: "03",
    title: "Часть теплового потока возвращается к поверхности тела",
    text: "И всё это — за счёт тепла, которое организм уже создаёт сам.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-brand-deep py-16 text-primary-foreground lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-soft">
          Механизм действия
        </p>
        <h2 className="mt-3 max-w-3xl text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
          Повязка не греет извне. Она возвращает ваше собственное тепло внутрь
        </h2>

        <div className="mt-10 overflow-hidden rounded-[28px] border border-primary-foreground/15 bg-primary-foreground/5 p-4 sm:p-8">
          <img
            src={howItWorks.url}
            alt="Схема: тепло уходит от ноги, повязка с микросферами отражает ИК-излучение обратно к голени"
            loading="lazy"
            className="mx-auto w-full max-w-3xl"
          />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-6"
            >
              <span className="font-display text-3xl font-extrabold text-brand-soft">{s.n}</span>
              <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Result() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="kicker">Результат</p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight text-brand-deep sm:text-3xl">
            Надели вечером — встали утром на легких ногах
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            АРТРЕЙД надевается на голень на время сна или отдыха. Никаких таблеток, запаха мазей и
            неудобных процедур: мягкая повязка, которая работает ровно тогда, когда организм
            беззащитен перед застоем.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["14 дней", "гарантия возврата"],
              ["8 часов", "работы за ночь"],
              ["№ 2624381", "патент РФ"],
            ].map(([big, small]) => (
              <div key={big} className="rounded-2xl border border-border bg-card p-4 shadow-card">
                <dt className="font-display text-xl font-extrabold text-brand">{big}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{small}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="overflow-hidden rounded-[28px] border border-border shadow-card">
          <img
            src={relief.url}
            alt="Женщина отдыхает с приподнятыми на подушках ногами"
            loading="lazy"
            className="aspect-4/3 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
