import { Console } from '@woowacourse/mission-utils';
import { getStartDate } from "./InputView.js"

export const assign = async () => {
    Console.print(await getStartDate());
}