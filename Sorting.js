// Selection Sort
public class Selection {
	function swap(arr, x, y) {
		var temp = arr[x];
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