export const linkFitbit = () => {
  const clientId = process.env.NEXT_PUBLIC_FITBIT_CLIENT_ID;
  const redirectUri = encodeURIComponent(
    process.env.NEXT_PUBLIC_FITBIT_REDIRECT_URI!,
  );

  console.log(process.env.NEXT_PUBLIC_FITBIT_REDIRECT_URI);

  const fitbitAuthUrl = `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=23TMMY&redirect_uri=${encodeURIComponent("https://dev.myfinishline.io/auth/fitbit/callback")}&scope=activity%20heartrate%20sleep`;

  window.location.href = fitbitAuthUrl;
};
