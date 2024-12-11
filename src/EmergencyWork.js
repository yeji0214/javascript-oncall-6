import { getStartDate, getEmergencyWorkerList } from "./InputView.js"
import { allocate } from './Schedule.js';
import { displaySchedule } from './OutputView.js';

export const assign = async () => {
    const startDate = await getStartDate();
    const workers = await getEmergencyWorkerList();
    const schedule = allocate(startDate, workers);
    displaySchedule(schedule);
}