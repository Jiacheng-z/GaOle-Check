// import {Card} from '../types/card'

import {Card2, CCard} from "../types/card";
import {pm} from "./pm";

const data = {
    // ---------------------------- 5 -------------------------------
    '费洛美螂_5': {id: '795', star: 5, name: '费洛美螂',},
    '爆肌蚊_5': {id: '794', star: 5, name: '爆肌蚊',},
    '达克莱伊_5': {id: '491', star: 5, name: '达克莱伊',},
    '凯路迪欧_5': {id: '647', star: 5, name: '凯路迪欧',},
    '拉帝欧斯_5': {id: '381', star: 5, name: '拉帝欧斯',},
    '拉帝亚斯_5': {id: '380', star: 5, name: '拉帝亚斯',},
    '暗黑酋雷姆_5': {id: '646', star: 5, name: '暗黑酋雷姆',},
    '焰白酋雷姆_5': {id: '646', star: 5, name: '焰白酋雷姆',},
    '奈克洛兹玛_月_5': {id: '800', star: 5, name: '奈克洛兹玛(月)',},
    '奈克洛兹玛_日_5': {id: '800', star: 5, name: '奈克洛兹玛(日)',},

    '皮卡丘_5': {id: '25', star: 5, name: '皮卡丘',},
    '阿尔宙斯_5': {id: '493', star: 5, name: '阿尔宙斯',},
    '露奈雅拉_5': {id: '792', star: 5, name: '露奈雅拉',},
    '索尔迦雷欧_5': {id: '791', star: 5, name: '索尔迦雷欧',},
    '骑拉帝纳_5': {id: '487', star: 5, name: '骑拉帝纳',},
    '骑拉帝纳_起源_5': {id: '487', star: 5, name: '骑拉帝纳(起源)',},
    '帕路奇亚_5': {id: '484', star: 5, name: '帕路奇亚',},
    '帝牙卢卡_5': {id: '483', star: 5, name: '帝牙卢卡',},
    '雷吉奇卡斯_5': {id: '486', star: 5, name: '雷吉奇卡斯',},

    '谜拟Q_5': {id: '778', star: 5, name: '谜拟Q',},
    '鬃岩狼人_月_5': {id: '745', star: 5, name: '鬃岩狼人(月)',},
    '鬃岩狼人_日_5': {id: '745', star: 5, name: '鬃岩狼人(日)',},
    '波尔凯尼恩_5': {id: '721', star: 5, name: '波尔凯尼恩(水火)',},
    '胡帕_5': {id: '720', star: 5, name: '胡帕(解放)',},
    '固拉多_5': {id: '383', star: 5, name: '固拉多',},
    '盖欧卡_5': {id: '382', star: 5, name: '盖欧卡',},

    '喷火龙_X_5': {id: '6', star: 5, name: '喷火龙(X)',},
    '卡璞鸣鸣_5': {id: '785', star: 5, name: '卡璞・鸣鸣',},
    '洛奇亚_5': {id: '249', star: 5, name: '洛奇亚',},
    '凤王_5': {id: '250', star: 5, name: '凤王',},
    '水君_5': {id: '245', star: 5, name: '水君',},
    '炎帝_5': {id: '244', star: 5, name: '炎帝',},
    '雷公_5': {id: '243', star: 5, name: '雷公',},

    // ---------------------------- 4 -------------------------------
    '凯路迪欧_4': {id: '647', star: 4, name: '凯路迪欧',},
    '比克提尼_4': {id: '494', star: 4, name: '比克提尼',},
    '谢米_天空_4': {id: '492', star: 4, name: '谢米(天空)',},
    '谢米_刺猬_4': {id: '492', star: 4, name: '谢米(刺猬)',},
    '基拉祈_4': {id: '385', star: 4, name: '基拉祈',},
    '路卡利欧_4': {id: '448', star: 4, name: '路卡利欧',},
    '耿鬼_4': {id: '94', star: 4, name: '耿鬼',},
    '胡地_4': {id: '65', star: 4, name: '胡地',},
    '怪力_4': {id: '68', star: 4, name: '怪力',},
    '庞岩怪_4': {id: '526', star: 4, name: '庞岩怪',},
    '快龙_4': {id: '149', star: 4, name: '快龙',},
    '鸭嘴炎兽_4': {id: '467', star: 4, name: '鸭嘴炎兽',},
    '电击魔兽_4': {id: '466', star: 4, name: '电击魔兽',},
    '泥偶巨人_4': {id: '623', star: 4, name: '泥偶巨人',},
    '月亮伊布_4': {id: '197', star: 4, name: '月亮伊布',},
    '太阳伊布_4': {id: '196', star: 4, name: '太阳伊布',},
    '西狮海壬_4': {id: '730', star: 4, name: '西狮海壬',},
    '炽焰咆哮虎_4': {id: '727', star: 4, name: '炽焰咆哮虎',},
    '狙射树枭_4': {id: '724', star: 4, name: '狙射树枭',},

    '雷吉斯奇鲁_4': {id: '379', star: 4, name: '雷吉斯奇鲁(钢)',},
    '雷吉艾斯_4': {id: '378', star: 4, name: '雷吉艾斯(冰)',},
    '雷吉洛克_4': {id: '377', star: 4, name: '雷吉洛克(岩)',},
    '巨金怪_4': {id: '376', star: 4, name: '巨金怪',},
    '暴飞龙_4': {id: '373', star: 4, name: '暴飞龙',},
    '鬃岩狼人_月_4': {id: '745', star: 4, name: '鬃岩狼人(月)',},
    '鬃岩狼人_日_4': {id: '745', star: 4, name: '鬃岩狼人(日)',},
    '波士可多拉_4': {id: '306', star: 4, name: '波士可多拉',},
    '甜冷美后_4': {id: '763', star: 4, name: '甜冷美后',},
    '卡比兽_4': {id: '143', star: 4, name: '卡比兽',},
    '伦琴猫_4': {id: '405', star: 4, name: '伦琴猫',},
    '水箭龟_4': {id: '9', star: 4, name: '水箭龟',},
    '喷火龙_4': {id: '6', star: 4, name: '喷火龙',},
    '妙蛙花_4': {id: '3', star: 4, name: '妙蛙花',},

    '谜拟Q_4': {id: '778', star: 4, name: '谜拟Q',},
    '胡帕_4': {id: '720', star: 4, name: '胡帕(惩戒)',},
    '蒂安希_4': {id: '719', star: 4, name: '蒂安希',},
    '大钢蛇_4': {id: '208', star: 4, name: '大钢蛇',},
    '麻麻鳗鱼王_4': {id: '604', star: 4, name: '麻麻鳗鱼王',},
    '自爆磁怪_4': {id: '462', star: 4, name: '自爆磁怪',},
    '班基拉斯_4': {id: '248', star: 4, name: '班基拉斯',},
    '流氓鳄_4': {id: '553', star: 4, name: '流氓鳄',},
    '大剑鬼_4': {id: '503', star: 4, name: '大剑鬼',},
    '炎武王_4': {id: '500', star: 4, name: '炎武王',},
    '君主蛇_4': {id: '497', star: 4, name: '君主蛇',},

    '水君_4': {id: '245', star: 4, name: '水君',},
    '炎帝_4': {id: '244', star: 4, name: '炎帝',},
    '雷公_4': {id: '243', star: 4, name: '雷公',},
    '皮卡丘_4': {id: '25', star: 4, name: '皮卡丘',},
    '穿着熊_4': {id: '760', star: 4, name: '穿着熊',},


    // ---------------------------- 3 -------------------------------
    '拉普拉斯_3': {id: '131', star: 3, name: '拉普拉斯',},
    '路卡利欧_3': {id: '448', star: 3, name: '路卡利欧',},
    '耿鬼_3': {id: '94', star: 3, name: '耿鬼',},
    '胡地_3': {id: '65', star: 3, name: '胡地',},
    '怪力_3': {id: '68', star: 3, name: '怪力',},
    '庞岩怪_3': {id: '526', star: 3, name: '庞岩怪',},
    '快龙_3': {id: '149', star: 3, name: '快龙',},
    '鸭嘴炎兽_3': {id: '467', star: 3, name: '鸭嘴炎兽',},
    '电击魔兽_3': {id: '466', star: 3, name: '电击魔兽',},
    '泥偶巨人_3': {id: '623', star: 3, name: '泥偶巨人',},
    '嘟嘟利_3': {id: '85', star: 3, name: '嘟嘟利',},
    '月亮伊布_3': {id: '197', star: 3, name: '月亮伊布',},
    '太阳伊布_3': {id: '196', star: 3, name: '太阳伊布',},
    '西狮海壬_3': {id: '730', star: 3, name: '西狮海壬'},
    '炽焰咆哮虎_3': {id: '727', star: 3, name: '炽焰咆哮虎',},
    '狙射树枭_3': {id: '724', star: 3, name: '狙射树枭',},

    '巨金怪_3': {id: '376', star: 3, name: '巨金怪',},
    '暴飞龙_3': {id: '373', star: 3, name: '暴飞龙',},
    '鬃岩狼人_月_3': {id: '745', star: 3, name: '鬃岩狼人(月)',},
    '鬃岩狼人_日_3': {id: '745', star: 3, name: '鬃岩狼人(日)',},
    '波士可多拉_3': {id: '306', star: 3, name: '波士可多拉',},
    '甜冷美后_3': {id: '763', star: 3, name: '甜冷美后',},
    '卡比兽_3': {id: '143', star: 3, name: '卡比兽',},
    '伦琴猫_3': {id: '405', star: 3, name: '伦琴猫',},
    '穿山王_阿罗拉_3': {id: '28', star: 3, name: '穿山王(阿罗拉)',},
    '嘎啦嘎啦_阿罗拉_3': {id: '105', star: 3, name: '嘎啦嘎啦(阿罗拉)',},
    '兰螳花_3': {id: '754', star: 3, name: '兰螳花',},
    '噬沙堡爷_3': {id: '770', star: 3, name: '噬沙堡爷',},
    '水箭龟_3': {id: '9', star: 3, name: '水箭龟'},
    '喷火龙_3': {id: '6', star: 3, name: '喷火龙'},
    '妙蛙花_3': {id: '3', star: 3, name: '妙蛙花'},

    '谜拟Q_3': {id: '778', star: 3, name: '谜拟Q',},
    '大钢蛇_3': {id: '208', star: 3, name: '大钢蛇',},
    '麻麻鳗鱼王_3': {id: '604', star: 3, name: '麻麻鳗鱼王',},
    '自爆磁怪_3': {id: '462', star: 3, name: '自爆磁怪',},
    '班基拉斯_3': {id: '248', star: 3, name: '班基拉斯',},
    '流氓鳄_3': {id: '553', star: 3, name: '流氓鳄',},
    '铳嘴大鸟_3': {id: '733', star: 3, name: '铳嘴大鸟',},
    '大食花_3': {id: '71', star: 3, name: '大食花',},
    '猫鼬探长_3': {id: '735', star: 3, name: '猫鼬探长',},
    '臭臭泥_阿罗拉_3': {id: '89', star: 3, name: '臭臭泥(阿罗拉)',},
    '盔甲鸟_3': {id: '227', star: 3, name: '盔甲鸟',},
    '大剑鬼_3': {id: '503', star: 3, name: '大剑鬼',},
    '炎武王_3': {id: '500', star: 3, name: '炎武王',},
    '君主蛇_3': {id: '497', star: 3, name: '君主蛇',},

    '皮卡丘_3': {id: '25', star: 3, name: '皮卡丘',},
    '穿着熊_3': {id: '760', star: 3, name: '穿着熊',},
    '铁掌力士_3': {id: '297', star: 3, name: '铁掌力士',},
    '长毛狗_3': {id: '508', star: 3, name: '长毛狗',},
    '椰蛋树_阿罗拉_3': {id: '103', star: 3, name: '椰蛋树(阿罗拉)',},
    '拉达_阿罗拉_3': {id: '20', star: 3, name: '拉达(阿罗拉)',},
    '梦妖魔_3': {id: '429', star: 3, name: '梦妖魔',},
    '大奶罐_3': {id: '241', star: 3, name: '大奶罐',},
    '肯泰罗_3': {id: '128', star: 3, name: '肯泰罗'},

    // ---------------------------- 2 -------------------------------
    '路卡利欧_2': {id: '448', star: 2, name: '路卡利欧',},
    '鬼斯通_2': {id: '93', star: 2, name: '鬼斯通',},
    '勇基拉_2': {id: '64', star: 2, name: '勇基拉',},
    '豪力_2': {id: '67', star: 2, name: '豪力',},
    '地幔岩_2': {id: '525', star: 2, name: '地幔岩',},
    '哈克龙_2': {id: '148', star: 2, name: '哈克龙',},
    '鸭嘴火兽_2': {id: '126', star: 2, name: '鸭嘴火兽',},
    '电击兽_2': {id: '125', star: 2, name: '电击兽',},
    '泥偶小人_2': {id: '622', star: 2, name: '泥偶小人',},
    '嘟嘟利_2': {id: '85', star: 2, name: '嘟嘟利',},
    '花漾海狮_2': {id: '729', star: 2, name: '花漾海狮',},
    '炎热喵_2': {id: '726', star: 2, name: '炎热喵',},
    '投羽枭_2': {id: '723', star: 2, name: '投羽枭',},

    '金属怪_2': {id: '375', star: 2, name: '金属怪',},
    '甲壳龙_2': {id: '372', star: 2, name: '甲壳龙',},
    '鬃岩狼人_月_2': {id: '745', star: 2, name: '鬃岩狼人(月)',},
    '鬃岩狼人_日_2': {id: '745', star: 2, name: '鬃岩狼人(日)',},
    '可多拉_2': {id: '305', star: 2, name: '可多拉',},
    '甜舞妮_2': {id: '762', star: 2, name: '甜舞妮',},
    '小卡比兽_2': {id: '446', star: 2, name: '小卡比兽',},
    '勒克猫_2': {id: '404', star: 2, name: '勒克猫',},
    '穿山王_阿罗拉_2': {id: '28', star: 2, name: '穿山王(阿罗拉)',},
    '嘎啦嘎啦_阿罗拉_2': {id: '105', star: 2, name: '嘎啦嘎啦(阿罗拉)',},
    '兰螳花_2': {id: '754', star: 2, name: '兰螳花',},
    '噬沙堡爷_2': {id: '770', star: 2, name: '噬沙堡爷',},
    '卡咪龟_2': {id: '8', star: 3, name: '卡咪龟',},
    '火恐龙_2': {id: '5', star: 2, name: '火恐龙',},
    '妙蛙草_2': {id: '2', star: 2, name: '妙蛙草',},

    '岩狗狗_2': {id: '744', star: 2, name: '岩狗狗',},
    '麻麻鳗_2': {id: '603', star: 2, name: '麻麻鳗',},
    '三合一磁怪_2': {id: '82', star: 2, name: '三合一磁怪',},
    '沙基拉斯_2': {id: '247', star: 2, name: '沙基拉斯',},
    '混混鳄_2': {id: '552', star: 2, name: '混混鳄',},
    '喇叭啄鸟_2': {id: '732', star: 2, name: '喇叭啄鸟',},
    '口呆花_2': {id: '70', star: 2, name: '口呆花',},
    '猫鼬探长_2': {id: '735', star: 2, name: '猫鼬探长',},
    '臭臭泥_阿罗拉_2': {id: '89', star: 2, name: '臭臭泥(阿罗拉)',},
    '盔甲鸟_2': {id: '227', star: 2, name: '盔甲鸟',},
    '拉普拉斯_2': {id: '227', star: 2, name: '拉普拉斯',},
    '双刃丸_2': {id: '502', star: 2, name: '双刃丸',},
    '炒炒猪_2': {id: '499', star: 2, name: '炒炒猪',},
    '青藤蛇_2': {id: '496', star: 2, name: '青藤蛇',},

    '皮卡丘_2': {id: '25', star: 2, name: '皮卡丘'},
    '穿着熊_2': {id: '760', star: 2, name: '穿着熊',},
    '幕下力士_2': {id: '296', star: 2, name: '幕下力士',},
    '哈约克_2': {id: '507', star: 2, name: '哈约克',},
    '椰蛋树_阿罗拉_2': {id: '103', star: 2, name: '椰蛋树(阿罗拉)',},
    '拉达_阿罗拉_2': {id: '20', star: 2, name: '拉达(阿罗拉)',},
    '梦妖魔_2': {id: '429', star: 2, name: '梦妖魔',},
    '大奶罐_2': {id: '241', star: 2, name: '大奶罐',},
    '肯泰罗_2': {id: '128', star: 2, name: '肯泰罗'},

    // ---------------------------- 1 -------------------------------
    '利欧路_1': {id: '447', star: 1, name: '利欧路',},
    '鬼斯_1': {id: '92', star: 1, name: '鬼斯',},
    '凯西_1': {id: '63', star: 1, name: '凯西',},
    '腕力_1': {id: '66', star: 1, name: '腕力',},
    '石丸子_1': {id: '524', star: 1, name: '石丸子',},
    '迷你龙_1': {id: '147', star: 1, name: '迷你龙',},
    '鸭嘴宝宝_1': {id: '240', star: 1, name: '鸭嘴宝宝',},
    '电击怪_1': {id: '239', star: 1, name: '电击怪',},
    '嘟嘟_1': {id: '84', star: 1, name: '嘟嘟',},
    '球球海狮_1': {id: '728', star: 1, name: '球球海狮',},
    '火斑喵_1': {id: '725', star: 1, name: '火斑喵',},
    '木木枭_1': {id: '722', star: 1, name: '木木枭',},


    '菊草叶_1': {id: '152', star: 1, name: '菊草叶',},

    '铁哑铃_1': {id: '374', star: 1, name: '铁哑铃',},
    '宝贝龙_1': {id: '371', star: 1, name: '宝贝龙',},
    '岩狗狗_1': {id: '744', star: 1, name: '岩狗狗',},
    '可可多拉_1': {id: '304', star: 1, name: '可可多拉',},
    '甜竹竹_1': {id: '761', star: 1, name: '甜竹竹',},
    '小卡比兽_1': {id: '446', star: 1, name: '小卡比兽',},
    '小猫怪_1': {id: '403', star: 1, name: '小猫怪',},
    '穿山鼠_阿罗拉_1': {id: '27', star: 1, name: '穿山鼠(阿罗拉)',},
    '卡拉卡拉_1': {id: '104', star: 1, name: '卡拉卡拉',},
    '伪螳草_1': {id: '753', star: 1, name: '伪螳草',},
    '沙丘娃_1': {id: '769', star: 1, name: '沙丘娃',},
    '杰尼龟_1': {id: '7', star: 1, name: '杰尼龟',},
    '小火龙_1': {id: '4', star: 1, name: '小火龙',},
    '妙蛙种子_1': {id: '1', star: 1, name: '妙蛙种子',},

    '麻麻小鱼_1': {id: '602', star: 1, name: '麻麻小鱼',},
    '小磁怪_1': {id: '81', star: 1, name: '小磁怪',},
    '幼基拉斯_1': {id: '246', star: 1, name: '幼基拉斯',},
    '黑眼鳄_1': {id: '551', star: 1, name: '黑眼鳄',},
    '小笃儿_1': {id: '731', star: 1, name: '小笃儿',},
    '喇叭芽_1': {id: '69', star: 1, name: '喇叭芽',},
    '猫鼬少_1': {id: '734', star: 1, name: '猫鼬少',},
    '臭泥_阿罗拉_1': {id: '88', star: 1, name: '臭泥(阿罗拉)',},
    '水水獭_1': {id: '501', star: 1, name: '水水獭',},
    '暖暖猪_1': {id: '498', star: 1, name: '暖暖猪',},
    '藤藤蛇_1': {id: '495', star: 1, name: '藤藤蛇',},

    '童偶熊_1': {id: '759', star: 1, name: '童偶熊',},
    '幕下力士_1': {id: '296', star: 1, name: '幕下力士',},
    '小约克_1': {id: '506', star: 1, name: '小约克',},
    '蛋蛋_1': {id: '102', star: 1, name: '蛋蛋',},
    '小拉达_阿罗拉_1': {id: '19', star: 1, name: '小拉达(阿罗拉)',},
    '梦妖_1': {id: '200', star: 1, name: '梦妖',},

} as const

export default data;

export const data2
    :
    {
        [s
            :
            string
            ]:
            Card2
    }
    = {
    '水君_4': CCard(pm.水君, 4)
}