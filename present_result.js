class ForExam {
  constructor() {
    // 생성자는 여기서도 생략 가능합니다.
  }

  initData() {
    const config = {
      baseArray: ["피카츄", "라이츄", "꼬부기"],
      specialProblems: [10, 16, 17, 18, 19, 20],
      htmlTagProblems: [22, 23, 25, 27, 29, 30],
      startProblemIndex: 1,
      endProblemIndex: 30,
    };

    for (let i = config.startProblemIndex; i <= config.endProblemIndex; i++) {
      this["problem" + i] = this.generateProblemData(
        i,
        config.baseArray,
        config.specialProblems
      );
    }

    this.problem16 = [
      ["피카츄", "라이츄"],
      ["파이리", "꼬부기"],
    ];

    this.assembleHTMLTags(config.htmlTagProblems);
  }

  generateProblemData(problemNumber, baseArray, specialProblems) {
    if (specialProblems.includes(problemNumber)) {
      return [...baseArray, "꼬부기"];
    }
    return baseArray.slice();
  }

  assembleHTMLTags(htmlTagProblems) {
    for (let problem of htmlTagProblems) {
      this["problem" + problem] = this["problem" + problem].map((item) => {
        if (item.includes("<")) {
          return item;
        }
        return `<li>${item}</li>`;
      });
    }
  }

  // 대문자로 변환하는 메서드 추가
  capitalizeAllProblems() {
    for (let i = 1; i <= 30; i++) {
      if (Array.isArray(this["problem" + i])) {
        this["problem" + i] = this["problem" + i].map((item) =>
          item.toUpperCase()
        );
      }
    }
  }

  // 웹 페이지에 HTML 추가하는 메서드
  addToPage() {
    const container = document.getElementById("examContent");

    for (let i = 1; i <= 30; i++) {
      const problemData = this["problem" + i];
      if (problemData) {
        const problemElement = document.createElement("div");
        problemElement.innerHTML = `<h2>Problem ${i}</h2><ul>${problemData.join(
          ""
        )}</ul>`;
        container.appendChild(problemElement);
      }
    }
  }
}

let examInstance = new ForExam();
examInstance.initData();
examInstance.capitalizeAllProblems(); // 모든 문제 대문자로 변환 메서드 호출
examInstance.addToPage();
