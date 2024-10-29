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
    origin: 'http://localhost:3000', // 프론트엔드 도메인 명시
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // 허용할 HTTP 메서드
    credentials: true // 인증 정보가 있는 요청 허용
}));

// 라우트 불러오기
const characterRoutes = require('./routes/characters');
app.use('/api', characterRoutes);

// 정적 파일 제공 설정 (images 폴더)
app.use('/images', express.static(path.join(__dirname, 'images')));

// MongoDB 연결
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB 연결 성공'))
    .catch(err => console.error('MongoDB 연결 실패:', err));

// 서버 실행
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
