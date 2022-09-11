import {Data, optionValue} from "./data/data"
import {Card, SItem} from "./types/card";
import {Table} from "./table";


/**
 * 生成下来选单逻辑
 */
export class Filter {
    private sltStar: HTMLSelectElement;
    private sltPM: HTMLSelectElement;

    private starPMs: { [s: string]: Card[] } = {};  // 星级列表
    private selectList: SItem<string, number>[] = []; // 已选宝可梦列表
    private table: Table;

    constructor(s: HTMLSelectElement, p: HTMLSelectElement) {
        this.sltStar = s;
        this.sltPM = p;

        this.initStarPMList();
        this.table = new Table();
    }

    public starChange() {
        for (let i = this.sltPM.options.length - 1; i >= 0; i--) {
            this.sltPM.remove(i)
        }

        let cs = this.starPMs[Number(this.sltStar.value)]

        if (cs) {
            for (const c of cs) {
                let option = document.createElement("option");
                option.value = optionValue(c);
                option.text = c.id + '-' + c.name as string;
                this.sltPM.appendChild(option);
            }
        }
    }

    private initStarPMList() {
        for (const s of Data.data) {
            for (const [_, cards] of Object.entries(s.list)) {
                for (const pm of cards) {
                    this.starPMs[pm.star] ??= [];
                    this.starPMs[pm.star]?.push(pm)
                }
            }
        }

        // 排序 编号倒序
        for (let [s, cards] of Object.entries(this.starPMs)) {
            cards.sort(function (i, j) {
                let a = Number(i.id);
                let b = Number(j.id);
                return b - a;
            })
            this.starPMs[s] = cards
        }
    }

    public CleanSelect() {
        this.selectList = [];
        this.table.DrawTable(this.selectList);
    }

    public UpdateSelect(value: string, type: number) {
        if (value === '') {
            return
        }
        let isset = false
        for (let v of this.selectList) {
            if (value === v.value) {
                isset = true
                if (type !== v.type) {
                    v.type = type
                }
            }
        }
        if (!isset) {
            this.selectList.push({value, type})
        }
        // sleepSync(1);
        this.table.DrawTable(this.selectList);
    }
}

// function sleepSync(ttl: number) {
//     const now = Date.now();
//     ttl *= 100;
//     while (Date.now() - now < ttl) {}
// }