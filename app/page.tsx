import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block  text-center justify-center">
        <h1 className={title()}>Transforming human possibilities</h1> <br />
        <h1 className={title()}>through the power of story.</h1>
        <h2 className={subtitle({ class: "mt-4 text-justify pl-10 pr-10" })}>
          Sutranovum is a licensing brand and an educational platform focused on the journey to the healed mind. It draws on myths and stories and wisdom from around the world but it is especially rooted in the teachings of the Indian sage Ramana
          Maharshi and the spiritual focus implied in the teachings of the Course in Miracles.
        </h2>
      </div>
    </section>
  );
}
