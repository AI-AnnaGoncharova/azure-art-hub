import veins from "@/assets/veins.png.asset.json";
import stockings from "@/assets/stockings.png.asset.json";
import nightCramps from "@/assets/night-cramps.png.asset.json";
import pain from "@/assets/pain.png.asset.json";
import heavyLegs from "@/assets/heavy-legs.png.asset.json";

const traps = [
  {
    image: veins.url,
    alt: "Выступающие вены на ноге",
    title: "Капустный лист и травы",
    text: "Холодно. Мокро. Иногда действительно становится приятнее. Но проходит время — и ноги снова напоминают о себе.",
  },
  {
    image: pain.url,
    alt: "Покраснение и воспаление на голени",
    title: "Мази и гели",
    text: "Один тюбик. Второй. Третий. Пока мажете — кажется, что что-то делаете. Но если тяжесть возвращается каждый вечер, хочется уже другого решения.",
  },
  {
    image: stockings.url,
    alt: "Женщина надевает компрессионный чулок",
    title: "Пиявки и процедуры",
    text: "Когда простые способы не помогают, в ход идут способы посложнее. Но далеко не каждому хочется превращать заботу о ногах в бесконечные процедуры.",
  },
  {
    image: nightCramps.url,
    alt: "Ночные судороги в ногах",
    title: "Терпеть и ждать",
    text: "«Возраст». «У всех ноги к вечеру устают». «Само пройдёт». Но когда тяжесть, отёчность или судороги начинают мешать отдыхать, спать и нормально двигаться — игнорировать их становится всё сложнее.",
  },
];

export function Traps() {
  return (
    <section className="gradient-soft py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="kicker">Почему ничего не помогало</p>
        <h2 className="mt-3 max-w-3xl text-2xl font-extrabold leading-tight text-brand-deep sm:text-3xl lg:text-4xl">
          «Я уже всё пробовала» — и это правда. Проблема не в вас, а в методах.
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {traps.map((t) => (
            <article
              key={t.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1"
            >
              <img
                src={t.image}
                alt={t.alt}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-base font-bold text-brand-deep">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RootCause() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[28px] border border-border shadow-card">
          <img
            src={heavyLegs.url}
            alt="Женщина с тяжёлыми кандалами на ногах — образ тяжести в ногах"
            loading="lazy"
            className="aspect-4/3 w-full object-cover"
          />
        </div>
        <div>
          <p className="kicker">Корень проблемы</p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight text-brand-deep sm:text-3xl">
            Ночной венозный застой: пока вы спите, кровь стоит
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Ночью мышцы голени не работают, и мышечно-венозный насос выключается. Кровь застаивается
            в глубоких венах, стенки сосудов растягиваются, ткани недополучают кислород. Отсюда —
            утренняя тяжесть, отёк к вечеру и судороги в 3 часа ночи.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Тепло тела уходит в воздух вместо того, чтобы работать на сосуды",
              "Сосуды сужаются, кровоток замедляется до минимума",
              "Каждое утро вы начинаете с накопленной, а не отдохнувшей ноги",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-border bg-ice px-4 py-3 text-sm text-brand-deep"
              >
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
