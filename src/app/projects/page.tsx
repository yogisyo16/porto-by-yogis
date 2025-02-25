import Link from "next/link";
import Image from "next/image";

export default function Projects() {
return (
<div className="grid items-center justify-items-center min-h-screen">
    <main className="flex flex-col gap-4 row-start-1 md:items-center sm:items-center">
        <div className="flex flex-col gap-4">
            <h1 className="text-4xl text-center">
                Projects
            </h1>
            <img src="/images/Pro Display XDR.png" alt="" className="w-100" />
        </div>
        <div className="flex flex-row gap-4 items-center">
            <Link href="https://github.com/yogisyo16" target="_blank">
                <Image
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                className="w-10 h-10 hover:bg-slate-500 rounded-lg"
                alt="GitHub Yogis"
                />
            </Link>
            <Link href="https://www.linkedin.com/in/yogiswara-adinugraha/" target="_blank">
                <Image
                src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
                className="w-10 h-10 hover:bg-slate-500 rounded-lg"
                alt=""
                />
            </Link>
            <Link href="https://www.instagram.com/yogiss_1010/" target="_blank">
                <Image
                src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"
                className="w-10 h-10 hover:bg-slate-500 rounded-lg"
                alt=""
                />
            </Link>
        </div>
    </main>
    <footer className="flex flex-wrap row-start-2 mt-10 items-center">
        <p>Copyright &copy; 2025 Yogiswara Adinugraha Pramudita</p>
    </footer>
</div>
);
}
