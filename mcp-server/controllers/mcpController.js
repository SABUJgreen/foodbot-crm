export const processCommand = async (req, res) => {
  const { command } = req.body;

  if (!command) {
    return res.status(400).json({ error: "Missing command in request body" });
  }

  // Mock processing
  res.json({ success: true, message: `Command received: ${command}` });
};
