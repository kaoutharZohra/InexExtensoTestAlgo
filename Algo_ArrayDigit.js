

function checkDigitArray( arrayDigit) /* Function checks if given digit array is
										valid input
							     	 */
{
	for(var index =0;index<arrayDigit.length ; index++)
	{
if (arrayDigit[index]<0 || arrayDigit[index] > 9 || isNaN(arrayDigit[index]))
	return -1;
else
 	return 1;
	}

}

function checkDigitValue(digit, value)/*
										Function checks if a given digit equals a given value 
									  */
{
if( digit == value)
	return 1;
else 
	return -1;
}


function increment(arrayDigit) /*
								Function adds 1 to the input digit array 
							    returns the incremented digit array
							    */

{ 
	/* Local Variables */
var arraySize=arrayDigit.length;
var result=arrayDigit;
/* End Local Variables */
if(checkDigitArray(arrayDigit)==1)
{

if(arrayDigit.length==1)//array with one element
{

	if(checkDigitValue(arrayDigit[0],9)==1)
		{
		result[0]=1;
		result.push(0);
		}
	else
		result[0]=result[0]+1;
}
else// array with more than one element
	{
	for (var index =arraySize-1; index >= 0; index--) /*starting from the last of the array, 
														for each digit till the first 9 found
													  */
		{ 											  
			if(checkDigitValue(arrayDigit[index],9)==1)// Case : current digit is 9
				{
					if(index==0) // Case : current digit is the first digit and it is 9
					{
						result[index]=1;
						result.push(0);
					}
					else
						result[index]=0;// Case: current digit is 9,it is in the last or in the middle of the array

				}
				else
				{
				// Case : current digit is not 9
				result[index]=result[index]+1;
				break;
				}
		}

	}
return result;
}
else
	return "Input problem"

}

function isEqual(digitArray1,digitArray2) 
{ 
 
  // if length is not equal 

  if(digitArray1.length!=digitArray2.length) 
   return 0; 
  else
  { 
  // comapring each element of array 
   for(var i=0;i<digitArray1.length;i++) 
   if(digitArray1[i]!=digitArray2[i]) 
    return 0; 
    return 1; 
  } 
} 
function testIncrement()
{
	var digitArray =[9];
	var myResult=increment(digitArray);
	var result=[1,0];
	var message;
	if(isEqual(myResult,result)==1)
	{
		message="OK";
	}
	else 
	{
		message="Incorrect results";
	}
return message
}

console.log(testIncrement());
