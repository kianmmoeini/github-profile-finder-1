import Footer from "./Footer";
import Header from "./Header";
// making layout component to wrap the header and footer around the main content 
function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Header />

      <main className="main-content">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;