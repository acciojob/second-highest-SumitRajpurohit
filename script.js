//your JS code here. If required.
//your JS code here. If required.
function secondHighest(arr) {
			//Write your code here
			  if (arr.length < 2) {
    return -Infinity; // return -Infinity if the array is empty or has only 1 element
  }
  
  let first = -Infinity, second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current > first) {
      second = first;
      first = current;
    } else if (current > second && current < first) {
      second = current;
    }
  }
  
  if (second === -Infinity) {
    return -Infinity; // return -Infinity if all elements in the array are the same
  }
  
  return second;
}

		function Main() {
			var n = prompt("Enter the number of elements");
			var arr = [];
			for (var i = 0; i < n; i++) {
				arr[i] = prompt("Enter element " + (i+1));
			}
			alert(secondHighest(arr));
		}
		Main();