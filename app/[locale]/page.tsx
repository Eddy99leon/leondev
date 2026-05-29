import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";

export default async function Page(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale,
    namespace: "Home"
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">{t("title")}</h1>
          <p>{t("description1")}</p>
          <p>{t("description2")}</p>
          <Button className="mt-2">{t("button")}</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          {t("toggleHint")}
        </div>
      </div>
    </div>
  );
}