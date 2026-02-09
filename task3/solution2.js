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
  let firstNodeInList1 = list1;
  let firstNodeInList2 = list2;

  // ссылка последний добавленный узел списка
  let lastNodeInResultList;

  // ссылка на head слитого связанного списка
  let resultList = null;

  // удалить первый узел из list1
  const removeItemInList1 = () => {
    firstNodeInList1 = firstNodeInList1.next;
  };

  // удалить первый узел из list2
  const removeItemInList2 = () => {
    firstNodeInList2 = firstNodeInList2.next;
  };

  // добавить элемент в результирующий список
  const addItemInResultList = (node) => {
    lastNodeInResultList.next = new ListNode(node.val);
    lastNodeInResultList = lastNodeInResultList.next;
  };

  // проинициализировать первый элемент нового связанного списка
  const initFirstItemInResultList = (node) => {
    lastNodeInResultList = new ListNode(node.val);
    resultList = lastNodeInResultList;
  };

  // получить узел с минимальным значением среди доступных
  const getMinNode = () => {
    if (!firstNodeInList1) return firstNodeInList2;
    if (!firstNodeInList2) return firstNodeInList1;
    if (firstNodeInList1.val < firstNodeInList2.val) return firstNodeInList1;
    return firstNodeInList2;
  };

  while (firstNodeInList1 !== null || firstNodeInList2 !== null) {
    const minNode = getMinNode();

    // удаляем узел из предоставленного списка
    if (minNode === firstNodeInList1) removeItemInList1();
    else removeItemInList2();

    // инициализируем или добавляем узел в новый связанный список
    if (resultList === null) {
      initFirstItemInResultList(minNode);
    } else {
      addItemInResultList(minNode);
    }
  }
  return resultList;
};
