import { ProfileCard } from "@/components/profile-card";

const user = {
  name: "Jessica Randall",
  image: "/avatar-jessica.jpeg",
  location: "London, United Kingdom",
  bio: "Front-end developer and avid reader.",
  links: [
    {
      name: "GitHub",
      url: "#",
    },
    {
      name: "Frontend Mentor",
      url: "#",
    },
    {
      name: "LinkedIn",
      url: "#",
    },
    {
      name: "Twitter",
      url: "#",
    },
    {
      name: "Instagram",
      url: "#",
    },
  ],
};

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <ProfileCard user={user} />
    </main>
  );
}
