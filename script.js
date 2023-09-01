let isPlay = false;
var audio = new Audio('musik.mp3');
function clickPlay(){
    if (!isPlay){
        audio.play();
        isPlay = true;
        document.getElementById('musik').textContent = '||';
    }else{
        audio.pause();
        isPlay = false;
        document.getElementById('musik').textContent = '▶';
    }
}

let constellations = [];//коллекция созвездий

function Constellation(array, flag){//функция появления и исчезновения созвездий
    if(flag){    
        for (let i = 0; i < starsArray.length; i++){
            for (let j = 0; j < array.length; ++j){
                if (array[j] == starsArray[i]){
                    $('#' + starsArray[i]).empty();
                    starsArray.splice(i, 1);
                    i--;
                }
            }
        }
    array.forEach((arr) => {
        constellations.push(arr);
        $('#' + arr).append('<img src="polar.jpg"/>');
    });
    flag = false;
    }else{
        for (let i = 0; i < constellations.length; i++) {
            for (let j = 0; j < array.length; j++){
                if (constellations[i] == array[j]){
                    $('#' + constellations[i]).empty();
                    constellations.splice(i, 1);
                    i--;
                }
            }
        }
        flag = true;
    }
    return flag;
}
//большая медведица
let BbearFlag = true;
function BigBear(){
    let BBearStars = ["col_16_17", "col_18_20", "col_20_20", "col_22_21", "col_24_19", "col_27_22", "col_26_24"];
    BbearFlag = Constellation(BBearStars, BbearFlag);
}
//малая медведица
let SbearFlag = true;
function SmallBear(){
    let SBearStars = ["col_15_27", "col_17_28", "col_15_30", "col_16_30","col_17_32", "col_18_33", "col_20_34"];
    SbearFlag = Constellation(SBearStars, SbearFlag);
}
//Дракон
let DragonFlag = true;
function Dragon(){
    let DragonStars = ["col_4_28", "col_5_26", "col_6_27", "col_6_29", "col_10_24", "col_10_26", "col_10_28", "col_10_34", "col_12_23",
                        "col_12_32", "col_17_24", "col_21_26", "col_23_26"];
    DragonFlag = Constellation(DragonStars, DragonFlag);
}
//Касиопея
let KasioFlag = true;
function Kasiopea(){
    let KasioStars = ["col_15_46", "col_17_48", "col_18_46", "col_20_47", "col_22_45"];
    KasioFlag = Constellation(KasioStars, KasioFlag);
}