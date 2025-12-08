import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ClimateCreds',
  description: 'ClimateCreds is a platform that provides businesses with AI-driven carbon offset projects tailored to their unique footprints, allowing them to easily reduce their environmental impact and appeal to eco-conscious consumers.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">ClimateCreds</h1>
      <p className="mt-4 text-lg">ClimateCreds is a platform that provides businesses with AI-driven carbon offset projects tailored to their unique footprints, allowing them to easily reduce their environmental impact and appeal to eco-conscious consumers.</p>
    </main>
  )
}
