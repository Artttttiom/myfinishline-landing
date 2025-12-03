"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Shield,
  Palette,
  Globe,
  HelpCircle,
  LogOut,
  Moon,
  Smartphone,
  Mail,
  Link,
  Database,
  Clock,
  Volume2,
} from "lucide-react";
import SettingItem from "@/app/components/Application/Settings/SettingItem/SettingItem";
import SettingSection from "@/app/components/Application/Settings/SettingSection/SettingSection";
import { Separator } from "@/app/components/ui/separator";
import { ThemeToggle } from "@/app/components/theme-toggle";
import { cn } from "@/app/lib/utils";
import { useRouter } from "next/navigation";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [soundEffects, setSoundEffects] = useState(true);
  const [autoSync, setAutoSync] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const router = useRouter();

  const handleGoTo = (link: string) => {
    router.push(link);
  };

  return (
    <>
      <div className="pt-4"></div>
      <SettingSection title="Account" delay={1}>
        {/* <SettingItem
          icon={<User className="w-4 h-4" />}
          label="Profile"
          description="Name, email, and profile picture"
          onClick={() => {}}
          delay={1}
        />
        <SettingItem
          icon={<CreditCard className="w-4 h-4" />}
          label="Billing"
          description="Manage subscription and payments"
          onClick={() => {}}
          delay={2}
        /> */}
        <SettingItem
          icon={<Link className="w-4 h-4" />}
          label="Integrations"
          description="Strava, Garmin"
          onClick={() => handleGoTo("/myfinishline/integrations")}
          delay={3}
        />
      </SettingSection>

      <Separator className="my-6 bg-divider" />

      <SettingSection title="Preferences" delay={2}>
        <SettingItem
          icon={<Globe className="w-4 h-4" />}
          label="Language"
          type="info"
          value="English"
          onClick={() => {}}
          delay={4}
        />
        <SettingItem
          icon={<Clock className="w-4 h-4" />}
          label="Timezone"
          type="info"
          value="UTC-8"
          onClick={() => {}}
          delay={5}
        />
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 6 * 0.03, duration: 0.2 }}
          className={cn(
            "flex items-center justify-between px-3 py-3 rounded-md transition-colors group hover:bg-[hsl(var(--setting-hover))] active:bg-[hsl(var(--setting-active))]"
          )}
        >
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Moon className="w-4 h-4" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                Theme
              </p>
            </div>
          </div>
          <ThemeToggle />
        </motion.div>
        <SettingItem
          icon={<Volume2 className="w-4 h-4" />}
          label="Sound effects"
          type="toggle"
          value={soundEffects}
          onToggle={setSoundEffects}
          delay={7}
        />
      </SettingSection>

      <Separator className="my-6 bg-divider" />

      <SettingSection title="Notifications" delay={3}>
        <SettingItem
          icon={<Bell className="w-4 h-4" />}
          label="Push notifications"
          description="Get notified about updates"
          type="toggle"
          value={notifications}
          onToggle={setNotifications}
          delay={8}
        />
        <SettingItem
          icon={<Mail className="w-4 h-4" />}
          label="Email updates"
          description="Weekly digest and announcements"
          type="toggle"
          value={emailUpdates}
          onToggle={setEmailUpdates}
          delay={9}
        />
        <SettingItem
          icon={<Smartphone className="w-4 h-4" />}
          label="Mobile alerts"
          onClick={() => {}}
          delay={10}
        />
      </SettingSection>

      <Separator className="my-6 bg-divider" />

      <SettingSection title="Security" delay={4}>
        <SettingItem
          icon={<Shield className="w-4 h-4" />}
          label="Two-factor authentication"
          description="Add an extra layer of security"
          type="toggle"
          value={twoFactor}
          onToggle={setTwoFactor}
          delay={11}
        />
        <SettingItem
          icon={<Database className="w-4 h-4" />}
          label="Auto-sync"
          description="Keep your data synced across devices"
          type="toggle"
          value={autoSync}
          onToggle={setAutoSync}
          delay={12}
        />
      </SettingSection>

      <Separator className="my-6 bg-divider" />

      <SettingSection title="Support" delay={5}>
        <SettingItem
          icon={<HelpCircle className="w-4 h-4" />}
          label="Help center"
          onClick={() => {}}
          delay={13}
        />
        <SettingItem
          icon={<Palette className="w-4 h-4" />}
          label="What's new"
          description="Latest features and updates"
          onClick={() => {}}
          delay={14}
        />
      </SettingSection>

      <Separator className="my-6 bg-divider" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.25 }}
      >
        <SettingItem
          icon={<LogOut className="w-4 h-4" />}
          label="Sign out"
          onClick={() => {}}
          delay={15}
        />
      </motion.div>
    </>
  );
};

export default Settings;
