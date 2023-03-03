let array=[1,2,5,4,2,3,5,1]
function dub(array)
{
	let result=[];
	for(i=0;i<array.length;i++)
	{
		let exists=false;
		for(j=0;j<result.length;j++)
		{
			if(array[i]===result[j])
			{
				exists=true;
				break;
			}
		}
		if(!exists)
		{
			result.push(array[i])
		}
	}
	return result
}
document.write(dub(array))