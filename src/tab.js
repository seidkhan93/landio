const tabsContainer = $(".tabs");
const contPath = ".tabs__content";
const elementPath = ".tabs__img";
var dict = [
    {
        id:   1,
        name: "Teehan + Lax",
        text: "“Sed risus feugiat fusce eu sit conubia venenatis aliquet nisl cras eu adipiscing ac cras at sem cras per”",
        img: "src/icons/tabs/0.jpg"
    },
    {
        id:   2,
        name: "Lex Luthor",
        text: "“hat should be upside down. We know better now, don't we? Devils don't come from hell beneath us. No, they come from the sky.”",
        img: "src/icons/tabs/1.jpg"
    },
    {
        id:   3,
        name: "Tachikoma",
        text: "“Yeah! And you know that 'existence of God' thing that I had trouble understanding before? I think I am starting to understand it now. Maybe, just maybe, it's a concept that's similar to a zero in mathematics. In other words, it's a symbol that denies the absence of meaning, the meaning that's necessitated by the delineation of one system from another. In analog, that's God. In digital, it's zero.”",
        img: "src/icons/tabs/2.jpg"
    }
]; 

for (var i = 0, l = Object.keys(dict).length; i < l; i++) {
    $(contPath+"_"+i).append(
        '<img class="tabs__img tabs__img_content" src="' + dict[i].img + '" >' +
        '<blockquote class="tabs__text">' + dict[i].text + '</blockquote>' +
        '<h3 class="tabs__text tabs__text_name">' + dict[i].name + '</h3>' );
}
tabFunction('1');
function tabFunction(id) {
    id = parseInt(id);
    $(contPath).hide();
    $(contPath+"_"+id).show();
}

tabsContainer.click((e) => {
    const { target } = e; 
      if (!target.dataset.id) {
        e.stopPropagation();
    } else {
        tabFunction(target.dataset.id);
    }
});


