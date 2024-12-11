import { Console } from '@woowacourse/mission-utils';
import { getStartDate, getEmergencyWorkerList } from "./InputView.js"
import { allocate } from './Schedule.js';

export const assign = async () => {
    const startDate = await getStartDate();
    const workers = await getEmergencyWorkerList();
    Console.print(allocate(startDate, workers));
}