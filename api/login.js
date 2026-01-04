export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { password } = req.body;
  const correctPassword = process.env.ACCESS_PASSWORD;

  if (!correctPassword) {
    return res.status(500).json({ error: "Password env variable missing" });
  }

  if (password !== correctPassword) {
    return res.status(401).json({ success: false });
  }

  res.setHeader(
    "Set-Cookie",
    "session=valid; Path=/; HttpOnly; SameSite=Strict; Secure; Max-Age=86400"
  );

  return res.status(200).json({ success: true });
}