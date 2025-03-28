
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
            <header className="text-center mb-10">
                <h1 className="text-5xl font-bold mb-4">Boost Your Brand with Us!</h1>
                <p className="text-lg">We create impactful ad campaigns that drive results.</p>
            </header>

            <section className="text-center space-y-4">
                <p className="text-xl">Your one-stop solution for digital advertising.</p>
                <p className="text-lg">Maximize your reach and get your brand noticed.</p>
                <p className="text-lg font-medium">Please wait, we are redirecting you to your destination.</p>
                <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-2xl shadow-lg hover:bg-gray-100">Get Started</button>
            </section>

            <footer className="absolute bottom-4 text-sm text-white/70">&copy; {new Date().getFullYear()} adXInternet. All rights reserved.</footer>
        </div>
  );
}
