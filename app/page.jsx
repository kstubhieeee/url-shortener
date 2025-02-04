import Image from "next/image"
import localFont from "next/font/local"
import Link from "next/link"

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
})

export default function Home() {
  return (
    <main className="bg-purple-100 min-h-screen">
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:min-h-[50vh]">
        <div className="flex flex-col gap-6 items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16">
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center ${poppins.className}`}>
            The best URL shortener in the Market
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-center max-w-xl">
            We are the most straightforward URL Shortener in the world. Most URL shorteners will track you or ask for
            your details to log in. We understand your needs and have created this URL shortener with your privacy in
            mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Link href="/shorten" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg shadow-lg px-6 py-3 font-bold text-white text-sm sm:text-base">
                Try Now
              </button>
            </Link>
            <Link href="/github" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-purple-500 hover:bg-purple-600 transition-colors rounded-lg shadow-lg px-6 py-3 font-bold text-white text-sm sm:text-base">
                GitHub
              </button>
            </Link>
          </div>
        </div>
        <div className="relative h-64 sm:h-96 lg:h-auto order-first lg:order-last">
          <Image
            className="mix-blend-darken object-cover"
            alt="Vector illustration"
            src="/vector.jpg"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </section>
    </main>
  )
}

