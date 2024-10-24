import StatsCard from "./_components/stats-card";
import TabList from "./_components/tab-list";

export default function AdminPanel() {
	return (
		<div className="container mx-auto max-w-7xl p-6 space-y-8 pt-20">
			<h1 className="text-3xl font-bold">Admin Panel</h1>
			<StatsCard />
			<TabList />
		</div>
	);
}
