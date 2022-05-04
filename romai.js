function romaiSzam(n) {
    let romai="";
    if (n>0 && n<=3) {
        romai+=iBetuk(n);
    }
    else if (n>=4 && n<=9) {
        romai+=negyEs9Kozott(n);
    }
    else if (n>=10 && n<=39) {
        console.log("bekert szam: "+n);
        tizesDb=n/10;
        tizesDb=Math.floor(tizesDb);
        console.log("kerekitett szam: "+tizesDb);
        for (let i = 0; i < tizesDb; i++) {
            romai+="X";
        }
        n=n-tizesDb*10;
        console.log("tizes nelkuli "+n);
        if (n>0 && n<=3) {
            romai+=iBetuk(n);
        }else if(n>=4 && n<=9){
            romai+=negyEs9Kozott(n);
        }
    }
    
    return romai;
}

function iBetuk(n) {
    let romaiVisszateres="";
    for (let i = 0; i < n; i++) {
        romaiVisszateres+="I";
    }
    return romaiVisszateres;
}

function negyEs9Kozott(n) {
    let romaiVisszateres="";
    if (n===4) {
        romaiVisszateres+="IV";
    }
    else if (n===9) {
        romaiVisszateres+="IX";
    }
    else{
        romaiVisszateres+="V";
        n-=5;
        if (n>0 && n<=3) {
            romaiVisszateres+=iBetuk(n);
        }
    }
    return romaiVisszateres;
}