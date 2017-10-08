export function changeMode(mode) {
  return {
    type: 'CHANGE_MODE',
    payload: mode
  }
}

export function showContextMenu(position) {
  return {
    type: 'SHOW_CONTEXT_MENU',
    payload: position
  }
}

export function hideContextMenu(position) {
  return {
    type: 'HIDE_CONTEXT_MENU'
  }
}
