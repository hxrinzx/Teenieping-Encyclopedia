const Character = require('../models/Character');

// 모든 캐릭터 데이터 조회
const getAllCharacters = async (req, res) => {
    try {
        const characters = await Character.find();
        res.status(200).json(characters);
    } catch (error) {
        res.status(500).json({ message: '데이터 조회 실패: ' + error });
    }
};

// 데이터베이스에 JSON 데이터 삽입 (한 번만 사용)
const insertInitialData = async (req, res) => {
    const jsonData = [
        {
            "id": 1,
            "name": "하츄핑",
            "characteristic": "애교가 넘치는 사랑의 티니핑. 언제나 친구들을 도와주고 싶어하는 사랑둥이 요정 캐릭터이다.",
            "signature": "손거울",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/heartsping.png',
            "type": "loyal"
        },
        {
            "id": 2,
            "name": "바로핑",
            "characteristic": "항상 바른 생활을 추구하는 성실한 올바름의 티니핑. 모두가 올바른 생활을 하게 만들고 싶어하는 귀여운 잔소리쟁이 요정 캐릭터이다.",
            "signature": "책",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/baroping.png',
            "type": "loyal"
        },
        {
            "id": 3,
            "name": "아자핑",
            "characteristic": "용기만 있다면 뭐든 다 할 수 있다고 생각하는 요기의 티니핑. 겁이 없어 생각보다 몸이 먼저 움직여버리는 다혈질 요정 캐릭터이다.",
            "signature": "카메라",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/azaping.png',
            "type": "loyal"
        },
        {
            "id": 4,
            "name": "차차핑",
            "characteristic": "어떤 힘든 상황이 와도 좌절하지 않는 희망의 티니핑. 낙관적인 사고를 가진 배려의 아이콘 캐릭터이다.",
            "signature": "물뿌리개",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/chachaping.png',
            "type": "loyal"
        },
        {
            "id": 5,
            "name": "라라핑",
            "characteristic": "방방 뛰며 노래를 좋아하는 즐거움의 티니핑. 음치에 박치인 수다쟁이 캐릭터이다.",
            "signature": "마이크",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/lalaping.png',
            "type": "loyal"
        },
        {
            "id": 6,
            "name": "해핑",
            "characteristic": "사소한 것에도 감탄하는 행복의 티니핑. 단순한 마음을 가진 호기심 많은 요정이다.",
            "signature": "비눗방울 장난감",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/happying.png',
            "type": "loyal"
        },
        {
            "id": 7,
            "name": "키키핑",
            "characteristic": "장난을 좋아하는 개구쟁이 마음의 티니핑. 산만하지만 미워할 수 없는 귀염둥이이다.",
            "signature": "막대사탕",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/kikiping.png',
            "type": "basic"
        },
        {
            "id": 8,
            "name": "아잉핑",
            "characteristic": "사랑스러운 애교의 티니핑. 엉뚱하고 발랄한 애교쟁이이다.",
            "signature": "리본봉",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/aing.png',
            "type": "basic"
        },
        {
            "id": 9,
            "name": "부끄핑",
            "characteristic": "부끄러움을 많이 타는 티니핑. 이목이 집중되면 얼굴이 빨개진다.",
            "signature": "당근쿠션",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/shyping.png',
            "type": "basic"
        },
        {
            "id": 10,
            "name": "부투핑",
            "characteristic": "승부욕이 강한 티니핑. 모두가 경쟁하게 만들고 싶어하는 열혈 캐릭터이다.",
            "signature": "깃발",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/butuping.png',
            "type": "basic"
        },
        {
            "id": 11,
            "name": "깜빡핑",
            "characteristic": "건망증이 심한 망각의 티니핑. 프린세스가 누구인지조차 깜빡 잊어버리는 귀여운 덜렁이 캐릭터이다.",
            "signature": "지우개",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/blankping.png',
            "type": "basic"
        },
        {
            "id": 12,
            "name": "띠용핑",
            "characteristic": "아이들이 원하는 것을 보이게 만드는 상상의 티니핑. 쾌활하고 장난기가 가득한 장난꾸러기 캐릭터이다.",
            "signature": "마술사 모자, 마술봉",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/ddiyongping.png',
            "type": "basic"
        },
        {
            "id": 13,
            "name": "주르핑",
            "characteristic": "온순하고 발랄한 울고 싶은 마음의 티니핑. 눈물 사탕을 맛보기 위해 사람들을 울게 만드는 캐릭터이다.",
            "signature": "나뭇잎 우산",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/juluping.png',
            "type": "basic"
        },
        {
            "id": 14,
            "name": "차나핑",
            "characteristic": "모든 것을 귀찮아하는 티니핑. 맛있는 것을 먹으려다도 귀찮아서 포기하는 게으름쟁이 캐릭터이다.",
            "signature": "커다란 베개",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/chanaping.png',
            "type": "basic"
        },
        {
            "id": 15,
            "name": "따라핑",
            "characteristic": "모두가 자신의 생각을 따라하게 만드는 티니핑. 아이돌 헤이쥬를 좋아하는 따라쟁이 캐릭터이다.",
            "signature": "망원경",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/ddaraping.png',
            "type": "basic"
        },
        {
            "id": 16,
            "name": "나르핑",
            "characteristic": "자신을 너무 사랑하게 만드는 나르시즘의 티니핑. 자신의 미적 기준이 확고하며 자기애가 넘치는 캐릭터이다.",
            "signature": "립스틱",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/narrping.png',
            "type": "basic"
        },
        {
            "id": 17,
            "name": "무셔핑",
            "characteristic": "놀래키는 걸 좋아하는 두려움의 티니핑이다. 상대를 무섭게 만드는 걸 좋아하지만 사실은 겁쟁이 캐릭터이다.",
            "signature": "손전등",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/scareping.png',
            "type": "basic"
        },
        {
            "id": 18,
            "name": "투투핑",
            "characteristic": "나만 사랑해주길 바라는, 질투의 티니핑. 로미 공주님이 세상에서 제일 예쁘다고 생각하는 로미 바라기 캐릭터이다.",
            "signature": "아이섀도 팔레트와 섀도브러쉬",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/tutuping.png',
            "type": "basic"
        },
        {
            "id": 19,
            "name": "차캐핑",
            "characteristic": "배려심 가득한 착한 마음의 티니핑. 착한 아이에게는 도장을 찍어 행운을 주는 상냥한 행운의 요정 캐릭터이다.",
            "signature": "얼굴 도장",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/chakeping.png',
            "type": "basic"
        },
        {
            "id": 20,
            "name": "떠벌핑",
            "characteristic": "사람들이 속으로 생각하는 것을 말하게 만드는 티니핑. 남의 비밀을 떠벌떠벌 얘기하는 것을 좋아하는 귀여운 수다쟁이 캐릭터이다.",
            "signature": "확성기",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/tteobulping.png',
            "type": "basic"
        },
        {
            "id": 21,
            "name": "다조핑",
            "characteristic": "뭐든 탐내며 손에 넣고 싶은 욕심의 티니핑. 특히 먹을 것은 절대 양보하지 않는 새침한 욕심쟁이 캐릭터이다.",
            "signature": "바구니",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/dazoping.png',
            "type": "basic"
        },
        {
            "id": 22,
            "name": "화나핑",
            "characteristic": "귀여운 다혈질, 분노의 티니핑. 화가 나면 몸에서 열기를 뿜어대는 뜨거운 분노의 아이콘 캐릭터이다.",
            "signature": "부채",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/hwanaping.png',
            "type": "basic"
        },
        {
            "id": 23,
            "name": "시러핑",
            "characteristic": "거절은 거절한다! 거부감의 티니핑. 뭐든지 싫다며 반대로 행동하는 까칠한 청개구리 캐릭터이다.",
            "signature": "X자 팻말",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/siroping.png',
            "type": "basic"
        },
        {
            "id": 24,
            "name": "바네핑",
            "characteristic": "첫눈에 반하게 만드는 이끌림의 티니핑. 사랑의 화살을 쏘고 다니는 말썽쟁이 큐피드 캐릭터이다.",
            "signature": "활과 화살",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/baneping.png',
            "type": "basic"
        },
        {
            "id": 25,
            "name": "덜덜핑",
            "characteristic": "겨울을 사랑하는 차가움의 티니핑. 싸우는 것을 싫어하지만 집을 뺏기면 분노하는 새침떼기 캐릭터이다.",
            "signature": "막대 아이스크림",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/duldulping.png',
            "type": "basic"
        },
        {
            "id": 26,
            "name": "그림핑",
            "characteristic": "그림을 좋아하는 예술감의 티니핑. 예술을 사랑하며 그림 실력에 자신 있는 캐릭터이다.",
            "signature": "물감 붓",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/artping.png',
            "type": "basic"
        },
        {
            "id": 27,
            "name": "무거핑",
            "characteristic": "운동을 좋아하는 무거움의 티니핑. 근육을 자랑하는 활기찬 요정이다.",
            "signature": "아령",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/heavyping.png',
            "type": "basic"
        },
        {
            "id": 28,
            "name": "꺼꿀핑",
            "characteristic": "거꾸로의 세상을 꿈꾸는 티니핑. 반대로 뒤집는 것을 좋아하는 엉뚱한 캐릭터이다.",
            "signature": "자석",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/kkeokkulping.png',
            "type": "basic"
        },
        {
            "id": 29,
            "name": "씽씽핑",
            "characteristic": "빠른 것을 좋아하는 속도감의 티니핑. 자신감 넘치는 요정이다.",
            "signature": "킥보드",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/ssingssingping.png',
            "type": "basic"
        },
        {
            "id": 30,
            "name": "베베핑",
            "characteristic": "아기를 사랑하는 동심의 티니핑. 제멋대로이지만 순수한 캐릭터이다.",
            "signature": "딸랑이와 보행기",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/bebeping.png',
            "type": "basic"
        },
        {
            "id": 31,
            "name": "코자핑",
            "characteristic": "꿈속을 들여다보는 졸음의 티니핑. 사람들을 잠재우고 꿈젤리를 얻는 것을 좋아하는 호기심 많은 요정이다.",
            "signature": "청소기",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/kozaping.png',
            "type": "basic"
        },
        {
            "id": 32,
            "name": "딱풀핑",
            "characteristic": "딱 붙어버리게 만드는 유대감의 티니핑. 싸우는 것을 싫어하는 발랄한 요정이다.",
            "signature": "딱풀",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/stickping.png',
            "type": "basic"
        },
        {
            "id": 33,
            "name": "모야핑",
            "characteristic": "모든 것이 궁금한 호기심의 티니핑. 사물을 크게 만들어보는 캐릭터이다.",
            "signature": "돋보기",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/moyaping.png',
            "type": "basic"
        },
        {
            "id": 34,
            "name": "토이핑",
            "characteristic": "장난감을 좋아하는 애착의 티니핑. 재밌는 것을 좋아하는 개구쟁이 요정이다.",
            "signature": "요요",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/toyping.png',
            "type": "basic"
        },
        {
            "id": 35,
            "name": "또까핑",
            "characteristic": "다른 이의 모습으로 변신하고 싶은 동경심의 티니핑. 쾌활하지만 허당인 캐릭터이다.",
            "signature": "가면",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/ttokkaping.png',
            "type": "basic"
        },
        {
            "id": 36,
            "name": "플라핑",
            "characteristic": "꽃을 사랑하는 티니핑. 우아한 성격이지만 꽃에 대한 열정이 넘친다.",
            "signature": "장미꽃 한 송이",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/flowerping.png',
            "type": "basic"
        },
        {
            "id": 37,
            "name": "아휴핑",
            "characteristic": "변화하고자 노력하는 예감의 티니핑. 자신의 나팔소리를 바꾸려 최선을 다한다.",
            "signature": "나팔",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/ahuping.png',
            "type": "basic"
        },
        {
            "id": 38,
            "name": "똑똑핑",
            "characteristic": "공부를 좋아하는 학구열의 티니핑. 예민한 성격의 모범생이다.",
            "signature": "큰 연필과 책",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/ttokttokping.png',
            "type": "basic"
        },
        {
            "id": 39,
            "name": "꽁꽁핑",
            "characteristic": "마음만은 따뜻한 냉랭함의 티니핑. 우정을 소중히 여기는 캐릭터이다.",
            "signature": "아이스크림콘",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/kkongkkongping.png',
            "type": "basic"
        },
        {
            "id": 40,
            "name": "찌릿핑",
            "characteristic": "전기가 찌릿찌릿! 짜릿함의 티니핑. 짜릿한 재미를 위해 말썽을 부리는 요정이다.",
            "signature": "번개 지팡이",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/sparkping.png',
            "type": "basic"
        },
        {
            "id": 41,
            "name": "홀로핑",
            "characteristic": "혼자 지내는 것을 좋아하는 고독의 티니핑. 조용히 낚시를 즐기는 캐릭터이다.",
            "signature": "낚시대",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/aloneping.png',
            "type": "basic"
        },
        {
            "id": 42,
            "name": "노리핑",
            "characteristic": "놀고 싶은 마음/천진무구함의 티니핑. 최초로 하나의 큐브를 공유하는 티니핑이자 최초의 형제자매 티니핑.",
            "signature": "젖병",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/noriping.png',
            "type": "basic"
        },
        {
            "id": 43,
            "name": "노라핑",
            "characteristic": "놀고 싶은 마음/천진무구함의 티니핑. 최초로 하나의 큐브를 공유하는 티니핑이자 최초의 형제자매 티니핑.",
            "signature": "게임",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/noraping.png',
            "type": "basic"
        },
        {
            "id": 44,
            "name": "앙대핑",
            "characteristic": "이기심/제멋대로의 티니핑. 캐치! 티니핑의 메인 빌런이자 최종 보스로 진 빌런 중 하나.",
            "signature": "삼지창",
            "series": "시즌1 캐치! 티니핑",
            "image": '/images/angdaeping.png',
            "type": "villain"
        }
    ];
    try {
        const count = await Character.countDocuments();
        if (count === 0) {
            await Character.insertMany(jsonData);
            res.status(201).json({ message: '데이터 삽입 완료!' });
        } else {
            res.status(200).json({ message: '이미 데이터가 존재합니다.' });
        }
    } catch (error) {
        res.status(500).json({ message: '데이터 삽입 실패: ' + error });
    }
};

module.exports = {
    getAllCharacters,
    insertInitialData
};
