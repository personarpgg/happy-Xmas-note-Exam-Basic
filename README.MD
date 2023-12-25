포켓몬 시험 페이지 분석 (페이지 1: ForExam 클래스)

페이지1 분석자료
class ForExam {
  constructor() {
    // ForExam 클래스의 생성자입니다. 현재는 비어 있습니다.
  }

  // 시험 데이터를 초기화하는 메서드
  initData() {
    // 시험 데이터를 설정하는 config 객체
    const config = {
      // 기본 문제 배열
      baseArray: ["피카츄", "라이츄", "꼬부기"],
      // 특별한 문제 번호 배열
      specialProblems: [10, 16, 17, 18, 19, 20],
      // HTML 태그 문제 번호 배열
      htmlTagProblems: [22, 23, 25, 27, 29, 30],
      // 문제 시작 인덱스
      startProblemIndex: 1,
      // 문제 끝 인덱스
      endProblemIndex: 30,
    };

    // 반복문을 통해 문제를 동적으로 생성하고 해당 문제 번호에 할당
    for (let i = config.startProblemIndex; i <= config.endProblemIndex; i++) {
      // 현재 문제 번호(i)에 해당하는 문제 데이터 생성 및 할당
      this["problem" + i] = this.generateProblemData(
        i,                      // 현재 문제 번호
        config.baseArray,       // 기본 문제 배열
        config.specialProblems  // 특별한 문제 번호 배열
      );
    }

    // 16번 문제에 특별한 데이터를 할당
    this.problem16 = [
      ["피카츄", "라이츄"],
      ["파이리", "꼬부기"],
    ];

    // HTML 태그 문제들에 대해 <li> 태그 추가 등의 조작 수행
    this.assembleHTMLTags(config.htmlTagProblems);
  }

  // 문제 데이터를 생성하는 메서드
  generateProblemData(problemNumber, baseArray, specialProblems) {
    // 만약 특별한 문제인 경우 기본 배열에 "꼬부기"를 추가하여 반환하고, 그렇지 않으면 기본 배열의 복사본 반환
    if (specialProblems.includes(problemNumber)) {
      return [...baseArray, "꼬부기"];
    }
    return baseArray.slice();
  }

  // HTML 태그 문제들을 조립하는 메서드
  assembleHTMLTags(htmlTagProblems) {
    // 주어진 HTML 태그 문제 번호 배열에 대해 해당 문제의 데이터에 대한 조립을 수행
    for (let problem of htmlTagProblems) {
      // 이미 HTML 태그가 있는 경우 그대로 두고, 없는 경우에는 <li> 태그 추가
      this["problem" + problem] = this["problem" + problem].map((item) => {
        if (item.includes("<")) {
          // 이미 HTML 태그가 있는 경우에는 그대로 반환
          return item;
        }
        // HTML 태그가 없는 경우에는 <li> 태그로 감싸서 반환
        return `<li>${item}</li>`;
      });
    }
  }
}

// ForExam 클래스의 인스턴스 생성
let examInstance = new ForExam(); 

// 시험 데이터 초기화
examInstance.initData();

// 생성된 인스턴스를 콘솔에 출력
console.dir(examInstance);

// 특정 문제 확인 (예: 5번 문제)
console.log("5번 문제 데이터:", examInstance.problem5);




페이지2 분석자료 (페이지 2: 배열 조작 연습)

1. 배열의 모든 요소를 대문자로 변환하세요
   this["problem1"] = this["problem1"].map(item => item.toUpperCase());

2. 배열에서 이름에 '이'가 포함된 포켓몬만 필터링 하세요
   this["problem2"] = this["problem2"].filter(item => item.includes("이"));

3. 배열의 모든 요소를 하나의 문자열로 합치세요
   this["problem3"] = this["problem3"].join('');

4. 배열을 사용하여 각 포켓몬의 이름을 키로, 이름의 길이를 값으로 하는 객체를 생성
   this["problem4"] = this["problem4"].reduce((obj, item) => {
     obj[item] = item.length;
     return obj;
   }, {});

5. 배열을 알파벳 순서로 정렬하세요
   this["problem5"] = this["problem5"].sort();

