import type Answer from "./Answer";

export default class Question {
    private _AnswerArray: Answer[];
    private _time: number;
    private _selectedPositive: Answer | null = null;
    private _selectedNegative: Answer | null = null;


    constructor(Answer: Answer[]) {
        this._AnswerArray = Answer;
        this._time = 0;

    }


    get AnswerArray(): Answer[] {
        return this._AnswerArray;
    }

    set AnswerArray(value: Answer[]) {
        this._AnswerArray = value;
    }

    get time(): number {
        return this._time;
    }

    set time(value: number) {
        this._time = value;
    }

    get selectedPositive(): Answer {
        if (this._selectedPositive !== null) {
            return this._selectedPositive
        } else throw new Error("There is no selected Positive answer")
    }

    set selectedPositive(value: Answer) {
        this._selectedPositive = value;
    }

    get selectedNegative(): Answer {
        if (this._selectedNegative !== null) {
            return this._selectedNegative
        } else throw new Error("There is no selected Negative answer")
    }

    set selectedNegative(value: Answer) {
        this._selectedNegative = value;
    }
}
