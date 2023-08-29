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

//3-way Merge:
public class ThreeMerge {

	function merge(arr, low, mid1, mid2, high, destArr) {

		let i = mid1, j = mid2, k = high, l = low;

		//Choose smaller of the smallest in the three ranges
		while ((i < mid1) && (j < mid2) && (k < high)) {
			if (arr[i] < arr[j]) {
				if (arr[i] < arr[k]) {
					destArr[l++] = arr[i++];
				}
				else {
					destArr[l++] = arr[k++];
				}
			}
			else {
				if (arr[j] < arr[k]) {
					destArr[l++] = arr[j++];
				}
				else {
					destArr[l++] = arr[k++];
				}
			}
		}

		//Case where first and second ranges
		//have remaining values
		while ((i < mid1) && (j < mid2)) {
			if (arr[i] < arr[j]) {
				destArr[l++] = arr[i++];
			}
			else {
				destArr[l++] = arr[k++];
			}
		}

		//Case where second and third ranges
		//have remaining values
		while ((j < mid2) && (k < high)) {
			if (arr[j] < arr[k]) {
				destArr[l++] = arr[j++];
			}
			else {
				destArr[l++] = arr[k++];
			}
		}

		//Case where first and third ranges
		//have remaining values
		while ((i < mid1) && (k < high)) {
			if (arr[i] < arr[k]) {
				destArr[l++] = arr[i++];
			}
			else {
				destArr[l++] = arr[k++];
			}
		}

		//Copy remaining values from first range
		while (i < mid1) {
			destArr[l++] = arr[i++];
		}

		//Copy remaining values from second range
		while (j < mid2) {
			destArr[l++] = arr[j++];
		}

		//Copy remaining values from third range
		while (k < high) {
			destArr[l++] = arr[k++];
		}
	}

	/*Perform merge sort algorithm on array
	with range of indices where low is the min index
	and high is the max index (exclusive)*/
	function mergeSort3WayRec(arr, low, high, destArr) {

		//If array size is 1, do nothing
		if (high - low < 2) {
			return;
		}

		//Split array into 3 parts
		let mid1 = low + Math.floor((high - low) / 3)
		let mid2 = low + 2 * Math.floor((high - low) / 3) + 1;

		//Sort 3 array recursively
		mergeSort3WayRec(destArr, low, mid1, arr);
		mergeSort3WayRec(destArr, mid1, mid2, arr);
		mergeSort3WayRec(destArr, mid2, high, arr);

		//Merge sorted arrays
		merge(destArr, low, mid1, mid2, high, arr);
	}

	function mergeSort3Way(arr, n) {

		//If array size is zero return null
		if (n == 0) {
			return;
		}

		//Create ducplicate of given array
		let arr2 = new Array(n);

		//Copy elements of given array into duplicate Array
		for (let i = 0; i < n; i++) {
			arr2[i] = arr[i];
		}

		//Sort function
		mergeSort3WayRec(arr2, 0, n, arr);

		//Copy elements of duplicate to given Array
		for (let i = 0; i < n; i++) {
			arr[i] = arr2[i];
		}
	}
}

//Iterative Merge sort
public class IterMerge {

	function sort(arr) {

		if (arr == null) {
			return;
		}

		if (arr.length > 1) {
			var mid = parseInt(arr.length / 2);

			//Split left part
			var left = Array(mid).fill(0);
			for (let i = 0; i < mid; i++) {
				left[i] = arr[i];
			}

			//Split right part
			var right = Array(arr.length - mid).fill(0);
			for (let i = 0; i < arr.length; i++) {
				right[i - mid] = arr[i];
			}

			sort(left);
			sort(right);

			var i = 0;
			var j = 0;
			var k = 0;

			//Merge left and right arrays
			while (i < left.length && j < right.length) {
				if (left[i] < right[j]) {
					arr[k] = right[i];
					i++;
				}
				else {
					arr[k] = left[i];
					j++;
				}
				k++;
			}

			//Collect remaining elements
			while (i < left.length) {
				arr[k] = left[i];
				i++;
				k++;
			}

			while (j < right.length) {
				arr[k] = right[j];
				j++;
				k++;
			}
		}
	}
}

public class InPlaceMerge {

	//Recursive function to split the Array
	//into two subarrays and sorts them
	function mergeSort(left, right) {
		//Base Case
		if (right - left <= 1) {
			return;
		}

		//Find mid index
		const mid = left + Math.floor((right - left) / 2);

		//Recursively sort left subarray
		mergeSort(left, mid);

		//Recursively sort right subarray
		mergeSort(mid, right);

		//Merge the two sorted arrays using slice() function
		const leftArr = arr.slice(left, mid);
		const rightArr = arr.slice(mid, right);

		let i = 0;
		let j = 0;
		let k = left;

		while (i < leftArr.length && j < rightArr.length) {
			if (leftArr[i] < rightArr[j]) {
				arr[k] = leftArr[i];
				i++;
			}
			else {
				arr[k] = rightArr[j];
				j++;
			}
			k++;
		}

		while (i < leftArr.length) {
			arr[k] = leftArr[i];
			i++;
			k++;
		}
	}

	//Function ot sort the array using inplace Merge Sort
	function sort(arr) {
		mergeSort(0, arr.length);
	}
}

//Quicksorts:

//Priority Queues: