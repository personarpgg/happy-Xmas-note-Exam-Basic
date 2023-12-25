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
