export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-4 row-start-1 md:items-center sm:items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl text-center">
            Yogiswara Adinugraha Pramudita
          </h1>
          <h2 className="text-2xl text-gray-400 text-center">
            Full-Stack Developer
          </h2>
          <div className="flex flex-col mt-12 gap-4">
            <h3 className="text-5xl text-center">About</h3>
            <p className="flex-wrap mx-80 md:text-wrap sm:text-wrap">
              I am an adaptable and highly motivated individual who thrives in
              new environments and integrates well into diverse teams and
              communities. My experience spans web development, system and
              application development, iOS development, and game development. As
              a programmer, I possess strong logical and abstract thinking
              skills, enabling me to analyze and solve complex problems
              effectively.
            </p>
            <p className="flex-wrap mx-80 md:text-wrap sm:text-wrap">
              I have a proven track record of actively participating in
              organizations, progressing from a member to a leadership role.
              Known for my cheerful demeanor, persistence, and strong work
              ethic, I am committed to delivering high-quality results and
              continuously striving to reach my full potential.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <a href="https://github.com/yogisyo16" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              className="w-10 h-10 hover:bg-slate-500 rounded-lg"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/yogiswara-adinugraha/"
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
              className="w-10 h-10 hover:bg-slate-500 rounded-lg"
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/yogiss_1010/" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"
              className="w-10 h-10 hover:bg-slate-500 rounded-lg"
              alt=""
            />
          </a>
        </div>
      </main>
      <footer className="flex flex-wrap row-start-2 mt-10 items-center">
        <p>Copyright &copy; 2025 Yogiswara Adinugraha Pramudita</p>
      </footer>
    </div>
  );
}
