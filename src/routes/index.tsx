import { createFileRoute } from "@tanstack/react-router";

import { FloatingCall, TopBar, UrgencyBar } from "@/components/artraid/Chrome";
import { Hero } from "@/components/artraid/Hero";
import { RootCause, Traps } from "@/components/artraid/Traps";
import { HowItWorks, Result } from "@/components/artraid/HowItWorks";
import { Guarantee, Proof } from "@/components/artraid/Proof";
import { LeadForm, SiteFooter } from "@/components/artraid/LeadForm";

const title = "АРТРЕЙД — повязка от тяжести и отёков в ногах";
const description =
  "Медицинская повязка АРТРЕЙД возвращает инфракрасное тепло тела к сосудам голени: снимает ночной венозный застой, тяжесть, отёки и судороги. РЗН 2024/24297.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <UrgencyBar />
      <TopBar />
      <main>
        <Hero />
        <Traps />
        <RootCause />
        <HowItWorks />
        <Result />
        <Proof />
        <Guarantee />
        <LeadForm />
      </main>
      <SiteFooter />
      <FloatingCall />
    </>
  );
}
