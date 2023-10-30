import { MissionUtils } from "@woowacourse/mission-utils";
import { NAME, DISTANCE } from "../constants/scoreStorage.js"

class Winner {
  async winnerPrint(scoreStorage) {
    console.log("winnerPrint");
    //const maxDistance = Math.max(...scoreStorage[DISTANCE]);
    const winners = this.#findWinnerName(scoreStorage, Math.max(...scoreStorage[DISTANCE]));
  }

  #findWinnerName(scoreStorage, maxDistance) {
    const winners = []; // 우승자 이름 담을 배열
    let winnerIndex = scoreStorage[DISTANCE].indexOf(maxDistance);
    while (winnerIndex != -1) { // maxDistance를 가진 모든 Index 찾을때까지 반복
      winners.push(scoreStorage[NAME][winnerIndex]);  //maxDistance를 가진 Index에 해당하는 NAME -> winners 배열에 push
      winnerIndex = scoreStorage[DISTANCE].indexOf(maxDistance, winnerIndex + 1); // maxDistance를 가진 모든 Index 찾기
    }
    return winners;
  }
}
export default Winner;