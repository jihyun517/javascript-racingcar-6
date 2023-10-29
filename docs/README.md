# 📝 자동차 경주 미션 기능목록

- 자동차 이름 입력받기 -> m개의 자동차
  - 입력 예외처리 (중복처리, 5자이하)
  - 입력받은 이름 배열에 저장

- 시도할 횟수 입력받기 -> n번

- 전진 시도 (n번 반복)
  - m개의 자동차 각각 전진 여부 확인
    - 이 때, 누적 전진 현황 배열에 저장 (0~3 : +0 / 4~9 : +1)
  - m 개의 자동차 누적 전진 현황 출력

- 최종 우승자 출력
  - 누적 전진값 가장 큰 자동차 배열로 저장
  - 출력