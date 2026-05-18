import { permanentRedirect } from "next/navigation";

export default async function Redirect() {
  permanentRedirect(`https://docs.google.com/presentation/d/1NsU-st4B2JnKsyx4682l8Wkro5xIhBKKSivRTA-3PhY/edit?usp=drivesdk`);
}