import { LinkedList } from './linked_list_class.js';
import { swapNodes } from './swapNodesLinkedList.js';

const seasons = new LinkedList();
seasons.addToHead('fall');
seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.addToHead('winter');

seasons.printList();

swapNodes(seasons, 'summer', 'winter');
seasons.printList();
