import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applyHead, buildHeadTags } from "@/seo/head";
import { getPageMeta } from "@/seo/pageMeta";

/**
 * Keeps <title>, meta description, canonical, Open Graph and JSON-LD in sync
 * during client-side navigation. The first load is already correct because
 * scripts/prerender.mjs bakes the same tags into every page's HTML.
 */
const RouteSeo = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    applyHead(buildHeadTags(getPageMeta(pathname)));
  }, [pathname]);
  return null;
};

export default RouteSeo;
