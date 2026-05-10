import Spheres from "../elements/pit";
import { SectionDivider } from "../elements/compstruct";

export default function Landing() {
  return (
    <>
      <div className="grid grid-cols-12 mx-auto bg-white dark:bg-black ">
        <div className="col-span-2 border border-stone-200/50 dark:border-stone-900"></div>

        <div className="h-[20rem] flex justify-center items-center text-center col-span-8 border-t border-b border-stone-200/50 dark:border-stone-900 bg-white dark:bg-black bg-[image:var(--bg-hero-light)] dark:bg-[image:var(--bg-hero-dark)]">
          <h1 className="text-2xl md:text-8xl text-stone-900 dark:text-stone-100 font-medium font-mont py-2 ">
            AYUAR
          </h1>
        </div>

        <div className="col-span-2 border border-stone-200/50 dark:border-stone-900"></div>
      </div>

      <div className="grid grid-cols-12 mx-auto bg-white dark:bg-black ">
        <div className="col-span-2 border border-stone-200/50 dark:border-stone-900"></div>

        <div className="h-[28rem] col-span-8 border-t border-b border-stone-200/50 dark:border-stone-900 bg-white dark:bg-black ">
          <Spheres />
        </div>

        <div className="col-span-2 border border-stone-200/50 dark:border-stone-900"></div>
      </div>

      <SectionDivider />
    </>
  );
}
