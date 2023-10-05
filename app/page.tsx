import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center w-full gap-6">
        <h2 className="text-text text-center font-bold text-xl">
          Je rédige et corrige ton contenu web
        </h2>
        <p className="text-text text-center text-base">
          Toujours en quête de nouveauté et d&apos;originalité, j&apos;aime mettre en lumière des projets inspirants grâce à mes compétences en SEO et en copywriting.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-8 px-10">
        <Card heading={
          <>
            Entrepreneur•euse
            <div className="h-2 w-40 absolute left-3 bottom-0.5 bg-fern-green-underline rounded" />
          </>
        }>
          Tu recherches un accompagnement en communication sur les réseaux au fil de ton développement&nbsp;?
        </Card>
        <Card heading={
          <>
            Porteur•euse de projets
            <div className="h-2 w-48 absolute left-2 bottom-0.5 bg-fern-green-underline rounded" />
          </>
        }>
          Tu as besoin de diffuser tes actions sur le web et les réseaux pour faire parler de ton projet&nbsp;?
        </Card>
        <Card heading={
          <>
            Artisan
            <div className="h-2 w-16 absolute left-3 bottom-0.5 bg-fern-green-underline rounded" />
          </>
        }>
          Tu souhaites promouvoir sur le web une description claire et captivante de ton produit ou de tes services&nbsp;?
        </Card>
        <Card heading={
          <>
            Je communique en ton nom
            <div className="h-2 w-24 absolute left-2 bottom-0.5 bg-secondary-outline rounded" />
          </>
        }>
          Je définis ton client idéal ainsi que le message qui attirera son attention, de manière transparente et authentique.
        </Card>
      </div>
    </main>
  )
}
