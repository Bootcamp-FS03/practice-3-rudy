export default {
    SECRET_KEY : process.env["SECRET_KEY"] ?? "mockSecretKey",
    PORT: process.env["PORT"] ?? 3000
};