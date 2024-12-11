import { MESSAGES } from "./constants.js";

class StartDate {
    #startDate;
    #PossibleDay = ['월', '화', '수', '목', '금', '토', '일'];

    constructor(date) {
        this.#startDate = this.#validate(date.split(',').map((item) => item.trim()));
    }

    #validate(date) {
        if (date.length !== 2) throw new Error(MESSAGES.ERROR.INVALID);
        const month = Number(date[0])
        const day = date[1];

        if (isNaN(month) || !Number.isInteger(month) || month < 1 || month > 12 || !this.#PossibleDay.includes(day)) {
            throw new Error(MESSAGES.ERROR.INVALID);
        }
        
        return date;
    }

    getStartDate() {
        return this.#startDate;
    }
}

export default StartDate;