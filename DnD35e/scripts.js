'use strict';
const
    CCLB = [
        "3,6,10,13,16,20,23,26,30,33,38,43,50,58,66,76,86,100,116,133,153,173,200,233,266,306,346,400,466",
        "6,13,20,26,33,40,46,53,60,66,76,86,100,116,133,153,173,200,233,266,306,346,400,466,533,613,693,800,933",
        "10,20,30,40,50,60,70,80,90,100,115,130,150,200,175,200,230,260,300,350,400,460,520,600,700,800,920,1040,1200,1400"
    ],
    CCKG = [
        "1.39,2.7,4.5,5.9,7.2,9.0,10.4,11.7,13.5,14.9,15.8,19.4,22.5,26.1,29.7,34.2,38.7,45.0,52.2,59.9,68.9,77.9,90.0,104.9,119.7,137.7,155.7,180.0,209.7",
        "2.7,5.9,9.0,11.7,14.9,18.0,20.7,23.9,27.0,29.7,34.2,38.7,45.0,52.2,59.9,68.9,77.9,90.0,104.9,119.7,137.7,155.7,180.0,209.7,239.9,275.9,311.9,360.0,419.9",
        "4.5,9.0,13.5,18.0,22.5,27.0,31.5,36.0,40.5,45.0,51.8,58.5,67.5,78.8,90.0,103.5,117.0,135.0,157.5,180.0,207.0,234.0,270.0,315.0,360.0,414.0,468.0,540.0,630.0"
    ];
    // SPEED = [
    //     "20,30,40,50,60,70,80,90,100",
    //     "15,20,30,35,40,50,55,60,70"
    // ];

function round1(x) {
    return (Math.floor(x) === x) ? x : x.toFixed(1);
}

function getCurrentWeight() {

    const bipedal = document.getElementById('bipedal').checked;
    const defaultSM = +document.getElementById('sizeMod').value;
    const sizeMod = (bipedal) ? defaultSM :
        (defaultSM === 0.75) ? 1 :
            (defaultSM >= 0.5) ? defaultSM * 1.5 :
                defaultSM * 2;

    const strength = +document.getElementById('strength').value;
    const ccId = (strength > 29) ? 20 + strength % 10 - 1 : strength - 1;
    const ccMod = (strength > 29) ? 4 ** Math.floor(strength / 10) - 2 : 1;
    let getCCValue = (value) => value.split(",")[ccId] * ccMod * sizeMod;

    return [
        CCLB.map(value => getCCValue(value)),
        CCKG.map(value => getCCValue(value))
    ];
}

function updateCapacity(document) {

    const [curLb, curKg] = getCurrentWeight();

    document.getElementById('textEng').textContent =
        "Light load: " + curLb[0] + " lb. or less\n" +
        "Medium load: " + (curLb[0] + 1) + " – " + curLb[1] + " lb.\n" +
        "Heavy load: " + (curLb[1] + 1) + " – " + curLb[2] + " lb.\n" +
        "Lift over head: " + (curLb[2]) + " lb.\n" +
        "Lift off ground: " + (curLb[2] * 2) + " lb.\n" +
        "Push or drag: " + (curLb[2] * 5) + " lb.";

    document.getElementById('textRus').textContent =
        "Лёгкая нагрузка: " + curKg[0] + " кг или меньше\n" +
        "Средняя нагрузка: " + round1(curKg[0] + 0.1) + " – " + curKg[1] + " кг\n" +
        "Тяжёлая нагрузка: " + round1(curKg[1] + 0.1) + " – " + curKg[2] + " кг\n" +
        "Поднять над головой: " + (curKg[2]) + " кг\n" +
        "Поднять над землёй: " + (curKg[2] * 2) + " кг\n" +
        "Толкать или тащить: " + (curKg[2] * 5) + " кг";

    document.getElementById('textMix').textContent =
        "Лёгкая (Light load): " + curKg[0] + " кг или меньше (" + curLb[0] + " lb. or less)\n" +
        "Средняя (Medium load): " + round1(curKg[0] + 0.1) + " – " + curKg[1] + " кг (" + (curLb[0] + 1) + "–" + curLb[1] + " lb.)\n" +
        "Тяжёлая (Heavy load): " + round1(curKg[1] + 0.1) + " – " + curKg[2] + " кг (" + (curLb[1] + 1) + "–" + curLb[2] + " lb.)\n" +
        "Поднять над головой (Lift over head): " + (curKg[2]) + " кг (" + (curLb[2]) + " lb.)\n" +
        "Поднять над землёй (Lift off ground): " + (curKg[2] * 2) + " кг (" + (curLb[2] * 2) + " lb.)\n" +
        "Толкать или тащить (Push or drag): " + (curKg[2] * 5) + " кг (" + (curLb[2] * 5) + " lb.)";

    updatePenalty(document);
}

function updatePenalty(document) {

    const [curLb, curKg] = getCurrentWeight();
    const weightKg = document.getElementById('weightKg').checked;
    const curA = (weightKg) ? curKg : curLb;

    const weight = +document.getElementById('weight').value;
    let penalty, notify;

    if (weight <= curA[0]) {
        //light
        penalty = "Лёгкая нагрузка.\n\n" +
            "Нет штрафов от веса.";
        notify = "card border-success";
    } else if (weight <= curA[1]) {
        //medium
        penalty = "Средняя нагрузка.\n\n" +
            "Макс. Ловкость = +3\n" +
            "Штраф Проверки = -3\n" +
            "Скорость: 9 м (30 ft.) = 6 м (20 ft.)\n" +
            "Скорость: 6 м (20 ft.) = 4,5 м (15 ft.)\n" +
            "Скорость: бег (30 ft.) = х4";
        notify = "card border-info";
    } else if (weight <= curA[2]) {
        //heavy
        penalty = "Тяжёлая нагрузка.\n\n" +
            "Макс. Ловкость = +1\n" +
            "Штраф Проверки = -6\n" +
            "Скорость: 9 м (30 ft.) = 6 м (20 ft.)\n" +
            "Скорость: 6 м (20 ft.) = 4,5 м (15 ft.)\n" +
            "Скорость: бег (30 ft.) = х3";
        notify = "card border-warning";
    } else {
        //overload
        if (weight <= curA[2] * 2) {
            penalty = "Этот вес можно приподнять.\n\n" +
                "Вы теряете все бонусы Ловкости и КД.\n" +
                "Скорость: 1.5 метра в раунд (полнораундовым действием).";
        } else if (weight <= curA[2] * 5) {
            penalty = "Этот вес можно толкать или перетаскивать.\n\n" +
                "Вы теряете все бонусы Ловкости и КД.\n" +
                "Скорость: 1.5 метра в раунд (полнораундовым действием).";
        } else {
            penalty = "Вы не можете сдвинуть этот вес.";
        }
        notify = "card border-danger";
    }

    document.getElementById('text').textContent = penalty;
    document.getElementById('capacity-info').className = notify;
}

updateCapacity(document);
