import { permanentRedirect } from "next/navigation";

export default async function Redirect() {
  permanentRedirect(`https://docs.google.com/presentation/d/1pbnWrmqdaKyxrhM48vLpPTt5XggCRf7lbN9JV8nlP88/edit?usp=sharing`);
}
