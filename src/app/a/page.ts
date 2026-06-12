import { permanentRedirect } from "next/navigation";

export default async function Redirect() {
  permanentRedirect(`https://drive.google.com/file/d/1wjHdE-ks5eVP5vEB2U694z7b_lHJQ57g/view?usp=sharing`);
}
