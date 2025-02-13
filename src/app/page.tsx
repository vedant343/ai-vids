import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black pt-16">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4">
          Transform your videos with the help of FAL AI
        </h1>
        <p className="text-xl text-gray-700">
          Experience the power of AI-driven video transformation and unleash
          your creativity.
        </p>
      </div>
      <Link href="/videoupload">
        <button className="bg-black text-white px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition">
          Get Started
          <span className="ml-1">➡️</span>
        </button>
      </Link>
      <section className="mt-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Tested Video Transformation by FAL
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Discover how our advanced AI technology transforms videos with
          stunning results.
        </p>
        <Link href="/videoupload">
          {/* //{source video and resulted video section } */}
        </Link>
      </section>
    </div>
  );
}
