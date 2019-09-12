import { Client } from '../Client'
import { Volume } from '../Types/Volume'
import { VolumeGetParameters } from '../Types/VolumeGetParameters'
import { VolumeListParameters } from '../Types/VolumeListParameters'
import { VolumeList } from '../Types/VolumeList'

export class VolumeClient extends Client {
  /**
   * Get volume by volume id or options
   *
   * @param volumeIdOrOptions
   */
  async get(volumeIdOrOptions: string | VolumeGetParameters) {
    if (typeof volumeIdOrOptions === 'string')
      return this.getByVolumeId(volumeIdOrOptions)
    return this.getByOptions(volumeIdOrOptions)
  }

  /**
   * Get volume by volume id
   *
   * @param volumeId
   */
  private async getByVolumeId(volumeId: string) {
    const { data } = await this.axios.get<Volume>(`volumes/${volumeId}`)
    return data
  }

  /**
   * List volumes
   *
   * @param queryOrOptions
   */
  async list(queryOrOptions: string | VolumeListParameters) {
    if (typeof queryOrOptions === 'string')
      return this.listByQuery(queryOrOptions)
    else return this.listByOptions(queryOrOptions)
  }

  /**
   * List by query
   *
   * @param query
   */
  private async listByQuery(query: string) {
    const { data } = await this.axios.get<VolumeList>(`volumes`, {
      params: {
        q: query
      }
    })
    return data
  }

  /**
   * List by options
   *
   * @param options
   */
  private async listByOptions(options: VolumeListParameters) {
    const { data } = await this.axios.get<VolumeList>(`volumes`, {
      params: {
        ...options
      }
    })
    return data
  }

  /**
   * Get Volume by options
   *
   * @param options
   */
  private async getByOptions(options: VolumeGetParameters) {
    const { data } = await this.axios.get<Volume>(
      `volumes/${options.volumeId}`,
      {
        params: options
      }
    )
    return data
  }
}
