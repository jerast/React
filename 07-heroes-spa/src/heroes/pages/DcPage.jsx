import { HeroList } from "@/heroes";

export const DcPage = () => {
	return (
		<main className="grid gap-4 p-8 animate__animated animate__fadeIn">
			<h1 className="text-start">DC Comics</h1>

			<HeroList publisher="DC Comics" />
		</main>
	);
};
