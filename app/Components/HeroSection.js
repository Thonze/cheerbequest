import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("./banner.png")' }}>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10 flex items-center justify-center h-full">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold">Raise Funds for that project you want to achieve</h1>
        <p className="mt-4 text-xl">With few easy steps, raise funds for a motive today</p>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="/start-fundraiser" className="bg-blue-600 text-white py-2 px-4 rounded-full">Start a CheerBequest</a>
          <a href="/how-it-works" className="bg-transparent border border-white py-2 px-4 rounded-full text-white">See How It Works</a>
        </div>
      </div>
    </div>
  </section>

  );
}
