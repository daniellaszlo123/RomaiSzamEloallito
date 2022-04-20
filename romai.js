function romaiSzam(n) {
    //let szamjegyek=;
    let romai="";
    if (n>0 && n<=3) {
        for (let i = 0; i < n; i++) {
            romai+="I";
        }
    }else if (n===4) {
        romai+="IV";
    }
    return romai;
}