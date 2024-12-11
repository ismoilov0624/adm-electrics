import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout/main-layout";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";
import "./global.scss";
import { Company_structure } from "./pages/company_structure/company_structure";
import { News } from "./pages/news/news";
import { NewsDetail } from "./pages/news-detail/news-detail";

function App() {
  return (
    <>
      <Routes path>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/company_structure" element={<Company_structure />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="news/news-detail/:slug" element={<NewsDetail />} />
          <Route path="news-detail/:slug" element={<NewsDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
