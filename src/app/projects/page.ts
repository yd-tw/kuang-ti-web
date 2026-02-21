import { permanentRedirect } from "next/navigation";

export default async function Redirect() {
  permanentRedirect(`/project`);
}
