import { toast } from "react-toastify";
import { setChallenge } from "../features/challenge/challengeSlice";
import { useAppDispatch } from "../hooks";
import { getUserActiveChallenge } from "./userService";
import { Button } from "@/app/components/ui/button";
import axios from "axios";

const AddTestActivity = () => {
  const dispatch = useAppDispatch();

  const handleLoadChallenge = async () => {
    try {
      const data = await getUserActiveChallenge();
      if (data) {
        dispatch(setChallenge(data));
      }
    } catch (error) {
      console.error("Failed to load challenge:", error);
    } finally {
      sessionStorage.setItem("clouds_seen", "true");
    }
  };

  const handleAddManualActivity = async () => {
    try {
      const { data } = await axios.post("/api/user/activities", {
        name: "test",
        start_date: "2026-01-26 18:00:00",
        type: "Run",
        distance: "5000",
        moving_time: 300,
      });
      handleLoadChallenge();
    } catch (error: any) {
      toast.error(
        "Error adding manual activity. " + error.response.data.message,
      );
      console.log(error);
    }
  };
  return <Button onClick={handleAddManualActivity}>Test add</Button>;
};

export default AddTestActivity;
