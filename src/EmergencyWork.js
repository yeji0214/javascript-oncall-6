import { Console } from '@woowacourse/mission-utils';
import { getStartDate, getEmergencyWorkerList } from "./InputView.js"

export const assign = async () => {
    await getStartDate();
    Console.print(await getEmergencyWorkerList());
}