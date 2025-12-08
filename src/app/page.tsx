import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ClimateKit Pro',
  description: 'ClimateKit Pro offers small businesses and e-commerce platforms tailored climate solutions through AI-driven tools and sustainable product integrations, helping them reduce carbon footprints while enhancing brand reputation.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">ClimateKit Pro</h1>
      <p className="mt-4 text-lg">ClimateKit Pro offers small businesses and e-commerce platforms tailored climate solutions through AI-driven tools and sustainable product integrations, helping them reduce carbon footprints while enhancing brand reputation.</p>
    </main>
  )
}
