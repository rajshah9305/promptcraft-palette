import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Main Layout */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex gap-8">
          <MainContent />
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Index;
