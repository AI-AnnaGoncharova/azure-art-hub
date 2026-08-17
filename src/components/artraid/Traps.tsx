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
          <h2 className="text-2xl font-extrabold leading-tight text-brand-deep sm:text-3xl">
            Почему ноги к вечеру становятся такими тяжёлыми
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Весь день они работают вместе с вами.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Ходьба, лестницы, дорога, домашние дела, долгое сидение или стояние — к вечеру нагрузка
            на ноги накапливается.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            И хочется одного: снять обувь, вытянуть ноги и наконец почувствовать облегчение.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Но если каждый вечер повторяется один и тот же сценарий — можно бесконечно менять мази и
            компрессы. А можно попробовать другой принцип.
          </p>
        </div>
      </div>
    </section>
  );
}
