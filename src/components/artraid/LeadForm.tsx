import { Package } from "lucide-react";
import { useState } from "react";

import { PHONE, PHONE_HREF } from "./Chrome";

export function LeadForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="form" className="py-16 lg:py-24">
      <div className="mx-auto max-w-2xl px-5">
        <div className="rounded-[28px] border border-border bg-card p-6 shadow-lift sm:p-9">
          <h2 className="text-2xl font-extrabold leading-tight text-brand-deep sm:text-3xl">
            Освободите ноги от тяжести уже завтра утром
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Запишитесь на бесплатную консультацию специалиста. Разберём вашу ситуацию, поможем
            подобрать размер и комплектацию, назовём точную стоимость и расскажем о быстрой доставке.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-ice px-4 py-2 text-[13px] font-semibold text-brand-deep">
            <Package className="size-4 text-brand" aria-hidden="true" />
            Осталось <strong className="font-extrabold">7</strong> изделий по акционной цене
          </div>

          <div className="mt-4 rounded-2xl border-l-4 border-brand bg-secondary px-4 py-3 text-sm text-brand-deep">
            <strong>Специальное предложение сегодня:</strong> бесплатная консультация + скидка 15% на
            первое изделие при заполнении формы.
          </div>

          {sent ? (
            <div className="mt-7 rounded-2xl border border-brand-soft bg-ice p-6 text-center">
              <p className="font-bold text-brand-deep">Заявка отправлена</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Перезвоним в течение 15 минут. Если удобнее — звоните сами:{" "}
                <a href={PHONE_HREF} className="font-semibold text-brand">
                  {PHONE}
                </a>
              </p>
            </div>
          ) : (
            <form
              className="mt-7 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-brand-deep">
                  Ваше имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Например, Ирина"
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-semibold text-brand-deep">
                  Номер телефона
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <label className="flex items-start gap-3 text-[13px] text-muted-foreground">
                <input
                  type="checkbox"
                  required
                  defaultChecked
                  className="mt-0.5 size-4 accent-[var(--brand)]"
                />
                <span>Я согласен(на) на обработку моих персональных данных</span>
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-card transition-transform hover:scale-[1.01]"
              >
                Получить консультацию и скидку →
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Бесплатно · Перезвоним в течение 15 минут · Никаких обязательств
              </p>
            </form>
          )}
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
          Имеются противопоказания. Перед применением ознакомьтесь с инструкцией. Изделие не заменяет
          медикаментозное лечение, назначенное врачом, и компрессионный трикотаж в острых стадиях
          заболевания.
        </p>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10 pb-28 text-center">
      <p className="text-sm text-muted-foreground">
        © 2026 АРТРЕЙД · ООО «НПО ТехПродЗдрав». Все права защищены.
      </p>
      <p className="mt-2 text-[11px] text-muted-foreground/80">
        Регистрационное удостоверение на медицинское изделие № РЗН 2024/24297.
      </p>
    </footer>
  );
}
