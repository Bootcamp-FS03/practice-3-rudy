import { Router } from "express";
import apiRouter from "./api.router.js";
import { users, withoutPassword } from "./fakeData.js";
import jwt from "jsonwebtoken";
import env from "./environment.js";
import { randomInt } from "crypto";
import { faker } from "@faker-js/faker";
export const appRouter = Router();
const { SECRET_KEY } = env;

appRouter.post("/auth/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) =>( u.username === username || u.email === username)  && u.password === password
  );

  if (!user) {
    return res.status(404).json({ error: "Invalid credentials" });
  }

  const accessToken = jwt.sign(
    {user:withoutPassword(user)},
    SECRET_KEY,
    { expiresIn: "30m" }
  );

  // Send the JWT token as a cookie
  return res.json({ accessToken });
});

appRouter.post("/auth/register", (req, res) => {
  const { name, lastname, username, email, password } = req.body;

  // Check if the user already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Create a new user
  const newUser = {id: randomInt(1000,9999), name, lastname, username, email, password, profilePicture: faker.image.avatarGitHub()};
  users.push(newUser);

  return res
    .status(201)
    .json({ status: "success", message: "User registered successfully"});
});

appRouter.use("/api", apiRouter);

export default appRouter;
