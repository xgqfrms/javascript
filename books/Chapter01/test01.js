var str = 'Quoth the raven:'+'\n\t\"Nevermore!\"';
			console.log(str);
			var s = "Quoth the raven:"+"\n\t\"Nevermore!\"";
			console.log(s);
			var s = "Quoth the raven:\n\t\"Nevermore!\"";
			console.log(s);
			var num = 10;
			for(num; num>0;num--){
			  console.log(num);
			}
			while(num>0){
			  console.log(num);
			  num--;
			}
			var numSheep = 4;
			var monthNumber = 1;
			var monthsToPrint = 12;
			while(monthsToPrint>0){
			  numSheep = numSheep * 4;
			  console.log("There will be "+numSheep+" sheep after "+monthNumber+" month(s)!");
			  monthNumber++;
			  monthsToPrint--;
			}
			/* 改进codes
			while(monthNumber <= monthsToPrint){
			  numSheep = numSheep * 4;
			  console.log("There will be "+numSheep+" sheep after "+monthNumber+" month(s)!");
			  monthNumber++;
			}
			*/
			for(monthNumber; monthNumber <= monthsToPrint; monthNumber++){
			  numSheep = numSheep * 4;
			  console.log("There will be "+numSheep+" sheep after "+monthNumber+" month(s)!");
			}
