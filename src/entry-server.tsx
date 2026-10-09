import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppRoutes from "./AppRoutes";
import { buildHeadTags, serializeTags } from "./seo/head";
import { getAllPageMeta, NOT_FOUND_META } from "./seo/pageMeta";
import { SITE } from "./seo/siteData";

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
}

export { buildHeadTags, serializeTags, getAllPageMeta, NOT_FOUND_META, SITE };
