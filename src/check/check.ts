import './check.css';
import './pm.css';
import {Filter} from "./filter";

export var filterObj: any;

function main() {

    // 绑定星级修改事件
    let star = document.getElementById("starSelect") as HTMLSelectElement;
    let pm = document.getElementById("pmSelect") as HTMLSelectElement;
    let btnS = document.getElementById("btnPmShow") as HTMLButtonElement;
    let btnG = document.getElementById("btnPmGet") as HTMLButtonElement;
    let btnC = document.getElementById("btnPmClean") as HTMLButtonElement;

    if (star) {
        let f = new Filter(star, pm);
        filterObj = f;

        star.addEventListener("change", function () {
            f.starChange()
        })
        btnS.addEventListener("click", function () {
            // 设置到出现列表
            f.UpdateSelect(pm.value, 1);
        })
        btnG.addEventListener("click", function () {
            f.UpdateSelect(pm.value, 2);
        })
        btnC.addEventListener("click", function () {
            if (confirm("是否清空?")) {
                f.CleanSelect();
            }
        })
    }
}

main()