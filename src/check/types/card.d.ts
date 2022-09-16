/**
 * 单卡卡片数据
 */
export interface Card {
    id: string; // PM,ID 同PM ID相同, 特殊形态也算
    star: number; // 卡片星级 1,2,3,4,5,0(幸运卡)
    name: string; // 宝可梦名称
}

export interface Card2 {
    pm: Pokemon;
    star: number;
    form: string;
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

export type SItem<T, U> = { value: T, type: U };

// -------------------
export interface Pokemon {
    id: string;
    name: string;
    star: number[]; // 宝可梦存在的星级
    form: string[]; // 形态列表 阿罗拉,起源,日,月,黄昏....
}

export function CCard(p: Pokemon, star: number, form: string = ''): Card2 {
    if (p.star.indexOf(star) < 0) {
        throw new Error('无法生成宝可梦卡片, 星级错误. PM:' + p.name + '(' + p.id + ')' + star + ';');
    }
    if (form !== '') {
        if (p.form.indexOf(form) < 0) {
            throw new Error('无法生成宝可梦卡片, 形态错误. PM:' + p.name + '(' + p.id + ')' + form + ';');
        }
    }

    return {
        pm: p,
        star: star,
        form: form,
    };
}

export function PShowName(p: Pokemon, star: number, form: string = ''): string {
    // 判断是否存在
    if (p.star.indexOf(star) < 0) {
        throw new Error('无法生成宝可梦展示名称, 星级错误. PM:' + p.name + '(' + p.id + ')' + star + ';');
    }
    if (form !== '') {
        if (p.form.indexOf(form) < 0) {
            throw new Error('无法生成宝可梦展示名称, 形态错误. PM:' + p.name + '(' + p.id + ')' + form + ';');
        }
    }
    return star + '-' + p.name + '(' + form + ')'
}

// 生成宝可梦卡片唯一ID
export function PUniqueId(p: Pokemon, star: number, form: string = ''): string {
    // 判断是否存在
    if (p.star.indexOf(star) < 0) {
        throw new Error('无法生成宝可梦唯一ID, 星级错误. PM:' + p.name + '(' + p.id + ')' + star + ';');
    }
    if (form !== '') {
        if (p.form.indexOf(form) < 0) {
            throw new Error('无法生成宝可梦唯一ID, 形态错误. PM:' + p.name + '(' + p.id + ')' + form + ';');
        }
    }
    return p.id + '_' + star + '_' + form;
}