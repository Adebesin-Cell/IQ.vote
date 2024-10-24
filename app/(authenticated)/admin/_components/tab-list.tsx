"use client";

import type React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VotersTable from "./voters-table";

const users = [
	{
		id: 1,
		name: "Alice Johnson",
		email: "alice@example.com",
		isWhitelisted: true,
	},
	{ id: 2, name: "Bob Smith", email: "bob@example.com", isWhitelisted: false },
	{
		id: 3,
		name: "Charlie Brown",
		email: "charlie@example.com",
		isWhitelisted: true,
	},
];

const voteSubmissions = [
	{
		id: 1,
		address: "0x162217e3b309cDd8855613d7CcC6283505993c58",
		firstVote: "Bob Smith",
		secondVote: "Charlie Brown",
		thirdVote: "Diana Martinez",
	},
	{
		id: 2,
		address: "0x162217e3b309cDd8855613d7CcC6283505993c58",
		firstVote: "Charlie Brown",
		secondVote: "Diana Martinez",
		thirdVote: "Ethan Lee",
	},
];

const topEmployees = [
	{ rank: 1, name: "Charlie Brown", points: 13 },
	{ rank: 2, name: "Diana Martinez", points: 8 },
	{ rank: 3, name: "Bob Smith", points: 5 },
];

export default function TabList() {
	const [newUserEmail, setNewUserEmail] = useState("");

	const handleWhitelist = (userId: number) => {
		console.log("userId", userId);
		// toast({
		//   title: 'User Whitelisted',
		//   description: `User with ID ${userId} has been whitelisted.`
		// });
	};

	const handleAddUser = (e: React.FormEvent) => {
		e.preventDefault();

		// toast({
		//   title: 'User Added',
		//   description: `New user with email ${newUserEmail} has been added.`
		// });
		setNewUserEmail("");
	};

	return (
		<Tabs defaultValue="users">
			<TabsList>
				<TabsTrigger value="users">Manage Users</TabsTrigger>
				<TabsTrigger value="votes">Vote Submissions</TabsTrigger>
				<TabsTrigger value="results">Results</TabsTrigger>
			</TabsList>
			<TabsContent value="users" className="space-y-4">
				<Card className="col-span-2 md:col-span-1">
					<CardHeader>
						<CardTitle>Total Users</CardTitle>
						<CardDescription>Table for all employees</CardDescription>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Name</TableHead>
									<TableHead>Email</TableHead>
									<TableHead>Whitelist Status</TableHead>
									<TableHead>Action</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{users.map((user) => (
									<TableRow key={user.id}>
										<TableCell>{user.name}</TableCell>
										<TableCell>{user.email}</TableCell>
										<TableCell>
											{user.isWhitelisted ? "Whitelisted" : "Not Whitelisted"}
										</TableCell>
										<TableCell>
											{!user.isWhitelisted && (
												<Button onClick={() => handleWhitelist(user.id)}>
													Whitelist
												</Button>
											)}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="votes">
				<Card className="col-span-2 md:col-span-1">
					<CardHeader>
						<CardTitle>Total Votes</CardTitle>
						<CardDescription>Summary of votes cast</CardDescription>
					</CardHeader>
					<CardContent>
						<VotersTable votes={voteSubmissions} />
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="results">
				<Card className="col-span-2 md:col-span-1">
					<CardHeader>
						<CardTitle>Vote Result</CardTitle>
						<CardDescription>
							Cummulative results for votes casted
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Rank</TableHead>
									<TableHead>Employee</TableHead>
									<TableHead>Points</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{topEmployees.map((employee) => (
									<TableRow key={employee.rank}>
										<TableCell>{employee.rank}</TableCell>
										<TableCell>{employee.name}</TableCell>
										<TableCell>{employee.points}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</TabsContent>
		</Tabs>
	);
}
