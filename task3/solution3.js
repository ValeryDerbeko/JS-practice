/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // первый узел - заглушка
  let dummy = new ListNode(0);

  // последний узел результирующего списка
  let current = dummy;

  // не происходит создание новых узлов, а происходит изменение существующих
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // добавляем последний элемент, по которому не прошел цикл
  current.next = list1 || list2;

  // игнорируем заглушку при выводе ответа
  return dummy.next;
};
