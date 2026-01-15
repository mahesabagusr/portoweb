import ScrollFloat from "@/components/ScrollFloat";

export default function Experience(): React.JSX.Element {
  return (
    <section className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 pointer-events-none">
      <div className="space-y-8 sm:space-y-12">
        {/* Section Title */}
        <div className="text-center">
          <ScrollFloat
            containerClassName="mb-4 "
            textClassName="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] !text-6xl"
            scrollStart="top bottom"
            scrollEnd="center center"
          >
            Education
          </ScrollFloat>
          <ScrollFloat
            containerClassName="mb-100"
            textClassName="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] !text-sm sm:!text-base md:!text-lg !font-medium"
            animationDuration={1}
            ease="back.inOut(1)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            My journey and contributions
          </ScrollFloat>
        </div>
      </div>
    </section>
  );
}
