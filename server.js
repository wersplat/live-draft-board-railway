import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Serve static build folder
app.use(express.static(path.resolve('./build')));

// SPA fallback
app.get('*', (_req, res) => {
  res.sendFile(path.resolve('./build/index.html'));
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
