const app = require('express')();  // define var called 'app' (المتغير دا بينادي علي الفانكشن اللي اسمها اكسبريس

const http = require('http').Server(app); // define var called 'http' ( .....بتاعي app بعد كدة هبدأ اضيف ليه ال )
// http ف انت كدة هترن الابليكشن علي السيرفر بستخدام ال

const io = require('socket.io')(http); //http يرن علي ال  socket عشان ال 

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
