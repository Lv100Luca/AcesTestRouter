import type {Category} from "./Categories";

export default class Answer {
    private _prompt: string;
    private _category: Category;
    private _hover: string;


    constructor(prompt: string, category: Category, hover: string) {
        this._prompt = prompt;
        this._category = category;
        this._hover = hover;
    }


    get hover(): string {
        return this._hover;
    }

    set hover(value: string) {
        this._hover = value;
    }

    get prompt(): string {
        return this._prompt;
    }

    set prompt(value: string) {
        this._prompt = value;
    }

    get category(): Category {
        return this._category;
    }

    set category(value: Category) {
        this._category = value;
    }
}