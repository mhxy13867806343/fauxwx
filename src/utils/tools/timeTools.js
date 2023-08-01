import * as dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';  // 导入中文语言环境
dayjs.locale('zh-cn');  // 设置语言环境为中文
export const setDataTime=()=>{
    const days = [];// 日期 字符串01-12
    const months = [];// 月份 中文一月-十二月
    const months12 = [];// 月份 数字月1月 2月 3月 4月 5月 6月 7月 8月 9月 10月 11月 12月
    const for12=12;//循环12次
    for(let i = 0; i < for12; i++){
        months.push(dayjs().month(i).format('MMMM'));
    }
    for(let i = 1; i <= for12; i++){
        days.push((i < 10 ? '0' : '') + i);
    }
    for(let i = 1; i <= for12; i++){
        months12.push(i + "月");
    }
    return {
        days,
        months,
        months12,
    }
}
const {days,months,months12}=setDataTime()
export const monthsZh = months;
export const daysZh = days;


export  const months12Zh = months12;
