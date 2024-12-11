import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';
import StartDate from "./StartDate.js";

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