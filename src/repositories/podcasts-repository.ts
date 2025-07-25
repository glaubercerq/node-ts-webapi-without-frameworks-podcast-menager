import { promises as fs } from "fs";
import * as path from "path";
import { PodcastModel } from "../models/podcast-model";

const DATA_PATH = path.join(process.cwd(), "src", "repositories", "podcasts.json");

let cachedData: PodcastModel[] | null = null;

const loadPodcastData = async (): Promise<PodcastModel[]> => {
  if (cachedData) {
    return cachedData;
  }

  try {
    const rawData = await fs.readFile(DATA_PATH, "utf-8");
    cachedData = JSON.parse(rawData) as PodcastModel[];
    return cachedData;
  } catch (error) {
    console.error("Error loading podcast data:", error);
    console.error("Attempted path:", DATA_PATH);
    return [];
  }
};

export const repositoryPodcast = async (
  podcastName?: string
): Promise<PodcastModel[]> => {
  const data = await loadPodcastData();

  if (!podcastName) {
    return data;
  }

  return data.filter(
    (podcast) => podcast.podcastName.toLowerCase() === podcastName.toLowerCase()
  );
};
