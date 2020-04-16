// ==UserScript==
// @name         RealmEye Trade Message Copy (TMC)
// @namespace    http://tampermonkey.net/
// @updateURL	https://github.com/GerRudi/Userscript-RealmEye-Trade-Message-Copy/raw/master/RE-Trade-Message-Copy.user.js
// @downloadURL	https://github.com/GerRudi/Userscript-RealmEye-Trade-Message-Copy/raw/master/RE-Trade-Message-Copy.user.js
// @version      0.1.1
// @description  Adds a button next to every Realmeye offer to be able to quickly send a message to the seller.
// @homepageURL https://github.com/GerRudi/Userscript-RealmEye-Trade-Message-Copy
// @supportURL  https://github.com/GerRudi/Userscript-RealmEye-Trade-Message-Copy/issues
// @author       GerRudi
// @match        https://www.realmeye.com/offers-to/*
// @grant        none
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require https://www.realmeye.com/s/dy/js/definition.js
// ==/UserScript==

(function() {
    'use strict';



var ezItems= {

2591: ["ATT"],
2592: ["DEF"],
2593: ["SPD"],
2612: ["VIT"],
2613: ["WIS"],
2636: ["DEX"],
2793: ["LIFE"],
2794: ["MANA"],
2759: ["Exa Attack"],
2760: ["Exa Defense"],
2761: ["Exa Speed"],
2762: ["Exa Vitality"],
2763: ["Exa Wisdom"],
2764: ["Exa Dexterity"],
2765: ["Exa Health"],
2766: ["Exa Magic"],
2979: ["Unbound Attack"],
2980: ["Unbound Defense"],
2981: ["Unbound Speed"],
2982: ["Unbound Vitality"],
2983: ["Unbound Wisdom"],
2984: ["Unbound Dexterity"],
2985: ["Unbound Health"],
2990: ["DECA Ring"],
2986: ["Unbound Magic"],
2821: ["GSORC"],
2812: ["ACROP"],
2809: ["HYDRA"]

};


// Add Coloumn to Offers Table
$('table thead tr').append('<th>MSG</th>')
$('table tbody tr').append('<td class="startPM" style="font-size: 18px; cursor:pointer"><i class="glyphicon glyphicon-envelope"></i></td>')


// Click on the letter
$(".startPM").on("click", function(){

	var sellinfo=[];
	var buyinfo=[];
	var sellername="";

	var iter=0;
	$(this).siblings("td").each(function(index){
		if(iter==0)			//SELLING
		{


			//each item-static = 1 Item
			$(this).children(".item-static").each(function(index){

				//for each item : ID

				var itID= $(this).find('.item').attr("data-item");

				//for each item : quantity
				var quant =  $(this).find('.item-quantity-static').text();
				quant=$.trim(quant);


				var oneItem = { 'id': itID, 'quantity': quant };
				sellinfo.push(oneItem);
			});
		}

		if(iter==1)			//BUYING
		{


			//each item-static = 1 Item
			$(this).children(".item-static").each(function(index){

				//for each item : ID

				var itID= $(this).find('.item').attr("data-item");

				//for each item : quantity
				var quant =  $(this).find('.item-quantity-static').text();
				quant=$.trim(quant);


				var oneItem = { 'id': itID, 'quantity': quant };
				buyinfo.push(oneItem);
			});
		}

		if(iter==5)			//NAME
		{

			sellername=$(this).children("a").first().text();
			sellername=$.trim(sellername);
		}

	iter++;

	});

	// Construct message
	var tellMSG="/tell " + sellername + " Hi, I would like to BUY <"

	var spacer =""

	sellinfo.forEach(function (item, index) {

		//check if item.id is in ezItems - simplified, else find fullname in ITEMS provided by realmeye
		try{
			var itemName=ezItems[item.id][0];
		}
		catch(err){
			itemName = items[item.id][0];
		}
		if(index ==0){spacer=""}else{spacer=","};
		tellMSG=tellMSG+spacer+item.quantity+" "+itemName;



	});

	tellMSG=tellMSG+"> with <"

	buyinfo.forEach(function (item, index) {

		//check if item.id is in ezItems - simplified, else find fullname in ITEMS provided by realmeye
		try{
		var itemName=ezItems[item.id][0];
		}
		catch(err){
			itemName = items[item.id][0];
		}
		if(index ==0){spacer=""}else{spacer=","};
		tellMSG=tellMSG+spacer+item.quantity+" "+itemName;

	});

	tellMSG=tellMSG+">"

	console.log(tellMSG);


	// COPY TO CLIPBOARD (create hidden element, select text, copy, delete)
    var targetId = "_hiddenCopyText_";
    var target = document.createElement("textarea");
	target.style.position = "absolute";
	target.style.left = "-9999px";
    var scrollpos = document.documentElement.scrollTop+"px";
	target.style.top = scrollpos;
	target.id = targetId;
    document.body.appendChild(target);
    target.textContent = tellMSG;
    target.focus();
    target.setSelectionRange(0, target.value.length);
    var succeed;

    try{
               succeed = document.execCommand("copy");
				$(this).css("color","green");
    }catch(e){

            succeed = false;
            console.log("Fehler");
				$(this).css("color","red");
    }
    target.textContent = "";
	document.getElementById("_hiddenCopyText_").remove();
});


})();
