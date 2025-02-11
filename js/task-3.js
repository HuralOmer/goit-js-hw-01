function getElementWidth(content,padding,border){
    let floatContent=parseFloat(content);
    let floatPadding=parseFloat(padding);
    let floatBorder=parseFloat(border);

    let olcu=floatContent+2*floatBorder+2*floatPadding;
    return olcu;
}

console.log( "girilen elementin genişliği: "+getElementWidth("50px","8px","4px")+"px'dir");
console.log( "girilen elementin genişliği: "+getElementWidth("60px","12px","8.5px")+"px'dir");
console.log( "girilen elementin genişliği: "+getElementWidth("200px","0px","0px")+"px'dir");