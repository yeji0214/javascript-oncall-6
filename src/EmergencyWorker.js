import { MESSAGES } from "./constants.js";

class EmergencyWorker {
    #weekdayWorkers = [];
    #holidayWorkers = [];

    constructor(weekday, holiday) {
        const finalWorker = this.#validate(weekday.split(',').map((item) => item.trim()), holiday.split(',').map((item) => item.trim()));
        this.#weekdayWorkers = finalWorker[0];
        this.#holidayWorkers = finalWorker[1];
    }

    #validate(weekday, holiday) {
        if (weekday.length !== holiday.length) throw new Error(MESSAGES.ERROR.INVALID);
        weekday.forEach((worker) => {
            if (worker === '' || worker.length > 5 || weekday.length != new Set(weekday).size || weekday.length < 5 || weekday.length > 35) throw new Error(MESSAGES.ERROR.INVALID);
            if (!holiday.includes(worker)) throw new Error(MESSAGES.ERROR.INVALID);
        });
        holiday.forEach((worker) => {
            if (worker === '' || worker.length > 5 || holiday.length != new Set(holiday).size || holiday.length < 5 || holiday.length > 35) throw new Error(MESSAGES.ERROR.INVALID);
        });
        return [weekday, holiday];
    }

    getEmergencyWorker() {
        return [this.#weekdayWorkers, this.#holidayWorkers];
    }
}

export default EmergencyWorker;