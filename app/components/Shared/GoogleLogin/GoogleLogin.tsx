import { googleAuthUrl } from "@/app/lib/utils/googleAuth";
import { Button } from "../../ui/button";

const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";

export default function GoogleLogin() {
  return (
    <Button
      className="mt-2"
      variant="outline"
      onClick={() => (window.location.href = googleAuthUrl())}
    >
      Continue with Google
    </Button>
  );
}
