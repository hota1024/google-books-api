import { AxiosInstance } from 'axios';
import { GoogleBookScoreOptions } from './Types/GoogleBooksCoreOptions';
import { VolumeClient } from './VolumeClient';
/**
 * GoogleBooksCore class
 */
export declare class GoogleBooksCore {
    protected readonly options: GoogleBookScoreOptions;
    /**
     * Axios instance that optimized for Google Books API
     */
    protected axios: AxiosInstance;
    readonly volume: VolumeClient;
    constructor(options?: GoogleBookScoreOptions);
    /**
     * Computed options
     */
    private computedOptions;
    /**
     * Google Books API base url
     */
    private baseURL;
}
export declare const GoogleBooks: GoogleBooksCore;
