import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies();
  const athleteCookie = cookieStore.get("strava_athlete");

  if (athleteCookie) {
    redirect("/homepage");
  }

  return "";
}
