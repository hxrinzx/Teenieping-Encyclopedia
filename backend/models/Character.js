const mongoose = require('mongoose');

// 캐릭터 스키마 정의
const CharacterSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    characteristic: { type: String, required: true },
    signature: { type: String, required: true },
    series: { type: String, required: true },
    image: { type: String, required: true },
    type: { type: String, required: true }
});

// 모델 생성
const Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;
