export default function LegalHero({
  title,
  updated,
}: {
  title: string;
  updated: string;
}) {
  return (
    <section className="bg-[#E9E8E4]">
      <div className="mx-auto max-w-[900px] px-6 pt-32 pb-14 sm:px-10 sm:pt-40 sm:pb-16 lg:pt-48">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-neutral-500">
          Last updated: {updated}
        </p>
      </div>
    </section>
  );
}