import React from "react";

import { Route, Routes } from "react-router";
import AutoBlog from "./Pages/AutoBlog";
import InternalLinks from "./Pages/InternalLinks";
import FreeBacklinks from "./Pages/FreeBacklinks";
import Integrations from "./Pages/Integrations";
import Subscription from "./Pages/Subscription";
import AffiliateProgram from "./Pages/AffiliateProgram";
import HelpCenter from "./Pages/HelpCenter";
import Updates from "./Pages/Updates";
import LiveChatSupport from "./Pages/LiveChatSupport";
import Profile from "./Pages/Profile";
import Articles from "./Pages/Articles";
import CreateArticle from "./Pages/SubMenu/CreateArticle";
import GeneratedArticles from "./Pages/SubMenu/GeneratedArticles";
import KeywordProjects from "./Pages/SubMenu/KeywordProjects";
import AiKeyword from "./Pages/SubMenu/AiKeyword";
import StealCompetitor from "./Pages/SubMenu/StealCompetitor";
import ImportKeyword from "./Pages/SubMenu/ImportKeyword";
import ManualKeyword from "./Pages/SubMenu/ManualKeyword";
import BulkKeyword from "./Pages/SubMenu/BulkKeyword";
import LongtailKeyword from "./Pages/SubMenu/LongtailKeyword";
import ArticleSettings from "./Pages/SubMenu/ArticleSettings";
import Layout from "./Pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Articles />} />

        <Route path="articles" element={<Articles />}>
          <Route path="create-article" element={<CreateArticle />} />
          <Route path="generated-articles" element={<GeneratedArticles />} />
          <Route path="keyword-projects" element={<KeywordProjects />} />
          <Route path="al-keyword-to-article" element={<AiKeyword />} />
          <Route
            path="steal-competitor-keyword"
            element={<StealCompetitor />}
          />
          <Route path="import-keyword-from-gsc" element={<ImportKeyword />} />
          <Route path="manual-keyword-to-article" element={<ManualKeyword />} />
          <Route path="bulk-keyword-to-article" element={<BulkKeyword />} />
          <Route
            path="longtail-keyword-to-article"
            element={<LongtailKeyword />}
          />
          <Route path="article-settings" element={<ArticleSettings />} />
        </Route>

        <Route path="auto-blog" element={<AutoBlog />} />
        <Route path="internal-links" element={<InternalLinks />} />
        <Route path="free-backlinks" element={<FreeBacklinks />} />
        <Route path="integrations" element={<Integrations />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="affiliate-program" element={<AffiliateProgram />} />
        <Route path="help-center" element={<HelpCenter />} />
        <Route path="updates" element={<Updates />} />
        <Route path="live-chat-support" element={<LiveChatSupport />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
