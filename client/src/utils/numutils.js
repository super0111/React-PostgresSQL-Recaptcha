const decimal = (v, digits) => {

    if( isNaN(v)) return "";

    let base = 1;
    while(digits > 0) {
        base *= 10; digits --;
    } 
    return Math.round(Number(v) * base) / base;
}

const formattedNumber = (v) => {

    if( isNaN(v)) return "";

    v = Number(v);
    return v ? v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : v;
}

const reformat = (datestring) => {

    if( !datestring) return "";

    let d = new Date(datestring);
    return (d.getMonth() + 1) + "/" + d.getDate() + "/"+d.getFullYear();
}

const NumUtil = {
    decimal: decimal,
    formattedNumber: formattedNumber,
    reformat: reformat
};

export default NumUtil;