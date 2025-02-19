export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 md:items-center sm:items-start">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl">Yogiswara Adinugraha Pramudita</h1>
          <h2 className="text-2xl text-gray-500">Full-Stack Developer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            dignissimos incidunt amet itaque quos alias!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            dignissimos incidunt amet itaque quos alias!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            dignissimos incidunt amet itaque quos alias!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            dignissimos incidunt amet itaque quos alias!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            dignissimos incidunt amet itaque quos alias!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            dignissimos incidunt amet itaque quos alias!
          </p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <a href="#">Github</a>
          <a href="#">Linkedin</a>
          <a href="#">Email</a>
        </div>
        <div className="flex flex-col mt-20 gap-4">
          <h1 className="text-5xl">Projects</h1>
          <div className="flex flex-row gap-14">
            <div className="max-w-sm p-6 bg-white border bnorder-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 gap-2">
              <h2 className="text-3xl">PT Lendis Cipta Media Jaya</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                incidunt?
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-900 focus:ring-4 foucus:outline-none focus:ring-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-indigo-800"
              >
                Go To Projects
              </a>
            </div>
            <div className="max-w-sm p-6 bg-white border bnorder-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 gap-2">
              <h2 className="text-3xl">Apple Academy</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                incidunt?
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-900 focus:ring-4 foucus:outline-none focus:ring-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-indigo-800"
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
