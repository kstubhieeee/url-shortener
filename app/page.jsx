import localFont from "next/font/local"
import Link from "next/link"
import { Rocket, Github, ArrowRight, Sparkles, Lock, Zap } from 'lucide-react'
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";



const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
})




export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="flex flex-col gap-8 items-center justify-center text-center">
          <div className="flex items-center gap-3 text-yellow-500">
            <Sparkles className="w-8 h-8" />
            <span className="text-sm font-semibold tracking-wider uppercase">Premium URL Shortener</span>
            <Sparkles className="w-8 h-8" />
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-200 text-transparent bg-clip-text ${poppins.className}`}>
            Transform Your Long URLs Into Golden Links
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl">
            Experience the most elegant URL shortener in the market. Privacy-focused,
            no sign-up required, and completely free to use.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto mt-4">
            <Link href="/shorten" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto gradient-btn transition-all rounded-lg px-8 py-4 font-bold text-black text-sm sm:text-base flex items-center justify-center gap-2">
                <Rocket size={20} />
                Start Shortening
                <ArrowRight size={16} />
              </button>
            </Link>
            <Link href="/github" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto border border-yellow-500/30 hover:border-yellow-500 bg-black/50 
                transition-all rounded-lg px-8 py-4 font-bold text-yellow-500 text-sm sm:text-base 
                flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                <Github size={20} />
                View on GitHub
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="bg-black p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-lg font-bold text-yellow-500 mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Instant URL shortening with blazing-fast redirects</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-lg font-bold text-yellow-500 mb-2">Privacy First</h3>
              <p className="text-gray-400">No tracking, no data collection, just pure URL shortening</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-lg font-bold text-yellow-500 mb-2">Custom URLs</h3>
              <p className="text-gray-400">Create memorable short links with custom aliases</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
        >
          <Image
            src={`/linkner.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </main>
  )
}