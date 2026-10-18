import Blogs from "@/components/home/Blogs";
import ExploreExams from "@/components/home/ExploreExams";
import Faqs from "@/components/home/FAQs";
import SuccessStories from "@/components/home/SuccessStories";
import TopBanner from "@/components/home/TopBanner";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="w-full min-w-0">
      <TopBanner />

      <ExploreExams />

      <WhyChooseUs />

      <SuccessStories />

      <Faqs />

      {/* Blog and study resources */}
      <section aria-label="Latest articles" className="section-sm">
        <div className="container">
          <Blogs />
        </div>
      </section>
    </div>
  );
}
