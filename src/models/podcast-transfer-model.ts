import { PodcastModel } from "./podcast-model";

export interface PodcastTransferModel {
  readonly statusCode: number;
  readonly body: readonly PodcastModel[];
}
