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
        <h2 className={subtitle({ class: "mt-10 text-center pl-10 pr-10" })}>Sutranovum is a licensing brand and an educational platform focused healing the mind. It draws on myths, stories and wisdom from around the world.</h2>
      </div>
    </section>
  );
}
