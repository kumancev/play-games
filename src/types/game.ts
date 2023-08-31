export type GameItem = {
  id: number
  title: string
  thumbnail: string
  short_description: string
  game_url: string
  genre: string
  platform: string
  publisher: string
  developer: string
  release_date: string
  freetogame_profile_url: string
}

export type Screenshot = {
  id: number
  image: string
}

type MinimumSystemRequirements = {
  os: string
  processor: string
  memory: string
  graphics: string
  storage: string
}

export type GameFull = {
  id: number
  title: string
  thumbnail: string
  status: string
  short_description: string
  description: string
  game_url: string
  genre: string
  platform: string
  publisher: string
  developer: string
  release_date: string
  freetogame_profile_url: string
  minimum_system_requirements: MinimumSystemRequirements
  screenshots: Array<Screenshot>
}
