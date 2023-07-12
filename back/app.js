const app = require('./express');

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`서버 실행중: http://localhost:${PORT}`);
});
