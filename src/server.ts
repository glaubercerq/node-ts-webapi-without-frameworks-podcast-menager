import * as http from "http";
import { app } from "./app";

const PORT = process.env.PORT || 3333;
const server = http.createServer(app);

server.listen(Number(PORT), () => {
  console.log(`Server running on port ${PORT}`);
});
