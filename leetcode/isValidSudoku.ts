function isValidSudoku(board: string[][]): boolean {
  const rowsMap: Map<number, Set<string>> = new Map();
  const columnsMap: Map<number, Set<string>> = new Map();
  const subBoxesMap: Map<string, Set<string>> = new Map();

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === ".") continue;
      const subBoxKey = `${Math.floor(r / 3)}, ${Math.floor(c / 3)}`;

      if (
        rowsMap.get(r)?.has(board[r][c]) ||
        columnsMap.get(c)?.has(board[r][c]) ||
        subBoxesMap.get(subBoxKey)?.has(board[r][c])
      ) {
        return false;
      }
      if (!rowsMap.get(r)) rowsMap.set(r, new Set());
      if (!columnsMap.get(c)) columnsMap.set(c, new Set());
      if (!subBoxesMap.get(subBoxKey)) subBoxesMap.set(subBoxKey, new Set());

      rowsMap.get(r)?.add(board[r][c]);
      columnsMap.get(c)?.add(board[r][c]);
      subBoxesMap.get(subBoxKey)?.add(board[r][c]);
    }
  }
  return true;
}
