import type Question from "./Question";
import type {Category} from "./Categories";

export default class AcesTest {
    private _Questions: Question[] = [];
    // private _language: string = "DE";
    private _positiveResult: number[] = [0, 0, 0, 0];
    private _negativeResult: number[] = [0, 0, 0, 0];


    constructor(Questions: Question[]) {
        this._Questions = Questions;
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


    get Questions(): Question[] {
        return this._Questions;
    }

    get positiveResult(): number[] {
        return this._positiveResult;
    }

    get negativeResult(): number[] {
        return this._negativeResult;
    }
}