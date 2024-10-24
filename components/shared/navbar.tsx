import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { adminWhitelist } from "@/db/adminWhitelist";
import { getAuth } from "@everipedia/iq-login";
import Link from "next/link";
import { IqWikiIcon } from "./iq-wiki-logo";
import { MobileMenu, NavLinks } from "./mobile-menu";
import { ThemeSwitcher } from "./theme-switcher";
import { getShortenAddress } from "@/lib/helpers/getShortenAddress";
import { RiLogoutBoxLine } from "@remixicon/react";

export default async function Navbar() {
	const { address } = await getAuth();

	const isLoggedIn = !!address;
	const isAdmin = adminWhitelist
		.map((admin) => admin.toLowerCase())
		.includes(address?.toLowerCase() as string);
	const user = { name: "John Doe", email: "john@example.com" };

	return (
		<nav className="bg-background border-b">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<Link href="/" className="flex items-center">
							<IqWikiIcon className="h-8 w-8 mr-2" />
							<span className="text-xl font-semibold">IQ.vote</span>
						</Link>
						<div className="hidden md:flex md:ml-10 md:space-x-8">
							<NavLinks isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
						</div>
					</div>
					<div className="flex items-center">
						<ThemeSwitcher />
						<div className="hidden md:block">
							{isLoggedIn ? (
								<div className="flex items-center gap-4">
									<UserAvatar size={30} address={address} user={user} />
								</div>
							) : (
								<div className="space-x-2">
									<Button asChild>
										<Link href="/login">Login</Link>
									</Button>
								</div>
							)}
						</div>
						<MobileMenu isLoggedIn={isLoggedIn} user={user} isAdmin={isAdmin} />
					</div>
				</div>
			</div>
		</nav>
	);
}

function UserAvatar({
	address,
	user,
	size,
}: { address: string; user: { name: string }; size: number }) {
	const dicebearUrl = `https://api.dicebear.com/9.x/shapes/svg?seed=${address || user.name || "Anonymous"}&size=${10}`;
	return (
		<div className="flex items-center space-x-2">
			<Avatar style={{ width: size, height: size }}>
				<AvatarImage src={dicebearUrl} alt={user.name} />
				<AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
			</Avatar>
		</div>
	);
}
