"use client";
import React, { useState } from "react";
import Logo from "./logo";
import Search from "./search";
import Link from "next/link";

interface navItemsType {
	icon: string;
	name: string;
	show: boolean;
    path: string;
}

function Header() {
	const login = false;
	const navItems: navItemsType[] = [
		{
			icon: "ri-time-fill",
			name: "Latest",
			show: true,
            path: "/latest"
		},
		{
			icon: "ri-menu-line",
			name: "Categories",
			show: true,
            path: "/categories"
		},
		{
			icon: "ri-add-large-fill",
			name: "Upload",
			show: true,
            path: "/upload"
		},
		{
			icon: "ri-login-box-fill",
			name: "Login",
			show: !login,
            path: "/login"
		},
		{
			icon: "ri-logout-box-r-fill",
			name: "Logout",
			show: login,
            path: "/logout"
		},
	];
	return (
		<>
			<header className="fixed top-0 w-full px-4 py-1.5 z-40 header bg-[#0d1b1e] text-[#fff] border-b-2 border-[#9ebdff]">
				<nav className="flex justify-between items-center">
					<div className="flex items-center gap-5">
						<Link href={"/"}><Logo /></Link>
						<div className="hidden ml-4">
							<Search className="w-64 lg:w-80 h-9" />
						</div>
					</div>
						<div className="flex flex-row hide-header-icons gap-x-5 items-center sm md:items-center">
							{navItems.map(
								(singleItem) =>
									singleItem.show && (
                                        <Link href={singleItem.path} key={singleItem.name}>
										<button
											className="text-lg hover:border-b-2 duration-75 py-2"
											key={singleItem.name}
										>
											{singleItem.icon && (
												<i
													className={`mr-1 ${singleItem.icon}`}
												/>
											)}
											{singleItem.name}
										</button>
                                            </Link>
									)
							)}
							{!login && (
								<Link href="create-account"><button className="p-2 hover:bg-[#e8dcb9] hover:duration-150 duration-150 hover:text-[#0d1b1e] border-2 w-full md:w-auto text-center">
									CREATE AN ACCOUNT
								</button></Link>
							)}
						</div>
				</nav>
				<div className="mt-4 hidden px-4">
					<Search className="w-full h-9" />
				</div>
			</header>
		</>
	);
}

export default Header;
