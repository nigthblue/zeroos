module.exports = function getZerosCount(number, base) {
	
  // your implementation
  var count=[];
  for(i=2;i<base+1;i++){
		while(base%i==0){
			count.push(i);
			base/=i;
		}
	}
  count=[...new Set(count)];
  var summ=[];
  var c=0;
  for(item=0;item<count.length;item++){
	  for(x=2;x<number+1;x++){
		  var y=x;
		  while((y)%count[item]==0){
			  c++;
			  y/=count[item];
		  }
	  }
	  summ.push(c);
	  c=0; 
  }
  var c = summ[0];
    for (var i = 0; i < summ.length; i++) {
        if (c > summ[i]) c = summ[i];
    }
	console.log(c);
	var perem=1;
	for(x=0;x<count.length;x++){
		perem*=count[x];
	}
  if(base==Math.pow(perem,summ.length)){
	  c=Math.floor(c/count.length);
	  console.log(c);
  }
  
  return c;
}
