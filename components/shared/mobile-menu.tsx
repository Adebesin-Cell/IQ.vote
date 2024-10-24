"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

interface User {
	name: string;
	email: string;
}

interface MobileMenuProps {
	isLoggedIn: boolean;
	user: User;
	isAdmin: boolean;
}

interface NavLinksProps {
	isLoggedIn: boolean;
	isAdmin: boolean;
}

export const MobileMenu = ({ isLoggedIn, user, isAdmin }: MobileMenuProps) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div className="md:hidden">
			<Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
				<SheetTrigger asChild>
					<Button variant="ghost" size="icon" aria-label="Open menu">
						<Menu className="h-6 w-6" />
					</Button>
				</SheetTrigger>
				<SheetContent side="right" className="w-[300px] sm:w-[400px]">
					<nav className="flex flex-col space-y-4 mt-4">
						<NavLinks isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
						{isLoggedIn ? (
							<div className="pt-4 border-t">
								<div className="flex items-center mb-4">
									<Avatar className="h-10 w-10 mr-4">
										<AvatarImage
											src="https://github.com/shadcn.png"
											alt={user.name}
										/>
										<AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
									</Avatar>
									<div>
										<div className="font-medium">{user.name}</div>
										<div className="text-sm text-muted-foreground">
											{user.email}
										</div>
									</div>
								</div>
								<Button
									variant="ghost"
									className="w-full justify-start"
									asChild
								>
									<Link href="/profile">Profile</Link>
								</Button>
								<Button variant="ghost" className="w-full justify-start">
									Log out
								</Button>
							</div>
						) : (
							<div className="pt-4 border-t space-y-2">
								<Button
									variant="ghost"
									className="w-full justify-start"
									asChild
								>
									<Link href="/login">Log in</Link>
								</Button>
								<Button className="w-full justify-start" asChild>
									<Link href="/signup">Sign up</Link>
								</Button>
							</div>
						)}
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export const NavLinks = ({ isLoggedIn, isAdmin }: NavLinksProps) => (
	<>
		{/* <Link
      href='/'
      className='text-muted-foreground hover:text-foreground transition-colors'
    >
      Home
    </Link>
    {isLoggedIn && (
      <Link
        href='/vote'
        className='text-muted-foreground hover:text-foreground transition-colors'
      >
        Vote
      </Link>
    )} */}

		{isAdmin && (
			<Link
				href="/admin"
				className="text-muted-foreground hover:text-foreground transition-colors"
			>
				Admin
			</Link>
		)}
	</>
);
