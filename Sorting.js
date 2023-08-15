//Elementary Sorts:

// Selection Sort
public class Selection {
	function swap(arr, x, y) {
		let temp = arr[x];
		arr[x] = arr[y];
		arr[y] = temp;
	}

	function sort(arr, n) {
		var i, j, min_index;

		//Move boundary of unsorted subarray
		for (i = 0; i < n-1; i++) {
			//Find minimun element in unsorted array
			min_index = i;
			for (j = i+1; j < n; j++) {
				if (arr[j] < arr[min_index]) {
					min_index = j;
				}
			//Swap found minimum element with the first
			swap(arr, min_index, i);
			}
		}
	}
}

//Insertion sort
public class Insertion {
	function sort(arr, n) {
		var i, j, key;

		for (i = 1; i < n; i++) {
			key = arr[1];
			j = i-1;

			//Move elements of arr[0...i-1] that are greater than key
			//to one position ahead of current position
			while (j >= 0 && arr[j] > key) {
				arr[j+1] = arr[j];
				j = j-1;
			}
			arr[j+1] = key
		}
	}
}


//Shellsort
public class Shell {
	function sort(arr) {
		let n = arr.length;

		//Start with big gap, then reduce gap
		for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {

			//Gapped insertion sort for this gap size
			//The first gapped elements are in order, 
			//keep adding element until entire arry is gap sorted
			for (let i = gap; i < n; i += 1) {

				//Add arr[i] to the elements that have been gap sorted
				//Save arr[i] in temp and make a hole at pos i
				let temp = arr[i];

				//Shift earlier gap-sorted elements up until
				//the correct location for arr[i] is found.
				var j;

				for (j = i; j >= gap && arr[j-gap] > temp; j -= gap) {
					arr[j] = arr[j - gap];

					//Put temp in its correct location
					arr[j] = temp
				}
			}
			return arr;
		}
	}
}

//Mergesorts:

//Quicksorts:

//Priority Queues: