import {Pokemon} from "../types/card";

export const pm: { [s: string]: Pokemon } = {
    '水君': {
        id: '245',
        name: '水君',
        star: [5,4], // 宝可梦存在的星级
        form: [], // 形态列表 阿罗拉,起源,日,月,黄昏....
    }
} as const