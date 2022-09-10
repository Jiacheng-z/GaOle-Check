/**
 * 生成下来选单逻辑
 */
export class Filter {
    private checkContainer: HTMLElement;

    constructor() {
        const container = document.getElementById('check-container');
        if (!container)
            throw "找不到初始容器";

        this.checkContainer = container;

        // 星级下拉
        this.checkContainer.append(this.helpCreateSelect(['5', '4', '3', '2', '1', '0'], 'starSelect'))
        // 宝可梦下拉
        this.checkContainer.append(this.helpCreateSelect(['???'], 'pmSelect'))
    }

    private helpCreateSelect(selectArray: string[], id: string) {
        var selectList = document.createElement("select");
        selectList.id = id;

        //Create and append the options
        for (var i = 0; i < selectArray.length; i++) {
            var option = document.createElement("option");
            option.value = selectArray[i] as string;
            option.text = selectArray[i] as string;
            selectList.appendChild(option);
        }
        return selectList;
    }
}