import * as http from "http";
import {
  getListEpisodes,
  getFilterEpisodes,
} from "./controllers/podscasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";
import { StatusCode } from "./utils/status-code";
import { ContentType } from "./utils/content-type";

const sendNotFound = (response: http.ServerResponse): void => {
  const headers = { 
    "Content-Type": ContentType.JSON,
    "Access-Control-Allow-Origin": "*"
  };
  response.writeHead(StatusCode.NotFound, headers);
  response.end(JSON.stringify({ error: "Route not found" }));
};

const sendMethodNotAllowed = (response: http.ServerResponse): void => {
  const headers = { 
    "Content-Type": ContentType.JSON,
    "Access-Control-Allow-Origin": "*"
  };
  response.writeHead(StatusCode.MethodNotAllowed, headers);
  response.end(JSON.stringify({ error: "Method not allowed" }));
};

const sendHealthCheck = (response: http.ServerResponse): void => {
  const headers = { 
    "Content-Type": ContentType.JSON,
    "Access-Control-Allow-Origin": "*"
  };
  response.writeHead(StatusCode.OK, headers);
  response.end(JSON.stringify({ status: "OK", timestamp: new Date().toISOString() }));
};

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
): Promise<void> => {
  const baseUrl = request.url?.split("?")[0];
  const method = request.method;

  if (method === HttpMethod.OPTIONS) {
    response.writeHead(StatusCode.OK, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    response.end();
    return;
  }

  if (method === HttpMethod.GET && baseUrl === Routes.HEALTH) {
    sendHealthCheck(response);
    return;
  }

  if (method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
    return;
  }

  if (method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
    await getFilterEpisodes(request, response);
    return;
  }

  if (method !== HttpMethod.GET) {
    sendMethodNotAllowed(response);
    return;
  }

  sendNotFound(response);
};
