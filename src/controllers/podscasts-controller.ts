import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/podcast-transfer-model";

const DEFAULT_HEADERS = { 
  "Content-Type": ContentType.JSON,
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

const sendResponse = (res: ServerResponse, content: PodcastTransferModel): void => {
  res.writeHead(content.statusCode, DEFAULT_HEADERS);
  res.end(JSON.stringify(content.body));
};

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> => {
  try {
    const content = await serviceListEpisodes();
    sendResponse(res, content);
  } catch (error) {
    console.error("Error in getListEpisodes:", error);
    res.writeHead(500, DEFAULT_HEADERS);
    res.end(JSON.stringify({ error: "Internal Server Error" }));
  }
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> => {
  try {
    const content = await serviceFilterEpisodes(req.url);
    sendResponse(res, content);
  } catch (error) {
    console.error("Error in getFilterEpisodes:", error);
    res.writeHead(500, DEFAULT_HEADERS);
    res.end(JSON.stringify({ error: "Internal Server Error" }));
  }
};
