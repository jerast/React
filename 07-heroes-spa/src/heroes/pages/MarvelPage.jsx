import { HeroList } from "@heroes";

export const MarvelPage = () => {
	return (
		<main className="grid gap-4 p-8 animate__animated animate__fadeIn">
			<h1 className="text-start">Marvel Comics</h1>
         
			<HeroList publisher="Marvel Comics" />
		</main>
	);
};
