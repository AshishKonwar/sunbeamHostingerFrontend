import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ScrollToTop from "./hooks/ScrollToTop";
import { routes, LazyRoute } from "./routes/index"; 
import Footer from "./components/common/Footer";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          {routes.map(({ path, element, title }) => (
            <Route 
              key={path} 
              path={path} 
              element={element}
              title={title}
            />
          ))}
        </Routes>
      </MainLayout>
      <Footer />
    </Router>
  );
}
