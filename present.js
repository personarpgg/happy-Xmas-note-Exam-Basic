class ForExam {
    constructor() {
        // 생성자는 여기서도 생략 가능합니다.
    }

    initData() {
        const config = {
            baseArray: ["아이디", "비밀번호", "개인정보"],
            specialProblems: [10, 16, 17, 18, 19, 20],
            htmlTagProblems: [22, 23, 25, 27, 29, 30],
            startProblemIndex: 1,
            endProblemIndex: 30
        };

        for (let i = config.startProblemIndex; i <= config.endProblemIndex; i++) {
            this['problem' + i] = this.generateProblemData(i, config.baseArray, config.specialProblems);
        }

        this.problem16 = [["피카츄", "라이츄"], ["파이리", "꼬부기"]];

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
            this["problem" + problem] = this["problem" + problem].map(item => {
                if (item.includes('<')) {
                    return item;
                }
                return `<li>${item}</li>`;
            });
        }
    }
}

let examInstance = new ForExam(); // 변수 이름을 변경했습니다.
console.dir(examInstance);
