import { DoublyLinkedList } from './doublyLinkedList_class.js';

const subway = new DoublyLinkedList();

subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');

subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');

subway.removeHead();
subway.removeTail();

subway.removeByData('TimesSquare');

subway.printList();
