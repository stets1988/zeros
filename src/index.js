module.exports = function zeros(expression) {
  	var fact_summ=1;
  	var result=0;
  	var length=expression.length;
  	var fact=expression.slice(0,length-1);
  	for(var i=1; i<=fact; i++)
  	{ 
  		fact_summ*=i;

  	}
  	fact_summ_string=String(fact_summ);
  	for(var j=0; j<fact_summ_string.length; j++)
  	{
  		if(fact_summ_string[j]==0)
  			result+=1;
  	}
  	return result;
}
