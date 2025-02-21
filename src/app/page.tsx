export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 md:items-center sm:items-start">
        <div className="grid grid-cols-2 gap-4">
          <h1 className="text-4xl">Yogiswara Adinugraha Pramudita</h1>
          <h2 className="text-2xl text-gray-400">Full-Stack Developer</h2>
          <div className="w-70 flex flex-auto">
            <img src="images/468093824_10161799593172999_5849875353850637225_n.jpg" alt="" />
          </div>
          <h1 className="text-3xl">About</h1>
          <div className="flex">
            <p>
              I’m a person that can be described as easy adapting to a new
              environment and can be accepted in public and society. I also very
              often join any organization to become a member and progress with
              it until I became a leader. Also, I have some experience
              developing Web development, System or App Development, IOS
              Development, and Game Development. As a programmer, I also have
              great Logical Thinking and Abstract Thinking. I am also known as a
              cheerful, persistent, and hard-working person, with also a
              responsibility in mind to do everything the best I can and solve
              anything that has been given to me and try the best I can to reach
              my full potential.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <a href="#">Github</a>
          <a href="#">Linkedin</a>
          <a href="#">Email</a>
        </div>
        <div className="flex flex-col mt-16 gap-4 align-middle">
          <h1 className="text-5xl">Projects</h1>
          <div className="flex flex-row gap-14">
            <div className="max-w-sm p-6 bg-white border bnorder-gray-200 rounded-lg shadow-sm dark:bg-slate-500 dark:border-gray-700 gap-2">
              <h2 className="text-3xl">PT Lendis Cipta Media</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                incidunt?
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-800 rounded-lg hover:bg-cyan-600 focus:ring-4 foucus:outline-none focus:ring-cyan-800 dark:hover:bg-cyan-600 dark:focus:ring-cyan-900"
              >
                Go To Projects
              </a>
            </div>
            <div className="max-w-sm p-6 bg-white border bnorder-gray-200 rounded-lg shadow-sm dark:bg-slate-500 dark:border-gray-700 gap-2">
              <h2 className="text-3xl">Apple Academy</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                incidunt?
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-800 rounded-lg hover:bg-cyan-600 focus:ring-4 foucus:outline-none focus:ring-cyan-800 dark:hover:bg-cyan-600 dark:focus:ring-cyan-900"
              >
                Go To Projects
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
