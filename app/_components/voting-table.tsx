import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

interface Vote {
	id: number;
	month: string;
	firstVote: string;
	secondVote: string;
	thirdVote: string;
}

interface VotingTableProps {
	votes: Vote[];
}

export default function VotingTable({ votes }: VotingTableProps) {
	const getSerialNumber = (index: number) => index + 1;

	return (
		<Table>
			<TableCaption>A list of votes you have casted</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>S/N</TableHead>
					<TableHead>Month</TableHead>
					<TableHead>3 Points</TableHead>
					<TableHead>2 Points</TableHead>
					<TableHead>1 Point</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{votes.map((vote, index) => (
					<TableRow key={vote.id}>
						<TableCell className="font-medium">
							{getSerialNumber(index)}
						</TableCell>
						<TableCell className="font-medium">{vote.month}</TableCell>
						<TableCell>{vote.thirdVote}</TableCell>
						<TableCell>{vote.secondVote}</TableCell>
						<TableCell>{vote.firstVote}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
