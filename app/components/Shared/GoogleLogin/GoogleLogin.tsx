import { googleAuthUrl } from "@/app/lib/utils/googleAuth";

const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";

export default function GoogleLogin() {
  return (
    <button onClick={() => (window.location.href = googleAuthUrl())}>
      Continue with Google
    </button>
  );
}
