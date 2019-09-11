import { describe, it } from 'mocha'
import { GoogleBooks } from '~/index'
import { assert } from 'chai'

describe('Volume test', () => {
  it('Get a volume', async () => {
    const volume = await GoogleBooks.volume.get('ap17uQEACAAJ')
    assert.deepEqual(volume.id, 'ap17uQEACAAJ')
  })

  it('List volumes', async () => {
    const volumes = await GoogleBooks.volume.list('ゼロから始めるDeep Learning')
    // eslint-disable-next-line no-console
    console.log(volumes.items[0].volumeInfo.imageLinks)
  })
})
