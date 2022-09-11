import {Card, Season} from '../types/card';
import card from "./cards";

const Season6: Season = {
    season: 6,
    name: "第六弹",
    list: {
        "A": [
            card.花漾海狮_2,
            card.迷你龙_1,
            card.电击怪_1,
            card.花漾海狮_2,
            card.木木枭_1,
            card.嘟嘟利_2,
            card.鸭嘴火兽_2,
            card.泥偶小人_2,
            card.基拉祈_4,
            card.石丸子_1,

            card.鬼斯通_2,
            card.鸭嘴炎兽_3,
            card.西狮海壬_4,
            card.石丸子_1,
            card.鸭嘴宝宝_1,
            card.利欧路_1,
            card.太阳伊布_3,
            card.嘟嘟_1,
            card.达克莱伊_5,
            card.凯路迪欧_4,

            card.腕力_1,
            card.狙射树枭_3,
            card.拉普拉斯_3,
            card.路卡利欧_3,
            card.豪力_2,
            card.电击魔兽_4,
            card.电击兽_2,
            card.怪力_3,
            card.怪力_4,
            card.炽焰咆哮虎_3,

            card.拉普拉斯_3,
            card.月亮伊布_3,
            card.火斑喵_1,
            card.路卡利欧_2,
            card.胡地_3,
            card.哈克龙_2,
            card.泥偶小人_2,
            card.喷火龙_4,
            card.豪力_2,
            card.地幔岩_2,

            card.利欧路_1,
            card.炎热喵_2,
            card.嘟嘟_1,
            card.投羽枭_2,
            card.泥偶巨人_3,
            card.凯西_1,
            card.勇基拉_2,
            card.球球海狮_1,
            card.鬼斯_1,
            card.快龙_3,
        ],
        "B": [
            card.西狮海壬_3,
            card.太阳伊布_3,
            card.火斑喵_1,
            card.耿鬼_3,
            card.庞岩怪_3,
            card.地幔岩_2,
            card.鸭嘴炎兽_4,
            card.木木枭_1,
            card.木木枭_1,
            card.球球海狮_1,

            card.利欧路_1,
            card.胡地_4,
            card.费洛美螂_5,
            card.拉普拉斯_3,
            card.嘟嘟利_3,
            card.哈克龙_2,
            card.奈克洛兹玛_月_5,
            card.鸭嘴炎兽_3,
            card.电击怪_1,
            card.喷火龙_4,

            card.嘟嘟利_2,
            card.怪力_3,
            card.嘟嘟_1,
            card.谢米_刺猬_4,
            card.勇基拉_2,
            card.电击兽_2,
            card.炎热喵_2,
            card.泥偶小人_2,
            card.狙射树枭_3,
            card.迷你龙_1,

            card.拉普拉斯_3,
            card.花漾海狮_2,
            card.电击怪_1,
            card.石丸子_1,
            card.路卡利欧_3,
            card.勇基拉_2,
            card.鸭嘴宝宝_1,
            card.腕力_1,
            card.鬼斯通_2,
            card.豪力_2,

            card.腕力_1,
            card.路卡利欧_2,
            card.泥偶巨人_3,
            card.凯西_1,
            card.鸭嘴火兽_2,
            card.太阳伊布_4,
            card.投羽枭_2,
            card.鬼斯_1,
            card.电击兽_2,
            card.投羽枭_2,
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

export function optionValue(c: Card): string {
    return c.star + '_' + c.id + '_' + c.name
}
