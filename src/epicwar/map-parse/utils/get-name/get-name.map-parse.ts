import { JSDOM } from 'jsdom'

export function getMapName (content: string): string {
  let response = ''
  const dom = new JSDOM(content)
  const cells = dom.window.document.getElementsByClassName('listentry')

  for (const cell of cells) {
    const urls = cell.getElementsByTagName('a')
    for (const url of urls) {
      const { href } = url
      if (!href.startsWith('/maps/download')) {
        continue
      }
      return url.textContent.trim()
    }
  }

  return 'NO_NAME_FOUND'
}
