// NOTE: minimal local shape to avoid a packages/ -> apps/ dependency.
// If NFD (shared database package) gets its own package, import Club from there instead.
interface ClubLike {
  id: string;
  name: string;
}

export class RandomClubEngine {
  draw<T extends ClubLike>(clubs: T[]): T {
    const index = Math.floor(Math.random() * clubs.length);
    return clubs[index];
  }
}
