import Footer from "./Footer";
import Header from "./Header";
// making layout component to wrap the header and footer around the main content 
function MainLayout({ children }) {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;