import {Card} from "./cards";
import {card} from "./cards";

/**
 * 一季度卡片
 */
export interface Season {
    season: number; // 第n弹
    name: string; // 中文名称
    list: { [s: string]: Card[] }; // 卡片序列 从50-1倒序写入
}

const Season6: Season = {
    season: 6,
    name: "第六弹",
    list: {
        "A": [
            card.花漾海狮_2,
            card.迷你龙_1,
            card.电击怪_1,
        ],
        "B": [
            card.西狮海壬_3,
            card.太阳伊布_3,
        ],
        "C": [
            card.球球海狮_1,
        ],
        "D": [],
        "E": [],
        "F": [],
        "G": [],
        "H": [],
    }
}

const Season5: Season = {
    season: 5,
    name: "第五弹",
    list: {
        "A": [
            card.菊草叶_1,
        ],
        "B": [],
        "C": [],
        "D": [],
        "E": [],
        "F": [],
        "G": [],
        "H": [],
    }
}

export class Data {
    static data: Season[] = [
        Season6, Season5
    ]
}
