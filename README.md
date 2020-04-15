# Userscript: RealmEye Trade-Message-Copy (TMC)
This script adds a button next to every Realmeye offer to be able to quickly send a message to the seller. 
(Copies the message to the clipboard)

![Sample screenshot](https://i.imgur.com/8bKmqP7.png "Example Screenshot")


# How to use

## Method 1 (Recommended): Userscript - always adds the button next to an offer
This requires a userscript manager like [Tampermonkey](https://tampermonkey.net/). 

Click [HERE](../../raw/master/RE-Trade-Message-Copy.user.js) to add the script to your browser. 




## Method 2 (Runs once on demand): Manually activate the button via a bookmarklet
If you only want to use this script sometimes, create a new bookmark in your browser with the following target: 

```
javascript:(function()%7Bvar%20ezItems%3D%20%7B%0A%0A2591%3A%20%5B%22ATT%22%5D%2C%0A2592%3A%20%5B%22DEF%22%5D%2C%0A2593%3A%20%5B%22SPD%22%5D%2C%0A2612%3A%20%5B%22VIT%22%5D%2C%0A2613%3A%20%5B%22WIS%22%5D%2C%0A2636%3A%20%5B%22DEX%22%5D%2C%0A2793%3A%20%5B%22LIFE%22%5D%2C%0A2794%3A%20%5B%22MANA%22%5D%2C%0A2759%3A%20%5B%22Exa%20Attack%22%5D%2C%0A2760%3A%20%5B%22Exa%20Defense%22%5D%2C%0A2761%3A%20%5B%22Exa%20Speed%22%5D%2C%0A2762%3A%20%5B%22Exa%20Vitality%22%5D%2C%0A2763%3A%20%5B%22Exa%20Wisdom%22%5D%2C%0A2764%3A%20%5B%22Exa%20Dexterity%22%5D%2C%0A2765%3A%20%5B%22Exa%20Health%22%5D%2C%0A2766%3A%20%5B%22Exa%20Magic%22%5D%2C%0A2979%3A%20%5B%22Unbound%20Attack%22%5D%2C%0A2980%3A%20%5B%22Unbound%20Defense%22%5D%2C%0A2981%3A%20%5B%22Unbound%20Speed%22%5D%2C%0A2982%3A%20%5B%22Unbound%20Vitality%22%5D%2C%0A2983%3A%20%5B%22Unbound%20Wisdom%22%5D%2C%0A2984%3A%20%5B%22Unbound%20Dexterity%22%5D%2C%0A2985%3A%20%5B%22Unbound%20Health%22%5D%2C%0A2990%3A%20%5B%22DECA%20Ring%22%5D%2C%0A2986%3A%20%5B%22Unbound%20Magic%22%5D%2C%0A2821%3A%20%5B%22GSORC%22%5D%2C%0A2812%3A%20%5B%22ACROP%22%5D%2C%0A2809%3A%20%5B%22HYDRA%22%5D%0A%0A%7D%3B%0A%0A%0A%2F%2F%20Add%20Coloumn%20to%20Offers%20Table%0A%24('table%20thead%20tr').append('%3Cth%3EMSG%3C%2Fth%3E')%0A%24('table%20tbody%20tr').append('%3Ctd%20class%3D%22startPM%22%20style%3D%22font-size%3A%2018px%3B%20cursor%3Apointer%22%3E%3Ci%20class%3D%22glyphicon%20glyphicon-envelope%22%3E%3C%2Fi%3E%3C%2Ftd%3E')%0A%0A%0A%2F%2F%20Click%20on%20the%20letter%0A%24(%22.startPM%22).on(%22click%22%2C%20function()%7B%0A%0A%09var%20sellinfo%3D%5B%5D%3B%0A%09var%20buyinfo%3D%5B%5D%3B%0A%09var%20sellername%3D%22%22%3B%0A%0A%09var%20iter%3D0%3B%0A%09%24(this).siblings(%22td%22).each(function(index)%7B%0A%09%09if(iter%3D%3D0)%09%09%09%2F%2FSELLING%0A%09%09%7B%0A%0A%09%09%09%0A%09%09%09%2F%2Feach%20item-static%20%3D%201%20Item%0A%09%09%09%24(this).children(%22.item-static%22).each(function(index)%7B%0A%09%09%09%0A%09%09%09%09%2F%2Ffor%20each%20item%20%3A%20ID%0A%09%09%09%09%0A%09%09%09%09var%20itID%3D%20%24(this).find('.item').attr(%22data-item%22)%3B%0A%0A%09%09%09%09%2F%2Ffor%20each%20item%20%3A%20quantity%0A%09%09%09%09var%20quant%20%3D%20%20%24(this).find('.item-quantity-static').text()%3B%0A%09%09%09%09quant%3D%24.trim(quant)%3B%0A%09%09%09%09%0A%09%09%09%09%0A%09%09%09%09var%20oneItem%20%3D%20%7B%20'id'%3A%20itID%2C%20'quantity'%3A%20quant%20%7D%3B%0A%09%09%09%09sellinfo.push(oneItem)%3B%0A%09%09%09%7D)%3B%0A%09%09%7D%0A%09%09%0A%09%09if(iter%3D%3D1)%09%09%09%2F%2FBUYING%0A%09%09%7B%0A%0A%09%09%09%0A%09%09%09%2F%2Feach%20item-static%20%3D%201%20Item%0A%09%09%09%24(this).children(%22.item-static%22).each(function(index)%7B%0A%09%09%09%0A%09%09%09%09%2F%2Ffor%20each%20item%20%3A%20ID%0A%09%09%09%09%0A%09%09%09%09var%20itID%3D%20%24(this).find('.item').attr(%22data-item%22)%3B%0A%0A%09%09%09%09%2F%2Ffor%20each%20item%20%3A%20quantity%0A%09%09%09%09var%20quant%20%3D%20%20%24(this).find('.item-quantity-static').text()%3B%0A%09%09%09%09quant%3D%24.trim(quant)%3B%0A%09%09%09%09%0A%09%09%09%09%0A%09%09%09%09var%20oneItem%20%3D%20%7B%20'id'%3A%20itID%2C%20'quantity'%3A%20quant%20%7D%3B%0A%09%09%09%09buyinfo.push(oneItem)%3B%0A%09%09%09%7D)%3B%0A%09%09%7D%09%09%0A%09%09%0A%09%09if(iter%3D%3D5)%09%09%09%2F%2FNAME%0A%09%09%7B%0A%0A%09%09%09sellername%3D%24(this).children(%22a%22).first().text()%3B%0A%09%09%09sellername%3D%24.trim(sellername)%3B%0A%09%09%7D%09%09%0A%09%09%0A%09iter%2B%2B%3B%0A%09%0A%09%7D)%3B%09%0A%09%0A%09%2F%2F%20Construct%20message%0A%09var%20tellMSG%3D%22%2Ftell%20%22%20%2B%20sellername%20%2B%20%22%20Hi%2C%20I%20would%20like%20to%20BUY%20%3C%22%0A%09%0A%09var%20spacer%20%3D%22%22%0A%09%0A%09sellinfo.forEach(function%20(item%2C%20index)%20%7B%0A%09%09%0A%09%09%2F%2Fcheck%20if%20item.id%20is%20in%20ezItems%20-%20simplified%2C%20else%20find%20fullname%20in%20ITEMS%20provided%20by%20realmeye%0A%09%09try%7B%0A%09%09%09var%20itemName%3DezItems%5Bitem.id%5D%5B0%5D%3B%0A%09%09%7D%0A%09%09catch(err)%7B%0A%09%09%09itemName%20%3D%20items%5Bitem.id%5D%5B0%5D%3B%0A%09%09%7D%0A%09%09if(index%20%3D%3D0)%7Bspacer%3D%22%22%7Delse%7Bspacer%3D%22%2C%22%7D%3B%0A%09%09tellMSG%3DtellMSG%2Bspacer%2Bitem.quantity%2B%22%20%22%2BitemName%3B%0A%0A%09%20%20%0A%09%20%20%0A%09%7D)%3B%0A%09%0A%09tellMSG%3DtellMSG%2B%22%3E%20with%20%3C%22%0A%09%0A%09buyinfo.forEach(function%20(item%2C%20index)%20%7B%0A%09%09%0A%09%09%2F%2Fcheck%20if%20item.id%20is%20in%20ezItems%20-%20simplified%2C%20else%20find%20fullname%20in%20ITEMS%20provided%20by%20realmeye%0A%09%09try%7B%0A%09%09var%20itemName%3DezItems%5Bitem.id%5D%5B0%5D%3B%0A%09%09%7D%0A%09%09catch(err)%7B%0A%09%09%09itemName%20%3D%20items%5Bitem.id%5D%5B0%5D%3B%0A%09%09%7D%0A%09%09if(index%20%3D%3D0)%7Bspacer%3D%22%22%7Delse%7Bspacer%3D%22%2C%22%7D%3B%0A%09%09tellMSG%3DtellMSG%2Bspacer%2Bitem.quantity%2B%22%20%22%2BitemName%3B%0A%0A%09%7D)%3B%09%0A%09%0A%09tellMSG%3DtellMSG%2B%22%3E%22%0A%09%0A%09console.log(tellMSG)%3B%0A%0A%0A%09%2F%2F%20COPY%20TO%20CLIPBOARD%20(create%20hidden%20element%2C%20select%20text%2C%20copy%2C%20delete)%0A%20%20%20%20var%20targetId%20%3D%20%22_hiddenCopyText_%22%3B%0A%20%20%20%20var%20target%20%3D%20document.createElement(%22textarea%22)%3B%0A%09target.style.position%20%3D%20%22absolute%22%3B%0A%09target.style.left%20%3D%20%22-9999px%22%3B%0A%20%20%20%20var%20scrollpos%20%3D%20document.documentElement.scrollTop%2B%22px%22%3B%0A%09target.style.top%20%3D%20scrollpos%3B%0A%09target.id%20%3D%20targetId%3B%0A%20%20%20%20document.body.appendChild(target)%3B%20%20%20%20%0A%20%20%20%20target.textContent%20%3D%20tellMSG%3B%0A%20%20%20%20target.focus()%3B%0A%20%20%20%20target.setSelectionRange(0%2C%20target.value.length)%3B%0A%20%20%20%20var%20succeed%3B%0A%0A%20%20%20%20try%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20succeed%20%3D%20document.execCommand(%22copy%22)%3B%0A%09%09%09%09%24(this).css(%22color%22%2C%22green%22)%3B%0A%20%20%20%20%7Dcatch(e)%7B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20succeed%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log(%22Fehler%22)%3B%0A%09%09%09%09%24(this).css(%22color%22%2C%22red%22)%3B%0A%20%20%20%20%7D%0A%20%20%20%20target.textContent%20%3D%20%22%22%3B%20%0A%09document.getElementById(%22_hiddenCopyText_%22).remove()%3B%0A%7D)%3B%7D)()%3B
```

To use it, open a trading page on RealmEye and click on the bookmark. 


# Disclaimer

Userscripts inject 3rd-party code to existing websites. Any update to the RealmEye website can break this script and it will stop working. This script obviously comes with no warranty. 


# Hints
I included a "simplified names"-list. 
The script will use commonly known abbreviations instead of the full name (if defined). 
Example: "Robe of the Grand Sorcerer" becomes "GSORC"

# Related projects from me
[Simpler-RotMG](https://github.com/GerRudi/SimpleR-RotMG)
1-click wrapper for RotMG with chat macros, different fullscreen options and other features. 
