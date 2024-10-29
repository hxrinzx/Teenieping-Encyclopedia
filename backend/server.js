const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

// Express 앱 생성
const app = express();

// 미들웨어 설정
app.use(express.json());

// CORS 설정
app.use(cors({
    origin: ['http://localhost:3000', 'https://teenieping-encyclopedia.vercel.app'], // 로컬과 Vercel 도메인 둘 다 허용
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// 라우트 불러오기
const characterRoutes = require('./routes/characters');
app.use('/api', characterRoutes);

// 정적 파일 제공 설정 (images 폴더)
app.use('/images', express.static(path.join(__dirname, 'images')));

// MongoDB 연결
mongoose.connect(process.env.MONGO_URL, {
    connectTimeoutMS: 30000, // 타임아웃을 30초로 설정
    socketTimeoutMS: 30000   // 소켓 타임아웃 30초로 설정
})
    .then(() => console.log('MongoDB 연결 성공'))
    .catch(err => console.error('MongoDB 연결 실패:', err));

const net = require('net');

const testConnection = () => {
    const client = new net.Socket();
    client.connect(27017, 'cluster0-shard-00-00.wlw0c.mongodb.net', () => {
        console.log('MongoDB 포트에 연결 성공!');
        client.destroy();
    });

    client.on('error', (err) => {
        console.error('MongoDB 포트 접근 불가:', err.message);
    });
};

testConnection();

// 서버 실행
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
