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
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
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