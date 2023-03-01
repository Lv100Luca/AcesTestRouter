import type Question from "./Question";
import type {Category} from "./Categories";
import Answer from "@/Model/Answer";

export default class AcesTest {
    private readonly _QuestionArray: Question[] = [];
    private _positiveResult: number[] = [0, 0, 0, 0];
    private _negativeResult: number[] = [0, 0, 0, 0];
    private _index: number;


    constructor(Questions: Question[]) {
        this._QuestionArray = Questions;
        this._index = 0;
    }

    public addPositiveCategory(category: Category) {
        this._positiveResult[category]++;
    }

    public addNegativeCategory(category: Category) {
        this._negativeResult[category]++;
    }

    public setSelectedAnswer(index: number, selectedPositive: Category, selectedNegative: Category) {
        this._QuestionArray[index].selectedPositive = this._QuestionArray[index].AnswerArray[selectedPositive];
        this._QuestionArray[index].selectedNegative = this._QuestionArray[index].AnswerArray[selectedNegative];
    }

    public getQuestion(i: number): Question {
        return this._QuestionArray[i];
    }

    public getQuestionStringArray(i: number) {
        let outArray = [];
        for (const answer of this.getQuestion(i).AnswerArray) {
            outArray.push(answer.prompt)
        }
        return outArray;
    }

    // public getQuestion() {
    //     if (this.hasNextQuestion()) {
    //         return this.Questions[this._index++]; // does this work even?
    //     } else return null; // todo: fix errorhandilng cook up something
    // }

    public hasNextQuestion(currentIndex: number) {
        return currentIndex + 1 <= this._QuestionArray.length - 1;
    }

    get QuestionArray(): Question[] {
        return this._QuestionArray;
    }

    get length(): number {
        return this._QuestionArray.length;
    }

    get positiveResult(): number[] {
        return this._positiveResult;
    }

    get negativeResult(): number[] {
        return this._negativeResult;
    }

    // get index(): number {
    //     return this._index;
    // }
}