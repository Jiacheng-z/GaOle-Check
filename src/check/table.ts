import {SItem, Card} from "./types/card";
import {Data, optionValue} from "./data/data";
import {filterObj} from "./check";

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
            if (t.type == 0) {
                continue
            }
            vs[t.value] ??= t;
        }

        for (let i = 0; i < this.cards.length; i++) {
            let c = this.cards[i] as Card;
            let v = optionValue(c)
            if (vs[v]) { // 存在这个卡片
                switch (c.star) { // 增加分数
                    case 5:
                        score += 34;
                        break;
                    case 4:
                        score += 8;
                        break;
                    case 3:
                        score += 3;
                        break;
                    case 2:
                        score += 2;
                        break;
                    default:
                        score += 1;
                        break;
                }
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
            if (g && g.s !== undefined && g.s.type in [1, 2]) { // 被选中，检查后一个是否被选中
                let next = i + 1;
                if (next < this.cardGroup.length) {
                    let nn = this.cardGroup[next];
                    if (nn && nn.s !== undefined) { // 相邻卡片多加分数
                        score += 2;
                    }
                }
            }
        }

        this.score = score;
    }

    public getScore() {
        return this.score;
    }

    public draw(): HTMLElement {
        let div = document.createElement("div")
        div.setAttribute("class", "col-6 tb-row")

        let doc = document.createElement("table")
        doc.setAttribute("class", "table table-hover g-2")
        div.append(doc);

        let thead = document.createElement("thead");
        thead.setAttribute("class", "table-light")

        let tr = document.createElement("tr");
        let th1 = document.createElement("th")
        let th2 = document.createElement("th")
        th2.innerText = this.title;
        let th3 = document.createElement("th")
        tr.append(th1, th2, th3)
        thead.append(tr)

        let body = document.createElement("tbody")

        let i = 50;
        for (const g of this.cardGroup) {
            let trlight = "";
            switch (g.c.star) {
                case 5:
                    trlight = " table-primary"
                    break;
                case 4:
                    trlight = " table-warning"
                    break;
                default:
                    break;
            }
            if (g.s !== undefined) {
                if (g.s.type == 1) { // 已出现
                    trlight = " table-secondary"
                }
                if (g.s.type == 2) { // 已捕获
                    trlight = " table-secondary"
                }
            }

            let tr = document.createElement("tr");
            tr.setAttribute("class", "tr-row" + trlight)

            let th = document.createElement("th");
            th.setAttribute("class", "col-auto th-num")
            th.innerText = String(i);
            i--;

            let td = document.createElement("td");
            td.setAttribute("class", "col-auto td-pm")
            td.setAttribute("style", "padding-left: 0px;padding-right: 0px;padding-bottom: 0px;")
            switch (g.c.star) {
                case 5:
                    td.innerHTML = `<span class="badge rounded-pill bg-danger">` + g.c.star + `</span>&nbsp;&nbsp;` + g.c.name;
                    break;
                case 4:
                    td.innerHTML = `<span class="badge rounded-pill bg-success">` + g.c.star + `</span>&nbsp;&nbsp;` + g.c.name;
                    break;
                case 3:
                    td.innerHTML = `<span class="badge rounded-pill bg-warning">` + g.c.star + `</span>&nbsp;&nbsp;` + g.c.name;
                    break;
                case 2:
                    td.innerHTML = `<span class="badge rounded-pill bg-light text-dark">` + g.c.star + `</span>&nbsp;&nbsp;` + g.c.name;
                    break;
                case 1:
                    td.innerHTML = `<span class="badge rounded-pill bg-light text-dark">` + g.c.star + `</span>&nbsp;&nbsp;` + g.c.name;
                    break;
                default:
                    td.innerHTML = `<span class="badge rounded-pill bg-light text-dark">` + g.c.star + `</span>&nbsp;&nbsp;` + g.c.name;
                    break;
            }

            // <span class="sprite-icon sprite-icon-229" title="黑鲁加"></span>
            let span = document.createElement("span");
            let num = g.c.id.padStart(3, '0')
            span.setAttribute("class", "float-end sprite-icon sprite-icon-" + num)
            td.append(span)

            let tdp = document.createElement("th");
            tdp.setAttribute("class", "col-auto td-pmp")
            // tdp.setAttribute("style", "padding-left: 0px;padding-right: 0px;")

            let btnc = "btn-outline-primary"
            let btnText = "出现"
            if (g.s !== undefined) {
                if (g.s.type == 1) { // 已出现
                    btnc = "btn-outline-success"
                    btnText = "捕获"
                }
                if (g.s.type == 2) { // 已捕获
                    btnc = "btn-outline-danger"
                    btnText = "取消"
                }
            }

            let btn = document.createElement("button");
            btn.setAttribute("class", "btn " + btnc + " btn-sm td-btn")
            btn.innerText = btnText
            if (g.s !== undefined) {
                if (g.s.type == 0) { // 未出现
                    btn.addEventListener("click", function () {
                        filterObj.UpdateSelect(optionValue(g.c), 1)
                    })
                }
                if (g.s.type == 1) { // 已出现
                    btn.addEventListener("click", function () {
                        filterObj.UpdateSelect(optionValue(g.c), 2)
                    })
                }
                if (g.s.type == 2) { // 已捕获
                    btn.addEventListener("click", function () {
                        filterObj.UpdateSelect(optionValue(g.c), 0)
                    })
                }
            } else {
                btn.addEventListener("click", function () {
                    filterObj.UpdateSelect(optionValue(g.c), 1)
                })
            }

            tdp.append(btn);

            tr.append(th, td, tdp);
            body.append(tr);
        }
        doc.append(thead, body);

        return div;
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

        for (const s of Data.getData()) {
            for (const [idx, cards] of Object.entries(s.list)) {
                let row = new Row(s.name + " " + idx, cards, item);
                list.push(row);
            }
        }
        this.draw(list);
    }

    private draw(l: Row[]) {
        l.sort(function (i, j) {
            let a = i.getScore();
            let b = j.getScore();
            if (a == b) {
                //按照title算
                if (i.title > j.title) {
                    return 1
                }
                if (i.title === j.title) {
                    return 0
                }
                if (i.title < j.title) {
                    return -1
                }
            }
            return b - a;
        })
        // 清空
        this.checkContainer.innerHTML = "";

        for (const r of l) {
            if (r.getScore() <= 0) {
                continue
            }
            let tb = r.draw();
            this.checkContainer.append(tb)
        }
    }
}

