/**
 * 单卡卡片数据
 */
export interface Card {
    id: string; // PM,ID 同PM ID相同, 特殊形态也算
    star: number; // 卡片星级 1,2,3,4,5,0(幸运卡)
    name: string; // 宝可梦名称
}


/**
 * 一季度卡片
 */
export interface Season {
    season: number; // 第n弹
    name: string; // 中文名称
    list: { [s: string]: Card[] }; // 卡片序列 从50-1倒序写入
    [key: string]: any
}

type SItem<T, U> = { value: T, type: U };
