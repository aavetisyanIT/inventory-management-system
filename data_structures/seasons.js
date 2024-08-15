import { LinkedList } from './linked_list_class.js';
import { nthLastNode } from './nthLastNodeLinkedList.js';

const seasons = new LinkedList();
seasons.addToHead('fall');
seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.addToHead('winter');

seasons.printList();

console.log(nthLastNode(seasons, 2));
