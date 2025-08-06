
const express = require('express');
const app = express();
const port = 9999; // Companion과 통신할 포트

// --- 게임 상태 변수 ---
let players = [
    { id: 1, active: true }, { id: 2, active: true }, { id: 3, active: true }, { id: 4, active: true },
    { id: 5, active: true }, { id: 6, active: true }, { id: 7, active: true }, { id: 8, active: true }
];
let buttonPosition = 0; // P8부터 시작하기 위해 0으로 설정 (배열 인덱스 기준)

// --- Helper 함수: 다음 활성 플레이어 찾기 ---
function findNextActivePlayer(startIndex) {
    let currentIndex = startIndex;
    do {
        currentIndex = (currentIndex + 1) % players.length;
    } while (!players[currentIndex].active);
    return currentIndex;
}

// --- API 엔드포인트: New Hand ---
app.get('/new-hand', (req, res) => {
    // 1. 다음 버튼 위치 찾기
    buttonPosition = findNextActivePlayer(buttonPosition);

    // 2. SB, BB, UTG 위치 찾기
    const sbPosition = findNextActivePlayer(buttonPosition);
    const bbPosition = findNextActivePlayer(sbPosition);
    const utgPosition = findNextActivePlayer(bbPosition);

    const utgPlayer = players[utgPosition];

    console.log(`New Hand Started!`);
    console.log(`Dealer Button is at P${players[buttonPosition].id}`);
    console.log(`Small Blind is at P${players[sbPosition].id}`);
    console.log(`Big Blind is at P${players[bbPosition].id}`);
    console.log(`UTG (First to act) is P${utgPlayer.id}`);

    // 3. Companion에게 UTG 플레이어 ID를 응답으로 보냄
    res.json({ utgPlayerId: utgPlayer.id });
});

app.listen(port, () => {
    console.log(`Poker Logic Server listening at http://localhost:${port}`);
    console.log('Ready to receive "New Hand" command from Companion.');
});
