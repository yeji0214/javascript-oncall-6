import { Console } from '@woowacourse/mission-utils';

const INFO = {
    datePerMonth: {1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31},
    legalHoliday: {1: [1], 3: [1], 5: [5], 6: [6], 8: [15], 10: [3, 9], 12: [25]},
    dayList: ['월', '화', '수', '목', '금', '토', '일'],
};

export const allocate = (startDate, workers) => {
    const [month, startDay] = startDate;
    const weekdayWorkers = workers[0];
    const holidayWorkers = workers[1];
    const personnel = weekdayWorkers.length;
    let dayIdx = INFO.dayList.indexOf(startDay);

    let previousWorker = '';
    let weekdayIdx = 0;
    let holidayIdx = 0;
    let changeWeekday = false;
    let changeHoliday = false;

    const finalSchedule = [];

    for (let date = 1; date <= INFO.datePerMonth[month]; date++) {
        const isHoliday = INFO.dayList[dayIdx] === '토' || INFO.dayList[dayIdx] === '일' || INFO.legalHoliday[month]?.includes(date);

        if (isHoliday) {
            let currentWorker = holidayWorkers[holidayIdx];
            let finalIdx = holidayIdx;

            if (changeHoliday) {
                changeHoliday = false;
                finalIdx = (holidayIdx - 1 + personnel) % personnel;
                currentWorker = holidayWorkers[finalIdx];
            }
            if (previousWorker === currentWorker) {
                changeHoliday = true;
                finalIdx = (holidayIdx + 1) % personnel;
                currentWorker = holidayWorkers[finalIdx];
            } 
            
            const label = INFO.dayList[dayIdx] + (INFO.dayList[dayIdx] !== '토' && INFO.dayList[dayIdx] !== '일' && INFO.legalHoliday[month]?.includes(date) ? '(휴일)' : '');
            finalSchedule.push(`${month}월 ${date}일 ${label} ${currentWorker}`);
            previousWorker = currentWorker;
            holidayIdx = (holidayIdx + 1) % personnel;
        } else {
            let currentWorker = weekdayWorkers[weekdayIdx];
            let finalIdx = weekdayIdx;

            if (changeWeekday) {
                changeWeekday = false;
                finalIdx = (weekdayIdx - 1 + personnel) % personnel;
                currentWorker = weekdayWorkers[finalIdx];
            }
            if (previousWorker === currentWorker) {
                changeWeekday = true;
                finalIdx = (weekdayIdx + 1) % personnel;
                currentWorker = weekdayWorkers[finalIdx];
            } 
            
            finalSchedule.push(`${month}월 ${date}일 ${INFO.dayList[dayIdx]} ${currentWorker}`);
            previousWorker = currentWorker;
            weekdayIdx = (weekdayIdx + 1) % personnel;
        }

        dayIdx = (dayIdx + 1) % 7; // 요일 순환
    }

    finalSchedule.forEach((entry) => Console.print(entry));
    return finalSchedule;
};
