const express = require('express');
const router = express.Router();
const { getAllCharacters, insertInitialData } = require('../controllers/characterController');

// 모든 캐릭터 가져오기
router.get('/characters', getAllCharacters);

// 초기 데이터 삽입 (필요시 호출)
router.get('/init-data', insertInitialData);

module.exports = router;
