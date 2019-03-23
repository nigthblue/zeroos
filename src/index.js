module.exports = function getZerosCount(number, base) {
	
  // your implementation
  var count=[];
  var base1=base;
  for(i=2;i<base1+1;i++){
		while(base1%i==0){
			count.push(i);
			base1/=i;
		}
	}
  var k=count.length;	
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
  if(base==Math.pow(count[0],k)){
	  c=Math.floor(c/k);
  }
  
  return c;
}
