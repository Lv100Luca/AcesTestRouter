import type Question from "./Question";
import type {Category} from "./Categories";

export default class AcesTest {
    private _Questions: Question[] = [];
    // private _language: string = "DE";
    private _positiveResult: number[] = [0, 0, 0, 0];
    private _negativeResult: number[] = [0, 0, 0, 0];
    private _index: number;


    constructor(Questions: Question[]) {
        this._Questions = Questions;
        this._index = 0;
    }

    public addPositiveCategory(category: Category) {
        this._positiveResult[category]++;
    }

    public addNegativeCategory(category: Category) {
        this._negativeResult[category]++;
    }

    public setSelectedAnswer(index: number, selectedPositive: Category, selectedNegative: Category) {
        this._Questions[index].selectedPositive = this._Questions[index].Answer[selectedPositive];
        this._Questions[index].selectedNegative = this._Questions[index].Answer[selectedNegative];
    }

    public getQuestion() {
        if (this.hasNextQuestion()) {
            return this.Questions[this._index++]; // does this work even?
        } else return null; // todo: fix errorhandilng cook up something
    }

    public hasNextQuestion() {
        return this._index + 1 >= this.Questions.length;
    }

    get Questions(): Question[] {
        return this._Questions;
    }

    get positiveResult(): number[] {
        return this._positiveResult;
    }

    get negativeResult(): number[] {
        return this._negativeResult;
    }

    get index(): number {
        return this._index;
    }
}