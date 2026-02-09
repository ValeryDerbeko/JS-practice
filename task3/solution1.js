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
  let node1 = list1;
  let node2 = list2;

  // ссылка последний добавленный узел списка
  let resultNode;

  // ссылка на head слитого связанного списка
  let firstNode = null;

  // выполнить добавление узла в новый связанный список
  const addChain = (node) => {
    // отдельно обрабатывается инициализация значений
    if (resultNode === undefined) {
      resultNode = new ListNode(node.val);
      firstNode = resultNode;
    } else {
      resultNode.next = new ListNode(node.val);
      resultNode = resultNode.next;
    }
  };

  while (node1 !== null || node2 !== null) {
    // определение наименьшего узла среди доступных
    if (
      (node1 !== null && node2 === null) ||
      (node1 !== null && node2 !== null && node1.val < node2.val)
    ) {
      // добавляем узел в список и удаляем его
      addChain(node1);
      node1 = node1.next;
    } else {
      addChain(node2);
      node2 = node2.next;
    }
  }
  return firstNode;
};
