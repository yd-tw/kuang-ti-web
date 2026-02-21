import { permanentRedirect } from "next/navigation";

// 此頁面處理 1.0 版本時的的舊部落格頁面，重定向到新部落格首頁
export default async function Redirect() {
  permanentRedirect(`/blog`);
}