import {SItem, Card} from "./types/card";
import {Data, optionValue} from "./data/data";

class Row {
    public title: string;
    private cards: Card[];
    private item: SItem<string, number>[];
    private cardGroup: { c: Card, s?: SItem<string, number> }[] = [];

    public score: number = 0; // 最终得分

    constructor(title: string, cards: Card[], item: SItem<string, number>[]) {
        this.title = title;
        this.cards = cards;
        this.item = item;

        this.calculateScore(); // 算分
    }

    private calculateScore() {
        let score: number = 0;

        let vs: { [s: string]: SItem<string, number> } = {};
        for (const t of this.item) {
            vs[t.value] ??= t;
        }

        for (let i = 0; i < this.cards.length; i++) {
            let c = this.cards[i] as Card;
            let v = optionValue(c)
            if (vs[v]) { // 存在这个卡片
                score += 20; // 同卡+20
                this.cardGroup.push({c: c, s: vs[v]})
            } else {
                this.cardGroup.push({c: c})
            }
        }
        this.score = score;
        if (this.score <= 0) {
            return
        }

        // 检查连续, 连续多加分
        for (let i = 0; i < this.cardGroup.length; i++) {
            let g = this.cardGroup[i];
            if (g && g.s !== undefined) { // 被选中，检查后一个是否被选中
                let next = i + 1;
                if (next < this.cardGroup.length) {
                    let nn = this.cardGroup[next];
                    if (nn && nn.s !== undefined) {
                        score += 5;
                    }
                }
            }
        }

        this.score = score;
    }

    public getScore() {
        return this.score;
    }
}

export class Table {
    private checkContainer: HTMLElement

    constructor() {
        const container = document.getElementById('check-container');
        if (!container)
            throw "找不到初始容器";

        this.checkContainer = container;
    }

    public DrawTable(item: SItem<string, number>[]) {
        // 计算每组卡序分数
        let list: Row[] = [];

        for (const s of Data.data) {
            for (const [idx, cards] of Object.entries(s.list)) {
                let row = new Row(s.name + "_" + idx, cards, item);
                list.push(row);
            }
        }
        this.draw(list);
    }

    private draw(l: Row[]) {
        this.checkContainer;
        for (const r of l) {
            console.log(r.getScore(), r)
        }
    }
}

