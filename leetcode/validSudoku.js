class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const columnsSet = new Map();
    const rowsSet = new Map();
    const subBoxesSet = new Map();

    for (let c = 0; c < board.length; c++) {
      for (let r = 0; r < board[c].length; r++) {
        if (board[c][r] === ".") continue;
        const subBoxKey = `${Math.floor(c / 3)},${Math.floor(r / 3)}`;

        if (
          (columnsSet.get(c) && columnsSet.get(c).has(board[c][r])) ||
          (rowsSet.get(r) && rowsSet.get(r).has(board[c][r])) ||
          (subBoxesSet.get(subBoxKey) &&
            subBoxesSet.get(subBoxKey).has(board[c][r]))
        ) {
          return false;
        }

        if (!columnsSet.get(c)) columnsSet.set(c, new Set());
        if (!rowsSet.get(r)) rowsSet.set(r, new Set());
        if (!subBoxesSet.get(subBoxKey)) subBoxesSet.set(subBoxKey, new Set());

        columnsSet.get(c).add(board[c][r]);
        rowsSet.get(r).add(board[c][r]);
        subBoxesSet.get(subBoxKey).add(board[c][r]);
      }
    }
    console.log("AAA columnsSet", columnsSet);
    console.log("AAA rowsSet", rowsSet);
    console.log("AAA subBoxesSet", subBoxesSet);

    return true;
  }
}
