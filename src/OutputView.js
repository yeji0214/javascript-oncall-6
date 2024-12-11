import { Console } from '@woowacourse/mission-utils';

export const displaySchedule = (schedule) => {
    Console.print('\n');
    schedule.forEach((s) => Console.print(`${s}\n`));
}