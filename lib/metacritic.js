import { MOCK_GAMES } from "./mock-games";

export async function getLatestGames() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  return MOCK_GAMES;
}

export async function getGameDetails(slug) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const game = MOCK_GAMES.find((g) => g.slug === slug);

  return {
    ...game,
    reviews: [
      {
        quote: "¡Increíble juego, altamente recomendado!",
        score: 100,
        date: "2024-01-01",
        publicationName: "Gamer Magazine",
        author: "Juan Pérez",
      },
    ],
  };
}