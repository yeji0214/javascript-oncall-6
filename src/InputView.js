import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';
import StartDate from "./StartDate.js";
import EmergencyWorker from './EmergencyWorker.js';

export const getStartDate = async () => {
    while (true) {
        const date = await Console.readLineAsync(MESSAGES.INFO.DATE_PROMPT);
    
        try { 
            return new StartDate(date).getStartDate();
        } catch (error) {
            Console.print(error.message);
        }
    }
}

export const getEmergencyWorkerList = async () => {
    while (true) {
        const weekday = await Console.readLineAsync(MESSAGES.INFO.WEEKDAY_WORKER_PROMPT);
        const holiday = await Console.readLineAsync(MESSAGES.INFO.HOLIDAY_WORKER_PROMPT);
    
        try { 
            // return new StartDate(date).getStartDate();
            return new EmergencyWorker(weekday, holiday).getEmergencyWorker();
        } catch (error) {
            Console.print(error.message);
        }
    }
}