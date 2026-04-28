import express from "express";
import cors from "cors";
import errorMiddleware from "./middlewares/error.middleware";
import env from "./utils/env";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: env.clientUrl as string,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.get("/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "health check ok",
  });
});

// error handling
app.use(errorMiddleware);

app.listen(env.port, () => {
  console.log(`Server is running on port ${env.port}`);
});
