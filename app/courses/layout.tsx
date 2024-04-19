import CourseMenu from "@/components/Courses/CourseMenu";
import ContactCTA from "@/components/common/ContactCTA";
import Footer from "@/components/Footer";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="my-12 view-container xl:max-w-7xl mx-auto">
        {/* header */}
        <div className="flex flex-col gap-2">
          <CourseMenu />
          {children}
          <ContactCTA />
        </div>
      </div>
      <Footer />
    </>
  );
}
