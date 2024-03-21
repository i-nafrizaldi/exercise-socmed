import LeftSection from "./component/leftSection";
import MidSection from "./component/midSection";
import RightSection from "./component/rightSection";

export default function Home() {
  return (
    <main className="container mx-auto">
      <section className="mt-10 grid h-[600px] w-full grid-cols-5 gap-5 py-4">
        {/* LEFT SECTION */}
        <div className="flex flex-col items-center justify-between space-y-3">
          <LeftSection />
        </div>

        {/* MAIN */}
        <div className="col-span-3">
          <MidSection />
        </div>

        {/* RIGTH SECTION */}
        <RightSection />
      </section>
    </main>
  );
}
