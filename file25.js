// object destructuring
const band={
    bandName:"akky bandwale",
    famousSong: "lv the jean",
    year:2002,
    month:"April",
    game:"GTA v",
};
console.log(band);
let {bandName,famousSong,...restprops}=band;
console.log(bandName);
console.log(restprops);