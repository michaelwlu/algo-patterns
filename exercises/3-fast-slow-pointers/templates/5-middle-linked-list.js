class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const findLinkedListMiddle = (head) => {
	// your code here
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
console.log(findLinkedListMiddle(head).value);

head.next.next.next.next.next = new Node(6);
console.log(findLinkedListMiddle(head).value);

head.next.next.next.next.next.next = new Node(7);
console.log(findLinkedListMiddle(head).value);