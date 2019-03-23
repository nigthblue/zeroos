module.exports = function getZerosCount(number, base) {
	
  // your implementation
  var count=primeCount(base);
  var summ=[];
  var c=0;
  
  for(item=0;item<count.length;item++){
	  for(x=2;x<number+1;x++){
		  var y=x;
		  while(y%item==0){
			  c++;
			  y/=item;
		  }
	  }
	  summ.push(c);
	  c=0;  
  }
  c=Math.min(summ);
  if(base==Math.pow(count[0],summ.length)){
	  c=Math.floor(c/summ.length);
  }
  console.log(c);
  return c;
}
function primeCount(num){
	var count=[];
	for(i=2;i<num+1;i++){
		while(num%i==0){
			count.push(i);
			num/=i;
		}
	}
	return count;
}
