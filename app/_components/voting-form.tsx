"use client";

import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
// import { toast } from '@/components/ui/use-toast';

// Mock data for employees
const employees = [
	{ id: 1, name: "Alice Johnson" },
	{ id: 2, name: "Bob Smith" },
	{ id: 3, name: "Charlie Brown" },
	{ id: 4, name: "Diana Martinez" },
	{ id: 5, name: "Ethan Lee" },
];
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

export function VotingForm() {
	const [firstVote, setFirstVote] = useState("");
	const [secondVote, setSecondVote] = useState("");
	const [thirdVote, setThirdVote] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (firstVote && secondVote && thirdVote) {
			console.log("Votes submitted:", {
				firstVote,
				secondVote,
				thirdVote,
			});
			//   toast({
			//     title: 'Votes Submitted',
			//     description: 'Your votes have been successfully recorded.'
			//   });
		} else {
			console.log("Error");
			//   toast({
			//     title: 'Incomplete Votes',
			//     description: 'Please select an employee for each vote.',
			//     variant: 'destructive'
			//   });
		}
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size="lg">Cast Your Vote</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-lg">
				<DialogHeader>
					<DialogTitle>Cast Your Votes</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when you're done.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="space-y-2">
						<label className="text-sm font-medium">First Vote (5 points)</label>
						<Select onValueChange={setFirstVote}>
							<SelectTrigger>
								<SelectValue placeholder="Select an employee" />
							</SelectTrigger>
							<SelectContent>
								{employees.map((employee) => (
									<SelectItem key={employee.id} value={employee.id.toString()}>
										{employee.name}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div className="space-y-2">
						<label className="text-sm font-medium">
							Second Vote (3 points)
						</label>
						<Select onValueChange={setSecondVote}>
							<SelectTrigger>
								<SelectValue placeholder="Select an employee" />
							</SelectTrigger>
							<SelectContent>
								{employees.map((employee) => (
									<SelectItem key={employee.id} value={employee.id.toString()}>
										{employee.name}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div className="space-y-2">
						<label className="text-sm font-medium">Third Vote (2 points)</label>
						<Select onValueChange={setThirdVote}>
							<SelectTrigger>
								<SelectValue placeholder="Select an employee" />
							</SelectTrigger>
							<SelectContent>
								{employees.map((employee) => (
									<SelectItem key={employee.id} value={employee.id.toString()}>
										{employee.name}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<DialogFooter>
						<Button type="submit" className="mt-6">
							Submit Votes
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
