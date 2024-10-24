import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { getShortenAddress } from "@/lib/helpers/getShortenAddress";

interface Vote {
	id: number;
	address: string;
	firstVote: string;
	secondVote: string;
	thirdVote: string;
}

interface VotingTableProps {
	votes: Vote[];
}

export default function VotersTable({ votes }: VotingTableProps) {
	const getSerialNumber = (index: number) => index + 1;

	return (
		<Table>
			<TableCaption>A list of votes you have casted</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>S/N</TableHead>
					<TableHead>Address</TableHead>
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
						<TableCell>{getShortenAddress(vote.address, 6, 8)}</TableCell>
						<TableCell>{vote.thirdVote}</TableCell>
						<TableCell>{vote.secondVote}</TableCell>
						<TableCell>{vote.firstVote}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
