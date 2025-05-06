import Image from "next/image";

type ProfileCardProps = {
  user: {
    name: string;
    image: string;
    location: string;
    bio: string;
    links: {
      name: string;
      url: string;
    }[];
  };
};

export function ProfileCard({ user }: ProfileCardProps) {
  return (
    <section className="w-full space-y-6 rounded-xl bg-gray-800 p-6 text-center sm:max-w-md md:p-10 lg:max-w-96">
      <Image src={user.image} alt={user.name} className="mx-auto rounded-full" width={88} height={88} priority />
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">{user.name}</h1>
        <span className="text-green text-sm font-bold">{user.location}</span>
      </div>
      <p className="text-sm">&quot;{user.bio}&quot;</p>
      <nav>
        <ul className="space-y-4">
          {user.links.map((link) => (
            <li key={link.name}>
              <a href={link.url} className="social-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
