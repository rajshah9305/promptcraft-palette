import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/5">
      <Header />
      
      {/* Main Layout with enhanced spacing and visual appeal */}
      <div className="container mx-auto px-6 pt-24 pb-8">
        <div className="flex gap-8">
          <MainContent />
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Index;