6. 배열에서 첫 번째로 "이"가 포함된 포켓몬을 찾으세요
   this["problem6"] = this["problem6"].find(item => item.includes("이"));

7. 배열의 모든 포켓몬 이름이 "이"를 포함하고 있는지 확인
   this["problem7"] = this["problem7"].every(item => item.includes("이"));

8. 배열 중에서 최소 하나의 포켓몬 이름이 "꼬"로 시작하는지 확인
   this["problem8"] = this["problem8"].some(item => item.startsWith("꼬"));

9. 배열에 "이브이"를 추가하고, 결과를 출력
   this.baseArray.push("이브이");

10. 배열의 마지막 요소를 제거하고, 결과 출력
    this.baseArray.pop();

11. 배열의 첫 번째 요소를 제거하고 출력
    this["problem11"] = this["problem11"].slice(1);

12. 배열의 시작 부분에 피카츄를 추가하고 출력
    this["problem12"] = ["피카츄", ...this["problem12"]];

13. 배열의 라이추를 이브이로 변경하고 출력
    this["problem13"] = this["problem13"].map(item => (item === "라이츄" ? "이브이" : item));

14. 배열을 복제하고, 복제된 배열에 "이브이"를 추가하고, 원본배열과 복제된 배열을 출력
    const clonedArray = [...this["problem14"]];
    clonedArray.push("이브이");
    this["problem14"] = [this["problem14"], clonedArray];

15. 배열의 마지막 두 요소 만 가져와 출력
    this["problem15"] = this["problem15"].slice(-2);

16. 두 배열을 하나의 배열로 합치기
    this["problem16"] = this["problem16"].concat(this.baseArray);

17. 배열에서 "라이츄"를 찾아 그 인덱스를 출력
    const indexOfRaichu = this["problem17"].indexOf("라이츄");
    this["problem17"] = [indexOfRaichu];

18. 배열을 거꾸로 순서를 뒤집어서 출력
    this["problem18"] = this["problem18"].reverse();

19. 배열에서 각 포켓몬의 이름을 길이를 배열로
    this["problem19"] = this["problem19"].map(item => item.length);

20. 배열에서 이름 길이가 3글자 이상인 포켓몬만 필터링
    this["problem20"] = this["problem20"].filter(item => item.length >= 3);

21. 배열의 각 요소를 리스트 아이템(`<li>`)으로 변환
    this["problem21"] = this["problem21"].map(item => `<li>${item}</li>`);

22. 배열을 하나의 리스트(`<ul>`)로 변환
    this["problem22"] = `<ul>${this["problem22"].join('')}</ul>`;

23. 배열에서 "지우"가 포함된 태그만 필터링
    this["problem23"] = this["problem23"].filter(item => item.includes("지우"));

24. 배열에서 각 요소를 `<option>` 태그로 감싸고, 전체를 `<select>`태그로 감싸기
    this["problem24"] = `<select>${this["problem24"].map(item => `<option>${item}</option>`).join('')}</select>`;

25. 배열을 모두 포함하는 `<nav>`태그를 만들기
    this["problem25"] = `<nav>${this["problem25"].join('')}</nav>`;

26. 배열의 각 요소를 `<section>`태그로 감싸고, 전체를 `<article>`태그로 감싸기
    this["problem26"] = `<article>${this["problem26"].map(item => `<section>${item}</section>`).join('')}</article>`;

27. 배열의 모든 `<li>` 태그를 `<ol>`태그로 감싸기
    this["problem27"] = `<ol>${this["problem27"].join('')}</ol>`;

28. 배열의 각 요소를 `<input>` 태그의 placeholder로 설정하고 결과를 `<input>` 태그의 배열로 되어있어야함
    this["problem28"] = this["problem28"].map(item => `<input placeholder="${item}">`);

29. 배열을 `<footer>`태그로 감싸기
    this["problem29"] = `<footer>${this["problem29"].join('')}</footer>`;

30. 배열의 하나의 HTML 문자열로 병합한 후, 전체를 `<div>` 태그로 감싸기
    this["problem30"] = `<div>${this["problem30"].join('')}</div>`;
