import axios, { AxiosInstance } from 'axios'
import { GoogleBookScoreOptions } from './Types/GoogleBooksCoreOptions'
import { VolumeClient } from './VolumeClient'

/**
 * GoogleBooksCore class
 */
export class GoogleBooksCore {
  /**
   * Axios instance that optimized for Google Books API
   */
  protected axios: AxiosInstance

  public readonly volume: VolumeClient

  constructor(protected readonly options: GoogleBookScoreOptions = {}) {
    this.axios = axios.create({
      baseURL: this.baseURL()
    })
    this.volume = new VolumeClient(this.axios)
  }

  /**
   * Computed options
   */
  private computedOptions() {
    const options: GoogleBookScoreOptions = {
      base: this.options.base || 'https://www.googleapis.com/books',
      version: this.options.version || 'v1'
    }

    return options
  }

  /**
   * Google Books API base url
   */
  private baseURL() {
    const options = this.computedOptions()
    return `${options.base}/${options.version}`
  }
}

export const GoogleBooks = new GoogleBooksCore()
