module.exports = function zeros(expression) {
  	let fact_summ=1;
  	let count=0;
  	let k=0;
  	let p=0;
  	let check="";
  	let arr2 = []; //считается через 2 числа
  	let arr3 = []; //обычный факториал
  	let arr = expression.split('*');	

  	arr.forEach((item) => {
  	k=`${item}`.length;
  	{
  		check=`${item}`[k-1]+`${item}`[k-2];
  		
  	}
  	if(check == "!!" )
  		{
  			p=`${item}`.slice(0, k-2);
  			arr2.push(Number(p));
  		}
  	else
  		{
  			p=`${item}`.slice(0, k-1);
  			arr3.push(Number(p)); 
  		}
});

 	arr3.forEach((item) => {
  		for(let m=1; m<=`${item}`;m++)
  			{
		  		fact_summ*=m;
  		for (var k = 0; k<=fact_summ; k++)
    		{	
    			if(fact_summ%10==0)
    			{
    				count++;
    				fact_summ/=10;
    			}
  			}
  			}
fact_summ=1;
});



 	arr2.forEach((item) => {
  		if(`${item}`%2==0)
  		{
  		for(let m=2; m<=`${item}`;)
  			{
		  		fact_summ*=m;
		  		m=m+2;
  		for (var k = 0; k<=fact_summ; k++)
    		{	
    			if(fact_summ%10==0)
    			{
    				count++;
    				fact_summ/=10;
    			}
  			}
  			}
  		}
  		else
  		{
  				for(let m=1; m<=`${item}`;m++)
  			{
		  		fact_summ*=m;
  		for (var k = 0; k<=fact_summ; k++)
    		{	
    			if(fact_summ%10==0)
    			{
    				count++;
    				fact_summ/=10;
    			}
  			}
  			}
  		}
fact_summ=1;
});

return count;	
}
