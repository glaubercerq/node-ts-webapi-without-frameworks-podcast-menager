export interface PodcastModel {
  readonly podcastName: string;
  readonly episode: string;
  readonly videoId: string;
  readonly categories: readonly string[];
}
