'use strict';
var i, mult,
    textLb, textKg, textMix,
    curLb, curKg,
    ccLb = ["3,6,10,13,16,20,23,26,30,33,38,43,50,58,66,76,86,100,116,133,153,173,200,233,266,306,346,400,466", "6,13,20,26,33,40,46,53,60,66,76,86,100,116,133,153,173,200,233,266,306,346,400,466,533,613,693,800,933", "10,20,30,40,50,60,70,80,90,100,115,130,150,200,175,200,230,260,300,350,400,460,520,600,700,800,920,1040,1200,1400"],
    ccKg = [ "1.39,2.7,4.5,5.9,7.2,9.0,10.4,11.7,13.5,14.9,15.8,19.4,22.5,26.1,29.7,34.2,38.7,45.0,52.2,59.9,68.9,77.9,90.0,104.9,119.7,137.7,155.7,180.0,209.7", "2.7,5.9,9.0,11.7,14.9,18.0,20.7,23.9,27.0,29.7,34.2,38.7,45.0,52.2,59.9,68.9,77.9,90.0,104.9,119.7,137.7,155.7,180.0,209.7,239.9,275.9,311.9,360.0,419.9", "4.5,9.0,13.5,18.0,22.5,27.0,31.5,36.0,40.5,45.0,51.8,58.5,67.5,78.8,90.0,103.5,117.0,135.0,157.5,180.0,207.0,234.0,270.0,315.0,360.0,414.0,468.0,540.0,630.0"];

function pow(x, n) {
  var result = x;
  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

function round1(x) {
    var t = (Math.floor(x) == x) ? x: x.toFixed(1);
    return t;
}

function validate(document) {

    var strength = +document.getElementById('strength').value;
    var sizeMod = +document.getElementById('sizeMod').value;
    var bipedal = document.getElementById('bipedal').checked;
    
    function forQuadro() {
        return (sizeMod==0.75) ? 1 :
        (sizeMod>=0.5) ? sizeMod * 1.5 :
        sizeMod * 2;
    }
    
    sizeMod = (bipedal) ? sizeMod : forQuadro();
    
    var formTextLb = document.getElementById('textEng');
    var formTextKg = document.getElementById('textRus');
    var formTextMix = document.getElementById('textMix');

    function getCCValue(str){
        return str.split(",")[i]*mult*sizeMod;
    }

    function getCCValues(arr){
        return [getCCValue(arr[0]), getCCValue(arr[1]), getCCValue(arr[2])];
    }

    if (strength > 29){
        i = 20 + strength % 10 - 1;
        mult = pow(4, Math.floor(strength / 10) - 2);
    } else {
        i = strength - 1;
        mult = 1;
    }

    curLb = getCCValues(ccLb);
    curKg = getCCValues(ccKg);

    // a[0]+"lb. or less", (a[0]+1)+"–"+a[1]+" lb.", (a[1]+1)+"–"+a[2]+" lb."
    // "до "b[0]+" кг", round(b[0]+0.1,1)+"–"+b[1]+" кг", (b[1]+0.1)+"–"+b[2]+" кг"

    textLb = "Light load: "+ curLb[0] +" lb. or less\n" +
    "Medium load: "+ (curLb[0]+1) +" – "+curLb[1] +" lb.\n"+
    "Heavy load: " + (curLb[1]+1)+" – "+curLb[2] + " lb.\n"+
    "Lift over head: " + (curLb[2]) + " lb.\n"+
    "Lift off ground: " + (curLb[2]*2) + " lb.\n"+
    "Push or drag: " + (curLb[2]*5) + " lb.";

    textKg = "Лёгкая нагрузка: "+ curKg[0] +" кг или меньше\n" +
    "Средняя нагрузка: "+ round1(curKg[0]+0.1) +" – "+curKg[1] +" кг\n"+
    "Тяжёлая нагрузка: " + round1(curKg[1]+0.1) +" – "+curKg[2] + " кг\n"+
    "Поднять над головой: " + (curKg[2]) + " кг\n"+
    "Поднять над землёй: " + (curKg[2]*2) + " кг\n"+
    "Толкать или тащить: " + (curKg[2]*5) + " кг";

    textMix = "Лёгкая (Light load): "+ curKg[0] +" кг или меньше ("+ curLb[0] +" lb. or less)\n" +
    "Средняя (Medium load): "+ round1(curKg[0]+0.1) +" – "+curKg[1] +" кг ("+ (curLb[0]+1)+"–"+curLb[1] +" lb.)\n"+
    "Тяжёлая (Heavy load): " + round1(curKg[1]+0.1) +" – "+curKg[2] + " кг (" + (curLb[1]+1)+"–"+curLb[2] + " lb.)\n"+
    "Поднять над головой (Lift over head): " + (curKg[2]) + " кг (" + (curLb[2]) + " lb.)\n"+
    "Поднять над землёй (Lift off ground): " + (curKg[2]*2) + " кг (" + (curLb[2]*2) + " lb.)\n"+
    "Толкать или тащить (Push or drag): " + (curKg[2]*5) + " кг (" + (curLb[2]*5) + " lb.)";

    formTextLb.textContent = textLb;
    formTextKg.textContent = textKg;
    formTextMix.textContent = textMix;
          
    updateCapasity(document);
}

function updateCapasity(document) {
   
    var weightKg = document.getElementById('weightKg').checked;
    var weight = +document.getElementById('weight').value;
    
    var curA = (weightKg) ? curKg: curLb;
    var penalty, notify;

    if (weight <= curA[0]){
        //light
        penalty = "Нет штрафов от веса.";
        notify = "panel panel-success";
    } else if (weight <= curA[1]) {
        //medium
        penalty = "Макс. Ловкость = +3\n" +
        "Штраф Проверки = -3\n" +
        "Скорость: 9 м (30 ft.) = 6 м (20 ft.)\n" +
        "Скорость: 6 м (30 ft.) = 4,5 м (15 ft.)\n" +
        "Скорость: бег (30 ft.) = х4";
        notify = "panel panel-info";
    } else if (weight <= curA[2]) {
        //heavy
        penalty = "Макс. Ловкость = +1\n" +
        "Штраф Проверки = -6\n" +
        "Скорость: 9 м (30 ft.) = 6 м (20 ft.)\n" +
        "Скорость: 6 м (30 ft.) = 4,5 м (15 ft.)\n" +
        "Скорость: бег (30 ft.) = х3";
        notify = "panel panel-warning";
    } else {
        //overload
        if (weight <= curA[2]*2) {
            penalty = "Этот вес можно приподнять.\n" +
            "Вы теряете все бонусы Ловкости и КД.\n" +
            "Скорость: 1.5 метра в раунд (полнораундовым действием).";
        } else if (weight <= curA[2]*5) {
            penalty = "Этот вес можно толкать или перетаскивать.\n" +
            "Вы теряете все бонусы Ловкости и КД.\n" +
            "Скорость: 1.5 метра в раунд (полнораундовым действием).";        
        } else {
            penalty = "Вы не можете сдвинуть этот вес.";         
        }
        notify = "panel panel-danger";
    }
    
    var paramPenalty = document.getElementById('text').textContent = penalty;
    var paramNotify = document.getElementById('cpacity-info').className = notify;
}

validate(document);